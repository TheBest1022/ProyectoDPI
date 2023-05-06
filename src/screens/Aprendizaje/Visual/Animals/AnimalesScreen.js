import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../../components/Layout";
import Name from "../../../../components/General";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
//IMAGENES
import Img from "../../../../../assets/animalespicto.png";
import Mamifero from "../../../../../assets/mami.png";
import Reptiles from "../../../../../assets/reptiles.png";
import Aves from "../../../../../assets/aereos.png";
import Anfibios from "../../../../../assets/anfibio.png";
import Peces from "../../../../../assets/pecesitos.png";
import Invertebrados from "../../../../../assets/invertebrados.png";
import Vertebrados from "../../../../../assets/vertebrados.png";
import atras from "../../../../../assets/atras.png";

const AnimalesScreen = () => {
  const [sound] = React.useState();
  const navigation = useNavigation();
  const handlepostPressPress = () => {
    navigation.navigate("seccionhumano");
  };
  const handleclick = (navegacion, id) => {
    navigation.navigate(navegacion, { id: id });
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <Text style={style.text}>LOS ANIMALES</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                Un animal es un ser vivo que puede moverse por sus propios
                medios.
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={Img}
                style={style.Img}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>Los animales se Clasifican en: </Text>

          <View style={style.texto}>
            <Text style={style.descripcion}>
              Los animales se pueden clasificar en dos grandes grupos:
            </Text>
          </View>

          <View style={style.contenedoriconos}>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={() => {
                  handleclick("Animales", "Vertebrados");
                }}
              >
                <ImageBackground
                  source={Vertebrados}
                  style={style.foto}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={() => {
                  handleclick("Animales", "Invertebrados");
                }}
              >
                <ImageBackground
                  source={Invertebrados}
                  style={style.foto}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={style.textos}>Tipos de Animales: </Text>

          <View style={style.texto}>
            <Text style={style.descripcion}>
              El grupo de los animales vertebrados se subdivide en:
            </Text>
          </View>

          <View style={style.contenedoriconos}>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={() => {
                  handleclick("Animales", "Mamiferos");
                }}
              >
                <ImageBackground
                  source={Mamifero}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={() => {
                  handleclick("Animales", "Aereos");
                }}
              >
                <ImageBackground
                  source={Aves}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={() => {
                  handleclick("Animales", "Acuatico");
                }}
              >
                <ImageBackground
                  source={Peces}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.contenedoriconos}>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={() => {
                  handleclick("Animales", "Reptiles");
                }}
              >
                <ImageBackground
                  source={Reptiles}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={() => {
                  handleclick("Animales", "Anfibios");
                }}
              >
                <ImageBackground
                  source={Anfibios}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.contendor}>
            <TouchableOpacity onPress={handlepostPressPress}>
              <ImageBackground
                source={atras}
                style={style.btn}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#f0f8ff",
    paddingBottom: "4%",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
  },
  tex: {
    width: 230,
    margin: 8,
    alignSelf: "center",
  },
  descripcion: {
    textAlign: "justify",
    fontSize: 11,
    lineHeight: 18,
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
  },
  Img: {
    width: 140,
    height: 140,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
  },
  textos: {
    fontSize: 12,
    color: "purple",
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5,
  },
  foto: {
    width: 140,
    height: 140,
    marginLeft: 8,
    marginRight: 8,
  },
  txt: {
    textAlign: "justify",
    fontSize: 11,
    lineHeight: 18,
  },
  txtcon: {
    width: 370,
    alignSelf: "center",
  },
  contenedoriconos: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  contend: {
    backgroundColor: "#ed1e79",
    padding: 15,
    width: 140,
    alignSelf: "center",
  },
  contex: {
    color: "white",
    fontWeight: "bold",
  },
  texto: {
    width: 370,
    alignSelf: "center",
  },
  ft: {
    width: 110,
    height: 110,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default AnimalesScreen;

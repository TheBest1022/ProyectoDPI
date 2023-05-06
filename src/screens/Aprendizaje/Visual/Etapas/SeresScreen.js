import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataVida, dataMuerte } from "../../../../sample/Visual";
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
import Img from "../../../../../assets/vivos.png";
import enfermo from "../../../../../assets/piedra.png";
import atras from "../../../../../assets/atras.png";

const SeresScreen = () => {
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("seccionhumano");
  };
  const renderData = () => {
    return (
      <View>
        {dataVida.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source, sonido }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.Img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const renderMuerte = () => {
    return (
      <View>
        {dataMuerte.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source, sonido }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.Img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  }
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

          <Text style={style.text}>LOS SERES VIVOS</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                Son los que tienen vida. Ello significa que realizan actividades
                que les permiten vivir. Se alimentan, crecen, se reproducen y
                mueren.
              </Text>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity>
                <ImageBackground
                  source={Img}
                  style={style.Img}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={style.textos}>¿Que es la estapa de la Vida?</Text>
          {renderData()}

          <Text style={style.text}>LOS SERES NO VIVOS</Text>

          <View style={style.contendor}>
            <View style={style.imagen}>
              <TouchableOpacity>
                <ImageBackground
                  source={enfermo}
                  style={style.Img}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                Los seres inertes o abióticos, son todos aquellos objetos
                inanimados o sin vida.
              </Text>
            </View>
          </View>

          <Text style={style.textos}>Ejemplo de seres no vivos</Text>
          
          {renderMuerte()}

          <View style={style.contendor}>
            <TouchableOpacity onPress={handlebackPress}>
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
    width: 90,
    height: 90,
    margin: 3,
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
  Img: {
    width: 90,
    height: 90,
    margin: 3,
  },
});

export default SeresScreen;

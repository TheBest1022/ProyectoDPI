import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../context/GlobalProvider";
import Layout from "../../components/Layout";
import Name from "../../components/Name";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";


import Img from "../../../assets/estimulacion.png";
import Img2 from "../../../assets/atencion.png";
import Img3 from "../../../assets/alegre.png";
import Img4 from "../../../assets/triste.png";
import Img5 from "../../../assets/enfadado.png";
import Img6 from "../../../assets/profesor.png";
import ver from "../../../assets/vermas.png";
import cerrar from "../../../assets/exit.png";

const PrincipalScreen = () => {
  const { auth, LogOut } = useGlobal();
  const navigation = useNavigation();
  const handleback = () => {
    LogOut();
    if (auth == null) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("Principal");
    }
  };
  const handle = () => {
    navigation.navigate("Aprendizaje");
  };
  const animo = () => {
    navigation.navigate("Ánimo");
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name title="PRINCIPAL" />

          <View style={style.curso}>
            <Text style={style.texto}>CONÓCENOS </Text>
          </View>

          <View style={style.contenedor}>
            <ImageBackground
              source={Img6}
              style={style.est}
            ></ImageBackground>
            <View style={style.desciption}>
              <Text style={style.tex}>
                TEAyudo Aprender es una herramienta de aprendizaje, intervención
                e inclución social para persona con TEA y otras niños con
                habilidades especiales.
              </Text>
              <Text style={style.tex}>
                Es una aplicación interactiva para favorecer la inclusión
                educativa y social.
              </Text>
            </View>
          </View>

          <View style={style.curso}>
            <Text style={style.texto}>MIS CURSOS </Text>
          </View>

          <View style={style.contenedor}>
            <View style={style.clase}>
              <ImageBackground
                source={Img}
                style={style.Img}
              ></ImageBackground>
              <Text style={style.humano}>Estimulación Visual</Text>
            </View>

            <View style={style.clase}>
              <ImageBackground
                source={Img2}
                style={style.Img}
              ></ImageBackground>
              <Text style={style.humano}>Trabajo de atención</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handle}>
            <View style={style.ver}>
              <Text style={style.mas}>ver mas</Text>
              <ImageBackground
                source={ver}
                style={style.vermas}
              ></ImageBackground>
            </View>
          </TouchableOpacity>

          <View style={style.curso}>
            <Text style={style.texto}>¿COMO TE ENCUENTRAS HOY?</Text>
          </View>

          <View style={style.contenedor}>
            <View style={style.estado}>
              <ImageBackground
                source={Img3}
                style={style.animo}
              ></ImageBackground>
            </View>
            <View style={style.estado}>
              <ImageBackground
                source={Img4}
                style={style.animo}
              ></ImageBackground>
            </View>
            <View style={style.estado}>
              <ImageBackground
                source={Img5}
                style={style.animo}
              ></ImageBackground>
            </View>
          </View>

          <TouchableOpacity onPress={animo}>
            <View style={style.ver}>
              <Text style={style.mas}>ver mas</Text>
              <ImageBackground
                source={ver}
                style={style.vermas}
              ></ImageBackground>
            </View>
          </TouchableOpacity>

          <View style={style.atras}>
            <TouchableOpacity onPress={handleback}>
              <ImageBackground
                source={cerrar}
                style={style.imagencerrar}
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
    backgroundColor: "#f0f8ff",
    marginTop: 30,
    paddingBottom: "1%",
  },
  imagencerrar: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 15,
  },
  curso: {
    padding: 8,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
  },
  contenedor: {
    flexDirection: "row",
    alignSelf: "center",
  },
  clase: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 5,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 2,
    backgroundColor: "white",
  },
  Img: {
    width: 50,
    height: 50,
    margin: 3,
  },
  humano: {
    alignSelf: "center",
    fontWeight: "bold",
    marginRight: 12,
    marginRight: 20,
    fontSize: 10,
  },
  ver: {
    flexDirection: "row",
    marginLeft: 320,
    width: 70,
  },
  vermas: {
    width: 10,
    height: 10,
    alignSelf: "center",
    margin: 3,
  },
  mas: {
    color: "navy",
    fontWeight: "bold",
  },
  animo: {
    width: 100,
    height: 100,
  },
  estado: {
    padding: 10,
  },
  est: {
    width: 120,
    height: 199,
    alignSelf: "center",
  },
  desciption: {
    width: 250,
    padding: 8,
    alignSelf: "center",
  },
  tex: {
    textAlign: "justify",
    fontSize: 10,
    lineHeight: 18,
  },
  atras:{
    alignSelf:'center'
  }
});

export default PrincipalScreen;

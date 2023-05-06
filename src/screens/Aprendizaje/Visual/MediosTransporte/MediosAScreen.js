import React from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../../components/Layout";
import Name from "../../../../components/General";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import atras from "../../../../../assets/atras.png";
import pecho from "../../../../../assets/avion.png";
import barriga from "../../../../../assets/avioneta.jpg";
import espalda from "../../../../../assets/helicoptero.png";
import leon from "../../../../../assets/globoaereo.png";
import tigre from "../../../../../assets/cohete.png";
import mami from "../../../../../assets/avion.png"

function MediosAScreen() {
  const navigation = useNavigation();
  const handleback = () => {
    navigation.navigate("transporte");
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <Text style={style.text}> MEDIOS DE TRANSPORTES AÉREOS</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
              Son aquellos medios que se movilizan por el aire. Ejemplos de medios de transportes aéreos: 
              helicóptero, avión, cohetes espaciales, etc. 
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={mami}
                style={style.humano}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>Ejmeplos</Text>

          <View style={style.containerimages}>
            <TouchableOpacity>
              <ImageBackground
                source={pecho}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={espalda}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={barriga}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={style.containerimages}>
            <TouchableOpacity>
              <ImageBackground
                source={leon}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={tigre}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>

          </View>


          <View style={style.containerimages}>
            <TouchableOpacity onPress={handleback}>
              <ImageBackground
                source={atras}
                style={style.imagensiguiente}
              ></ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#f0f8ff",
    paddingBottom:15
  },
  imagepartes: {
    width: 120,
    height: 120,
    alignSelf: "center",
    margin: 3,
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
  },
  imagensiguiente: {
    width: 40,
    height: 40,
    margin: 5,
    alignSelf: "center",
    marginTop:80
  },
  contenedor: {
    width: 120,
    alignSelf: "center",
  },
  conceptoba: {
    width: 400,
    height: 130,
  },
  domestico: {
    width: 350,
    height: 50,
    alignSelf: "center",
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
  humano: {
    width: 140,
    height: 140,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 15,
  },
  textos: {
    fontSize: 12,
    color: "purple",
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 5,
  },
});

export default MediosAScreen;

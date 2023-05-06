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
//IMAGENES
import atras from "../../../../../assets/atras.png";
import pecho from "../../../../../assets/barco.png";
import barriga from "../../../../../assets/piraguas.png";
import espalda from "../../../../../assets/bote.jpg";
import leon from "../../../../../assets/pesquero.png";
import tigre from "../../../../../assets/submarino.png";
import mami from "../../../../../assets/yate.png"
import lancha from "../../../../../assets/motoacua.png"
import canoa from "../../../../../assets/canoa.png"
import pedales from "../../../../../assets/pedales.png"
import la from "../../../../../assets/lancha.png"

function MediosAcScreen() {
  const navigation = useNavigation();
  const handleback = () => {
    navigation.navigate("transporte");
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <Text style={style.text}> MEDIOS DE TRANSPORTES ACUÁTICOS</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
              Son aquellos que se desplazan por el agua. 
              Ejemplos de medios de transportes acuáticos: Lanchas, botes, cruceros, piraguas, etc.
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={mami}
                style={style.humano}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>Ejmplos</Text>

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

            <TouchableOpacity>
              <ImageBackground
                source={lancha}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>

          </View>
          
          <View style={style.containerimages}>
            <TouchableOpacity>
              <ImageBackground
                source={canoa}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={pedales}
                style={style.imagepartes}
              ></ImageBackground>
            </TouchableOpacity>

            
            <TouchableOpacity>
              <ImageBackground
                source={la}
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

export default MediosAcScreen;

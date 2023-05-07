import React from "react";
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
const TransporteScreen = () => {
  const Img = {uri:"https://www.dropbox.com/s/6ubn2pkmwqwlvjy/transportes.png?dl=1"}
  const Terreste = {uri:"https://www.dropbox.com/s/7jhd6txshzom5lr/terrestre.png?dl=1"}
  const Marítimos = {uri:"https://www.dropbox.com/s/pck4lefffp8a26c/mar%C3%ADtimos.png?dl=1"}
  const Aereo = {uri:"https://www.dropbox.com/s/0q6fhepxakakwdp/aereos.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const handleTerrestrePress = () => {
    navigation.navigate("MediosTransporteScreen");
  };
  const handleAereosPress = () => {
    navigation.navigate("MediosTransporteScreen");
  };
  const handleAcuaticosPress = () => {
    navigation.navigate("MediosTransporteScreen");
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <Text style={style.text}>LOS MEDIOS DE TRANSPORTE</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                Son los diferentes sistemas o maneras que le permite a las
                personas trasladarse de un lugar a otro, además contribuyen al
                desarrollo social y económico de los pueblos.
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={Img}
                style={style.Img}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>
            Los medios de transporte se clasifican en 3 clases:
          </Text>

          <View style={style.contenedoriconos}>
            <View style={style.imagen}>
              <TouchableOpacity onPress={handleTerrestrePress}>
                <ImageBackground
                  source={Terreste}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity onPress={handleAereosPress}>
                <ImageBackground
                  source={Aereo}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.contenedoriconos}>
            <View style={style.imagen}>
              <TouchableOpacity onPress={handleAcuaticosPress}>
                <ImageBackground
                  source={Marítimos}
                  style={style.ft}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

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
    marginLeft: 20,
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
    width: 180,
    height: 180,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default TransporteScreen;

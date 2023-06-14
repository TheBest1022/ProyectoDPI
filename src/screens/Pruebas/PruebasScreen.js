import React from "react";
import { useNavigation } from "@react-navigation/native";
import { dataPruebas } from "../../sample/Prueba";
import Layout from "../../components/Layout";
import Name from "../../components/General";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const PruebasScreen = () => {
  const atras = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
  const navigation = useNavigation();
  const handlebackpress = () => {
    navigation.navigate("Principal");
  };
  const handleclick = (id) => {
    navigation.navigate("preguntas", { id: id });
  };
  const renderData = () => {
    return (
      <View>
        <View style={style.contendor}>
          {dataPruebas.map(({ Img, id }, index) => (
            <View style={style.contendor} key={index}>
              {Img.map(({ img, descripcion }, index) => (
                <View style={style.contendor} key={index}>
                  <View style={style.imagen}>
                    <TouchableOpacity
                      onPress={() => {
                        handleclick(id);
                      }}
                    >
                      <ImageBackground
                        source={img}
                        style={style.Img}
                      ></ImageBackground>
                      <View style={style.descripcion}>
                        <Text style={style.texto}>{descripcion}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <Layout>
        <Name />

        <View style={style.contendor}>
        <Text style={style.text}>APLICAMOS LO APRENDIDO</Text>
        {renderData()}
          <TouchableOpacity onPress={handlebackpress}>
            <ImageBackground source={atras} style={style.btn}></ImageBackground>
          </TouchableOpacity>
        </View>
      </Layout>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor:'white'
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
  },
  Img: {
    width: 100,
    aspectRatio: 1,
    flexDirection: "row",
    alignSelf: "center",
  },
  descripcion: {
    width: 150,
    alignSelf: "center",
    padding: 3,
  },
  texto: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 7,
    color: "navy",
  },
  imagen: {
    width: 120,
  },
  //text
  text: {
    color: "navy",
    fontSize: 25,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default PruebasScreen;

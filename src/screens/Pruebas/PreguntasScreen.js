import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import Name from "../../components/General";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { dataPreguntas } from "../../sample/Prueba";
import Cronometro from "../../components/Cronometro";

const PreguntasScreen = ({ navigation, route }) => {
  const id = route.params ? route.params.id : null;

  const renderData = () => {
    let data = dataPreguntas.filter((item) => {
      return item.id == id;
    });
    return (
      <View style={style.container}>
        <View>
          {data.map(({ Question }, index) => (
            <View key={index}>
              {Question.map(({ pregunta, imagenes }, index) => (
                <View key={index}>
                  <View style={style.containerPregunta}>
                    <Text style={style.pregunta}>{pregunta}</Text>
                  </View>
                  <View style={style.containerImagen}>
                    {imagenes.map(({ uri }, index) => (
                      <View style={style.Imagen} key={index}>
                        <TouchableOpacity>
                          <ImageBackground
                            source={{ uri: uri }}
                            style={style.Img}
                          ></ImageBackground>
                        </TouchableOpacity>
                      </View>
                    ))}
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
        <View style={style.containerAprendido}>
          <Cronometro />
        </View>
        {renderData()}
      </Layout>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  //Imagen
  Img: {
    width: 110,
    height: 110,
  },
  //pregunta
  containerPregunta: {
    width: "100%",
    padding: 5,
    alignSelf: "center",
    width: "90%",
  },
  pregunta: {
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
  },
  //Imagen
  containerImagen: {
    flexDirection: "row",
    alignSelf: "center",
  },
  Imagen: {
    margin: 5,
  },
  //ContainerAprendido
  containerAprendido: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    justifyContent:'center'
  },
});

export default PreguntasScreen;

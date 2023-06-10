import React from "react";
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

const PreguntasScreen = ({ navigation, route }) => {
  const id = route.params ? route.params.id : null;
  const renderData = () => {
    let data = dataPreguntas.filter((item) => {
      return item.id == id;
    });
    return (
      <View>
        <View style={style.container}>
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
        <Text style={style.text}>APLICAMOS LO APRENDIDO</Text>
        {renderData()}
      </Layout>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  //Aplicamos lo Aprendido
  text: {
    color: "navy",
    fontSize: 25,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
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
  },
  pregunta: {
    fontWeight: "bold",
    fontSize: 15,
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
});

export default PreguntasScreen;

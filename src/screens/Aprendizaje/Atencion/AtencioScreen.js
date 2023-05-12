import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Text,
  Linking,
} from "react-native";
import { dataAtencion } from "../../../sample/Atencion";
import { useGlobal } from "../../../context/GlobalProvider";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";

const AtencioScreenScreen = ({ route }) => {
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const id = route.params ? route.params.id : null;
  const { TemaId, tema, recharge } = useGlobal();
  const handlebackPress = () => {
    navigation.navigate("Aprendizaje");
  };
  const handlePressPdf = async (link) => {
    try {
      const url = `${link}`;
      console.log(url);
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        alert("No se puede abrir el archivo PDF");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    TemaId(id);
  }, [recharge]);
  const renderData = () => {
    return (
      <View>
        {dataAtencion.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source, Descripcion, link }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity onPress={() => handlePressPdf(link)}>
                  <ImageBackground
                    source={source}
                    style={style.Img}
                  ></ImageBackground>
                  <View style={style.descripcion}>
                    <Text style={style.texto}>{Descripcion}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />
          {renderData()}
          <View>
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
    width: "100%",
    backgroundColor: "white",
    marginTop: 15,
    paddingTop: 5,
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
  },
  Img: {
    width: 115,
    height: 115,
    margin: 5,
  },
  descripcion: {
    width: 110,
    alignSelf: "center",
  },
  texto: {
    textAlign: "center",
    fontWeight:'bold',
    fontSize:12,
    color:'navy'
  },
});

export default AtencioScreenScreen;

import React from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../../components/Layout";
import Name from "../../../../components/General";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const DescripcionMod = () => {
  const Img = {uri:"https://www.dropbox.com/s/74kvp8au94kmbn1/humano.png?dl=1"}
  const sentido = {uri:"https://www.dropbox.com/s/3qwy6a1z1fgzrau/sentidos.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const navigation = useNavigation();
  const handlecuerpoPress = () => {
    navigation.navigate("cuerpo");
  };
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const handleExtremidadesPress = () => {
    navigation.navigate("Extremidades");
  };

  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <View style={style.contendor}>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={handleExtremidadesPress}
              >
                <ImageBackground
                  source={Img}
                  style={style.Img}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.contendor}>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={handlecuerpoPress}
              >
                <ImageBackground
                  source={sentido}
                  style={style.img}
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
    height:"100%",
    width:"100%",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  img: {
    width: 250,
    height: 250,
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  Img: {
    width: 250,
    height: 250,
    marginTop: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
});

export default DescripcionMod;

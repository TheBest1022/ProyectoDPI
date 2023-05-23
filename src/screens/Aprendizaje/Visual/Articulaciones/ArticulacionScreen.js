import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataArticulaciones} from "../../../../sample/Visual";
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


const ArticulacionScreen = () => {
  const estirar = {uri:"https://www.dropbox.com/s/7ty3ctoqbyq0s7v/estirar.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const renderData = () => {
    return (
      <View>
        {dataArticulaciones.map(({ module }, index) => (
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
                    style={style.img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
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

          <Text style={style.text}>LAS ARTICULACIONES</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                El lugar donde un hueso se un con otro se llama ARTICULACION.
                Las articulaciones nos permiten flexionar el cuerpo de muchas
                maneras. Las articulaciones lo encontramos en el:
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={estirar}
                style={style.estirar}
              ></ImageBackground>
            </View>
          </View>

          {renderData()}

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
    width:"100%",
    height:"100%"
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  tex: {
    width: 220,
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
  estirar: {
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
  img: {
    width: 140,
    height: 140,
    margin: 7,
  },
});

export default ArticulacionScreen;

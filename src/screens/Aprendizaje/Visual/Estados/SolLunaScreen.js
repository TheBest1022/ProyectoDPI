import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
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
//IMAGENES
import sol from "../../../../../assets/sol.png";
import luna from "../../../../../assets/lunalunera.jpg";
import atras from "../../../../../assets/atras.png";
//SONIDOS
import sonido1 from "../../../../../assets/Audios/¡hacesol!.mp3";
import sonido2 from "../../../../../assets/Audios/lunallena.mp3";

const SolLunaScreen = () => {
  const navigation = useNavigation();
  const [sound, setSound] = React.useState();
  const handlepost = () => {
    navigation.navigate("visual");
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
          
          <View style={style.general}>
            <Text style={style.text}>SOL Y LUNA</Text>
            <View style={style.contendor}>
              <View style={style.tex}>
                <Text style={style.descripcion}>
                  El sol es una estrella, una enorme esfera de gas caliente que
                  está brillando y girando continuamente.
                </Text>
              </View>
              <View style={style.imagen}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido1);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={sol}
                    style={style.img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.contendor}>
              <View style={style.imagen}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido2);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={luna}
                    style={style.img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={style.tex}>
                <Text style={style.descripcion}>
                  La Luna es el satélite de la Tierra que podemos ver en el
                  cielo nocturno.
                </Text>
              </View>
            </View>
          </View>

          <View style={style.contendor}>
            <TouchableOpacity onPress={handlepost}>
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
    paddingBottom: 55,
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
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
    marginTop: 70,
  },
  img: {
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
    width: 90,
    height: 90,
    margin: 3,
  },
  txt: {
    width: 370,
    margin: 8,
    alignSelf: "center",
  },
  human: {
    width: 120,
    height: 120,
    margin: 3,
  },
  general: {
    marginTop: 60,
  },
});

export default SolLunaScreen;

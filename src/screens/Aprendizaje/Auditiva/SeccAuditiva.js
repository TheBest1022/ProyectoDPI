import React, { useEffect } from "react";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { dataAudios } from "../../../sample/Auditiva";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SeccAuditiva = () => {
  const audio = {uri:"https://www.dropbox.com/s/hk0edrbx763kg7o/audio.png?dl=1"}
  const cerrar = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("Aprendizaje");
  };

  const renderData = () => {
    return (
      <View>
        {dataAudios.map(({ module }, index) => (
          <View style={style.campo} key={index}>
            {module.map(({ sonido, source }, index) => (
              <TouchableOpacity
                onPress={async () => {
                  const { sound } = await Audio.Sound.createAsync(sonido);
                  setSound(sound);
                  await sound.playAsync();
                }}
              >
                <View style={style.campo}>
                  <View style={style.contendor} key={index}>
                    <Text style={style.text}>SONIDO:</Text>
                    <View style={style.contenedorimagen}>
                      <ImageBackground
                        source={source}
                        style={style.image}
                      ></ImageBackground>
                    </View>
                  </View>
                  <View style={style.icn}>
                    <ImageBackground
                      source={audio}
                      style={style.icono}
                    ></ImageBackground>
                  </View>
                </View>
              </TouchableOpacity>
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

          {renderData()}

          <View style={style.contenedor}>
            <TouchableOpacity onPress={handlebackPress}>
              <ImageBackground
                source={cerrar}
                style={style.imagensiguiente}
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
    marginTop: 25,
    backgroundColor: "#f0f8ff",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    width: 250,
  },
  campo: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 11,
    marginTop: 10,
    color: "navy",
    margin: 10,
    lineHeight: 18,
    alignSelf: "center",
  },
  icono: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  icn: {
    alignSelf: "center",
    margin: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  contenedorimagen: {
    marginLeft: 20,
  },
  contenedor: {
    alignItems: "center",
    margin: 3,
  },
  imagensiguiente: {
    width: 40,
    height: 40,
    margin: 5,
    alignSelf: "center",
  },
});

export default SeccAuditiva;

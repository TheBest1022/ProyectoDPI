import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { datalink } from "../../../sample/Psicomotriz";
import Layout from "../../../components/Layout";
import YoutubePlayer from "react-native-youtube-iframe";
import Name from "../../../components/General";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const PsicomotrocidadScreen = () => {
  const atras = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("Aprendizaje");
  };
  const renderData = () => {
    return (
      <View>
        {datalink.map(({ module }, index) => (
          <View style={style.conte} key={index}>
            {module.map(({ Nombre, link }, index) => (
              <View key={index}>
                <Text style={style.texto}>VIDEO: {Nombre}</Text>
                <YoutubePlayer
                  height={220}
                  width={350}
                  videoId={link}
                  play={playing}
                  onChangeState={onStateChange}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  return (
    <ScrollView>
      <Layout>
        <Name />
        <View style={style.container}>
          {renderData()}
          <TouchableOpacity onPress={handlebackPress}>
            <ImageBackground
              source={atras}
              style={style.atras}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </Layout>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  atras: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 10,
  },
  conte: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    marginBottom: 5,
    fontWeight: "bold",
    color: "purple",
    fontSize: 11,
  },
});

export default PsicomotrocidadScreen;

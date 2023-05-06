import React, {useEffect} from "react";
import { Audio } from "expo-av";
import { useGlobal } from "../../context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import { dataFace } from "../../sample/Face";
import Layout from "../../components/Layout";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView
} from "react-native";

import Name from "../../components/Name";
import cerrar from "../../../assets/atras.png";

const FaceScreen = () => {
  const { auth } = useGlobal();
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const renderData = () => {
    return (
      <View>
        {dataFace.map(({ module }, index) => (
          <View style={style.contenedor} key={index}>
            {module.map(({ source, sonido }, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.emoji}
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
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);
  const handlebackPress = () => {
    navigation.navigate("Principal");
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name title="ESTADO" />

          <View style={style.estado}>
            <Text style={style.description}>
              ¿Como te encuentras hoy&nbsp;<Text style={style.name}>{auth.Nombre_Niño}</Text>?
            </Text>
          </View>

          {renderData()}

          <TouchableNativeFeedback onPress={handlebackPress}>
            <ImageBackground
              source={cerrar}
              style={style.imagencerrar}
            ></ImageBackground>
          </TouchableNativeFeedback>

        </View>
      </ScrollView>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    marginTop: 25,
  },
  imagenmenu: {
    width: 50,
    height: 50,
  },
  estado: {
    padding: 15,
  },
  description: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  emoji: {
    width: 110,
    height: 110,
    alignSelf: "center",
    margin: 3,
  },
  contenedor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imagencerrar: {
    width: 35,
    height: 35,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  name: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default FaceScreen;

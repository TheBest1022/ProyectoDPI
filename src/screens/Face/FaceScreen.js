import React, { useEffect } from "react";
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
  ScrollView,
} from "react-native";
import Name from "../../components/Name";

const FaceScreen = () => {
  const cerrar = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
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
      <Name title="ESTADO" />
      <ScrollView>
        <View style={style.container}>
          <View style={style.estado}>
            <Text style={style.description}>
              ¿Como te encuentras hoy&nbsp;
              <Text style={style.name}>{auth.Nombre_Niño}</Text>?
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
    width: "100%",
    flex:1,
    paddingBottom:"30%"
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

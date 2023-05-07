import React, { useEffect } from "react";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { dataExtremidades } from "../../../../sample/Visual";
import Layout from "../../../../components/Layout";
import Name from "../../../../components/General";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

function ExtremidadesScreen() {
  const siguiente = {uri:"https://www.dropbox.com/s/o2yz8ywh3a1fh28/siguiente.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("Partes");
  };
  const renderData = () => {
    return (
      <View>
        {dataExtremidades.map(({ modulos }, index) => (
          <View style={style.contenedor} key={index}>
            {modulos.map(({ source, sonido }, index) => (
              <View style={style.containerimages} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.image}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const renderDataExtremidades = () => {
    return (
      <View>
        {dataExtremidades.map(({ module }, index) => (
          <View style={style.containerimages} key={index}>
            {module.map(({ source, sonido }, index) => (
              <View  key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.imagepartes}
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

          {renderData()}

          {renderDataExtremidades()}

          <View style={style.containerimages}>
            <TouchableOpacity onPress={handlebackPress}>
              <ImageBackground
                source={siguiente}
                style={style.imagencerrar}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#f0f8ff",
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  imagepartes: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 10,
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imagencerrar: {
    width: 40,
    height: 40,
    margin: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  contenedor: {
    width: 120,
    alignSelf: "center",
  },
  titulos: {
    width: 290,
    height: 40,
    alignSelf: "center",
    margin: 10,
  },
  texto: {
    width: 225,
    alignSelf: "center",
    margin: 8,
  },
  tex: {
    fontSize: 10,
    textAlign: "justify",
    color: "navy",
    fontWeight: "bold",
  },
});

export default ExtremidadesScreen;

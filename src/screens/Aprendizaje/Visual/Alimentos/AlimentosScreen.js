import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataAlimentos} from "../../../../sample/Visual";
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

const AlimentosScreen = () => {
  const atras = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackpress = () => {
    navigation.navigate("visual");
  };
  const renderData = () => {
    return (
      <View>
        {dataAlimentos.map(({ Imagen, module, modulo }, index) => (
          <View style={style.contendor} key={index}>
            {Imagen.map(({ Img, sonido }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={Img}
                    style={style.Img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
            <View>
              {module.map(({ source, sonido }, index) => (
                <View style={style.contenedorimagen} key={index}>
                  <View style={style.contedorimagenesiconos}>
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
                </View>
              ))}
            </View>
            <View>
              {modulo.map(({ imagen, sonido }, index) => (
                <View style={style.contenedorimagen} key={index}>
                  <View style={style.contedorimagenesiconos}>
                    <TouchableOpacity
                      onPress={async () => {
                        const { sound } = await Audio.Sound.createAsync(sonido);
                        setSound(sound);
                        await sound.playAsync();
                      }}
                    >
                      <ImageBackground
                        source={imagen}
                        style={style.img}
                      ></ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
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

          <View style={style.contendor}>
            <TouchableOpacity onPress={handlebackpress}>
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
    backgroundColor: "white",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
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
    margin: 10,
  },
  alimentos: {
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
    marginLeft: 22,
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
  Img: {
    width: 170,
    height: 170,
    margin: 5,
    marginTop: 30,
  },
  contedorimagenesiconos: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  img: {
    height: 90,
    width: 90,
    margin: 3,
  },
  contenedorimagen: {
    alignSelf: "center",
    margin: 1,
  },
});

export default AlimentosScreen;

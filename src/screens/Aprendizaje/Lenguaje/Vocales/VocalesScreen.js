import React, { useEffect } from "react";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { datavocal } from "../../../../sample/Lenguaje";
import Name from "../../../../components/General";
import Layout from "../../../../components/Layout";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

function VocalesScreen() {
  const cerrar = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("Lenguaje");
  };
  const renderData = () => {
    return (
      <View>
        {datavocal.map(({ module, modulo }, index) => (
          <View style={style.containerimages} key={index}>
            {module.map(({ Sonido, mayuscula, minuscula }, index) => (
              <View style={style.contenedor} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(Sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <View style={style.containerimages}>
                    <ImageBackground
                      source={mayuscula}
                      style={style.image}
                    ></ImageBackground>
                    <View sytle={style.minuscula}>
                      <ImageBackground
                        source={minuscula}
                        style={style.minus}
                      ></ImageBackground>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
            <View>
              {modulo.map(({ img, sonido }, index) => (
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
                        source={img}
                        style={style.img}
                      ></ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
            <View>
              {modulo.map(({ img, sonido }, index) => (
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
                        source={img}
                        style={style.image}
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
      <Name />
      <ScrollView>
        <View style={style.container}>
          {renderData()}

          <View style={style.containerimages}>
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
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom:"100%"
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: "center",
    marginLeft: 45,
    marginTop:10
  },
  minus: {
    width: 70,
    height: 70,
    marginTop: 40,
    marginLeft: 5,
  },
  imagencerrar: {
    width: 40,
    height: 40,
    margin: 8,
    alignSelf: "center",
  },
  imagensiguiente: {
    width: 40,
    height: 40,
    margin: 8,
    alignSelf: "center",
  },
  contenedor: {
    width: 130,
    alignSelf: "center",
    margin: 15,
  },
  vocales: {
    width: 230,
    height: 60,
  },
});

export default VocalesScreen;

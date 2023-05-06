import React, { useEffect } from "react";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { datavocal } from "../../../../sample/Atencion";
import Name from "../../../../components/General";
import Layout from "../../../../components/Layout";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import cerrar from "../../../../../assets/atras.png";

function VocalesScreen() {
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("Comunicacion");
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
      <ScrollView>
        <View style={style.container}>
          <Name />

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
    marginTop: 30,
    backgroundColor: "#f0f8ff",
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

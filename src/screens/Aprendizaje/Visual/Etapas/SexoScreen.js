import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataSexo } from "../../../../sample/Visual";
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

const SexoScreen = () => {
  const Img = {uri:"https://www.dropbox.com/s/lgyu97nyoqy2p5f/ni%C3%B1oni%C3%B1a.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const renderData = () => {
    return (
      <View>
        {dataSexo.map(({ Imagen, module, modulos }, index) => (
          <View style={style.contendor} key={index}>
            {Imagen.map(({ source, sonido }, index) => (
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
                    style={style.Img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
            <View>
              {module.map(({ img, sonido }, index) => (
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
              {modulos.map(({ img, sonido }, index) => (
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

          <Text style={style.text}>NIÑO O NIÑA</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                Los niños y niñas son diferentes desde su nacimiento, tanto
                física como psíquicamente. diferentes desde el momento del
                nacimiento
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={Img}
                style={style.sexo}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>DIFERENCIA DE NIÑO Y NIÑA</Text>

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
    margin: 15,
  },
  sexo: {
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
    marginTop: 20,
  },
  contedorimagenesiconos: {
    flexDirection: "row",
    alignSelf: "center",
  },
  img: {
    height: 70,
    width: 70,
    margin: 3,
  },
  contenedorimagen: {
    alignSelf: "center",
    margin: 3,
  },
});

export default SexoScreen;

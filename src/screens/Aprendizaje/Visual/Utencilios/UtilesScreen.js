import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataUtilesAseo } from "../../../../sample/Visual";
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
const UtilesScreen = () => {
  const Img = {uri:"https://www.dropbox.com/s/pvjdivi1ddah8ir/utiles.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const renderData = () => {
    return (
      <View>
        {dataUtilesAseo.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ img, sonido }, index) => (
              <View style={style.imagen} key={index}>
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

          <Text style={style.text}>ÚTILES DE ASEO</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                Los útiles de aseo son todas esas cosas que utilizamos para
                ayudarnos a limpiar nuestro cuerpo. Sobre todo, zonas como la
                boca, el pelo, las uñas o la piel
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={Img}
                style={style.Img}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>
            Mencionamos alguno utiles de aseo:
          </Text>

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
    height:"100%",
    width:"100%",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
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
  Img: {
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
  img:{
    height:115,
    width:115,
    margin:5
  }
});

export default UtilesScreen;

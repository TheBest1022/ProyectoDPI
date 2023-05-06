import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataSalud, dataEnfermedad } from "../../../../sample/Visual";
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
import sano from "../../../../../assets/sanos.png";
import enfermo from "../../../../../assets/enfermo.png";
import atras from "../../../../../assets/atras.png";

const SaludScreen = () => {
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("seccionhumano");
  };
  const renderData = () => {
    return (
      <View>
        {dataSalud.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source, sonido }, index) => (
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
          </View>
        ))}
      </View>
    );
  };
  const renderEnfermedad = () => {
    return (
      <View>
        {dataEnfermedad.map(({ module }, index) => (
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
                    style={style.Img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  }
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

          <Text style={style.text}>¿QUÉ ES LA SALUD?</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                Significa gozar de un estado completo bienestar físico, mental,
                social y ambiental.
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={sano}
                style={style.img}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>
            Normas de Prevención para estar Saludables
          </Text>

          {renderData()}


          <Text style={style.text}>¿POR QUÉ NOS ENFERMAMOS?</Text>

          <View style={style.contendor}>
            <View style={style.imagen}>
              <TouchableOpacity
                onPress={async () => {
                  const { sound } = await Audio.Sound.createAsync(sonido5);
                  setSound(sound);
                  await sound.playAsync();
                }}
              >
                <ImageBackground
                  source={enfermo}
                  style={style.img}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                La enfermedad es la alteración de la salud, que se manifiesta
                con el malestar del cuerpo. Por ejemplo: a través del estornudo.
              </Text>
            </View>
          </View>

          <Text style={style.textos}>
            Enfermedades mas comunes que afectan a los Niños
          </Text>

          {renderEnfermedad()}

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
    marginTop: 30,
    backgroundColor: "#f0f8ff",
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
    margin: 5,
  },
  img: {
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
    marginLeft: 20,
    marginTop: 5,
  },
  Img: {
    width: 90,
    height: 90,
    margin: 3,
  },
});

export default SaludScreen;

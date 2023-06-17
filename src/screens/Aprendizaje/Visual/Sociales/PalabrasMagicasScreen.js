import React, { useEffect } from "react";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { dataMagicas } from "../../../../sample/Visual";
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

const PalabrasMagicasScreen = () => {
  const magica = {uri:"https://www.dropbox.com/s/pk20ufdpn4avcy7/querer.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlepost = () => {
    navigation.navigate("visual");
  };
  const renderData = () => {
    return (
      <View>
        {dataMagicas.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source}, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
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

          <Text style={style.text}>Las Palabras Mágicas</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
              Las Palabras Mágicas son fundamentales para que los niños pequeños aprendan a desarrollar lazos de cordialidad, socialización y afecto.
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={magica}
                style={style.Img}
              ></ImageBackground>
            </View>
          </View>

          {renderData()}

          <View style={style.contendor}>
            <TouchableOpacity onPress={handlepost}>
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
    margin: 5,
    marginTop: 20,
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
  Img: {
    width: 115,
    height: 115,
    margin: 5,
  },
});

export default PalabrasMagicasScreen;

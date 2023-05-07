import React, { useEffect }from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import {dataInstituciones} from "../../../../sample/Visual"
import Layout from "../../../../components/Layout";
import Name from "../../../../components/General";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";


function InstitucionesScreen() {

  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const renderData = () => {
    return (
      <View>
        {dataInstituciones.map(({ module }, index) => (
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

          <Text style={style.text}>INSTITUCIONES DE MI LOCALIDAD</Text>

          {renderData()}

          <View style={style.containerimages}>
            <TouchableOpacity onPress={handlebackPress}>
              <ImageBackground
                source={atras}
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
  imagepartes: {
    width: 120,
    height: 120,
    alignSelf: "center",
    margin: 3,
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imagensiguiente: {
    width: 40,
    height: 40,
    margin: 15,
    alignSelf: "center",
  },
  contenedor: {
    width: 120,
    alignSelf: "center",
  },
  conceptoba: {
    width: 400,
    height: 130,
  },
  domestico: {
    width: 350,
    height: 50,
    alignSelf: "center",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
  },
  tex: {
    width: 230,
    margin: 8,
    alignSelf: "center",
  },
  descripcion: {
    textAlign: "justify",
    fontSize: 11,
    lineHeight: 18,
  },
  humano: {
    width: 140,
    height: 140,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 15,
  },
  textos: {
    fontSize: 12,
    color: "purple",
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 5,
  },
});

export default InstitucionesScreen;

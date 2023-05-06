import React, {useEffect} from "react";
import { useNavigation } from "@react-navigation/native"
import { Audio } from "expo-av";
import { dataNumeroRomanos } from "../../../../sample/Visual";
import Layout from "../../../../components/Layout";
import Name from "../../../../components/General";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import cerrar from "../../../../../assets/atras.png";

const NumRomanosScreen = () => {
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("seccionhumano");
  };
  const renderData = () => {
    return (
      <View>
        {dataNumeroRomanos.map(({ module }, index) => (
          <View style={style.posiciones} key={index}>
            {module.map(({ img, sonido }, index) => (
              <View style={style.containerimages} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={img}
                    style={style.imgr}
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
                style={style.imagencerrar}
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
    paddingBottom:80
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  posiciones: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imagencerrar: {
    width: 40,
    height: 40,
    marginTop: 50,
    alignSelf: "center",
  },
  contenedor: {
    width: 150,
    alignSelf: "center",
  },
  imgr: {
    width: 110,
    height: 110,
    margin: 7,
  },
});

export default NumRomanosScreen;

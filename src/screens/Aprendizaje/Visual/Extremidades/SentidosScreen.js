import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import {dataSentidos} from "../../../../sample/Visual"
import Layout from "../../../../components/Layout";
import General from "../../../../components/General";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

function SentidosScreen() {
  const cerrar = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("DescripcionMod");
  };
  const renderData= () => {
    return (
      <View>
        {dataSentidos.map(({ module }, index) => (
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
          <General />

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
}

const style = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    marginTop: 30,
    backgroundColor: "white",
    paddingBottom: 15,
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    marginTop: 30,
  },
  imagenojo: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  imagencerrar: {
    width: 40,
    height: 40,
    margin: 5,
    marginTop: 30,
  },
});

export default SentidosScreen;

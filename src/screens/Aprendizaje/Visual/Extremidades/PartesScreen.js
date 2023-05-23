import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataPartescuerpo } from "../../../../sample/Visual";
import Name from "../../../../components/General";
import Layout from "../../../../components/Layout";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

function PartesScreen() {
  const exit = {uri:"https://www.dropbox.com/s/pai7eu5gt2wxy0i/exit.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("Extremidades");
  };
  const handlesalirPress = () => {
    navigation.navigate("DescripcionMod");
  };
  const renderData = () => {
    return (
      <View>
        {dataPartescuerpo.map(({ module }, index) => (
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

          {renderData()}

          <View style={style.containerimages}>
            <TouchableOpacity onPress={handlebackPress}>
              <ImageBackground
                source={atras}
                style={style.imagensiguiente}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlesalirPress}>
              <ImageBackground
                source={exit}
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
    height:"100%",
    width:"100%",
  },
  imagepartes: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 10,
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
    margin: 5,
    alignSelf: "center",
  },
  titulos: {
    width: 290,
    height: 40,
    alignSelf: "center",
    margin: 8,
  },
});
export default PartesScreen;

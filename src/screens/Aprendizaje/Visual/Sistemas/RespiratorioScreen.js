import React, {useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import {dataRespiratorio} from "../../../../sample/Visual"
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


const RespiratorioScreen = () => {
  const Img = {uri:"https://www.dropbox.com/s/cyahmguvgschz9h/pulmon.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlepost = () => {
    navigation.navigate("visual");
  };
  const renderData = () => {
    return (
      <View>
        {dataRespiratorio.map(({ module }, index) => (
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
                    style={style.foto}
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

          <Text style={style.text}>EL SISTEMA RESPIRATORIO</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
              El ser humano necesita respirar para sobrevivir, sirve para tomar el oxígeno del aire y 
              el oxígeno nos da energía para que nuestros órganos funcionen. 
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
            Los Órganos que conforman el Sistema Respiratorio
          </Text>

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
    width: 230,
    margin: 8,
    alignSelf: "center",
  },
  descripcion: {
    textAlign: "justify",
    fontSize: 11,
    lineHeight: 18,
    alignSelf: "center",
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 15,
    marginTop:70

  },
  Img: {
    width: 150,
    height: 150,
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
  foto: {
    width: 120,
    height: 120,
    margin: 3,
  },
  imagen:{
    flexDirection: "row",
    alignSelf: "center",
    marginTop:8
  },
  texto:{
    width:270,
    alignSelf: "center",
    margin:5
  }
});

export default RespiratorioScreen;

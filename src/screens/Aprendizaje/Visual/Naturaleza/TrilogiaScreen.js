import React,{ useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataAgua, dataAire, dataTierra } from "../../../../sample/Visual";
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

const TrilogiaScreen = () => {
  const Img = {uri:"https://www.dropbox.com/s/fuqp8ccd5ee5u4r/agua.png?dl=1"}
  const Img2 = {uri:"https://www.dropbox.com/s/343yopguqh0vn7v/viento.png?dl=1"}
  const Img3 = {uri:"https://www.dropbox.com/s/r2hayrjpctj4mfi/suelo.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const renderDataAgua = () => {
    return (
      <View>
        {dataAgua.map(({ module }, index) => (
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
                    style={style.ft}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const renderDataAire = () => {
    return (
      <View>
        {dataAire.map(({ module }, index) => (
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
  const renderDataTierra = () => {
    return (
      <View>
        {dataTierra.map(({ module }, index) => (
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

          <Text style={style.text}>EL AGUA</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                El agua es un recurso natural y abundante en el planeta. El agua
                se puede encontrar en mares, lagos, ríos, lagunas, manantiales,
                cenotes y cascadas.
              </Text>
            </View>
            <View style={style.imagen}>
              <ImageBackground
                source={Img}
                style={style.Img}
              ></ImageBackground>
            </View>
          </View>

          <Text style={style.textos}>Estados del Agua</Text>

          {renderDataAgua()}

          <Text style={style.text}>EL AIRE</Text>

          <View style={style.contendor}>
            <View style={style.imagen}>
              <ImageBackground
                source={Img2}
                style={style.Img}
              ></ImageBackground>
            </View>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                El aire está compuesto por gases y está por todas partes. A
                menudo, no puedes ver ni sentir el aire pero puedes ver lo que
                hace.
              </Text>
            </View>
          </View>

          <Text style={style.textos}>¿Como se contamina el aire?</Text>

          {renderDataAire()}

          <Text style={style.text}>EL SUELO</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                El suelo es una capa de material que se encuentra en la
                superficie terrestre y que permite que se albergue la vida.
              </Text>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity>
                <ImageBackground
                  source={Img3}
                  style={style.Img}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={style.textos}>Tipos de Suelo: </Text>

          {renderDataTierra()}

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
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
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
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 5,
  },
  foto: {
    width: 118,
    height: 118,
    margin: 3,
  },
  texto: {
    width: 370,
    alignSelf: "center",
  },
  ft: {
    width: 118,
    height: 118,
    margin: 3,
  },
});

export default TrilogiaScreen;

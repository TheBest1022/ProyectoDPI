import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { dataAnimals } from "../../../../sample/Visual";
import Name from "../../../../components/General.js";
import Layout from "../../../../components/Layout.js";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

const AnimalPrincipalScreen = ({ navigation, route }) => {
  const cerrar = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const id = route.params ? route.params.id : null;
  const navigacion = useNavigation();
  const handlebackPress = () => {
    navigacion.navigate("animales");
  };
  const obtenerImagen = (id) => {
    const data = dataAnimals.filter((item) => {
      return item.id == id;
    });
    return (
      <View>
        {data.map(({ module }, index) => (
          <View key={index} style={style.cont}>
            {module.map(({ id, source, sonido }, index) => (
              <View key={id} style={style.cont}>
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground source={source} style={style.imagenes} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const obtenerAnimal = (id) => {
    const data = dataAnimals.filter((item) => {
      return item.id == id;
    });

    return (
      <View style={style.containerimages}>
        {data.map(({ Imagen }, index) => (
          <View key={index} style={style.containerimages}>
            {Imagen.map(({ id, Img }) => (
              <View key={id} style={style.containerimages}>
                <ImageBackground source={Img} style={style.image} />
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

          <View style={style.containerimages}>
            <View style={style.contenedor}>
              <TouchableOpacity
                onPress={async () => {
                  const { sound } = await Audio.Sound.createAsync({
                    uri: `http://www.sonidosmp3gratis.com/sounds/alphabet-${id}.mp3`,
                  });
                  setSound(sound);
                  await sound.playAsync();
                }}
              >
                {obtenerAnimal(id)}
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.cont}>{obtenerImagen(id)}</View>

          <View style={style.contenedor}>
            <TouchableOpacity onPress={handlebackPress}>
              <ImageBackground
                source={cerrar}
                style={style.imagensiguiente}
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
    backgroundColor: "white",
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  image: {
    width: 110,
    height: 110,
    marginTop: 10,
  },
  minus: {
    width: 70,
    height: 70,
    marginTop: 50,
    marginLeft: 3,
  },
  imagensiguiente: {
    width: 40,
    height: 40,
    margin: 5,
    alignSelf: "center",
  },
  letra: {
    width: 200,
    height: 40,
    alignSelf: "center",
    marginTop: 5,
  },
  contenedor: {
    alignItems: "center",
    margin: 3,
  },
  cont: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagenes: {
    width: 90,
    height: 90,
    margin: 2,
  },
});

export default AnimalPrincipalScreen;

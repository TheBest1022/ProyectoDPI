import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Auditiva = ({ temas }) => {
  const audio = {
    uri: "https://www.dropbox.com/s/hk0edrbx763kg7o/audio.png?dl=1",
  };
  const atras = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [sound, setSound] = React.useState();
  const handlepost = () => {
    navigation.navigate("Aprendizaje");
  };
  const renderDataAuditiva = (search, temas) => {
    if (search == "") {
      return (
        <View>
          {temas.map((item) => (
            <View style={style.campo} key={item.idTema}>
              <TouchableOpacity
                onPress={async () => {
                  const { sound } = await Audio.Sound.createAsync(item.Sonido);
                  setSound(sound);
                  await sound.playAsync();
                }}
              >
                <View style={style.campo}>
                  <View style={style.contendor}>
                    <View style={style.contenedortexto}> 
                      <Text style={style.text}>SONIDO: {item.Descripcion}</Text>
                    </View>
                    <View style={style.contenedorimagen}>
                      <ImageBackground
                        source={{ uri: item.Imagen } }
                        style={style.image}
                      ></ImageBackground>
                    </View>
                  </View>
                  <View style={style.icn}>
                    <ImageBackground
                      source={audio}
                      style={style.icono}
                    ></ImageBackground>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    } else {
      const buscar = temas.filter((item) => {
        return item.Descripcion.includes(search);
      });
      return (
        <View>
          {buscar.map((item) => (
            <View style={style.campo} key={item.idTema}>
              <TouchableOpacity
                onPress={async () => {
                  const { sound } = await Audio.Sound.createAsync(item.Sonido);
                  setSound(sound);
                  await sound.playAsync();
                }}
              >
                <View style={style.campogeneral}>
                  <View style={style.contendor}>
                    <Text style={style.text}>SONIDO: {item.Descripcion}</Text>
                    <View style={style.contenedorimagen}>
                      <ImageBackground
                          source={{ uri: item.Imagen } }
                        style={style.image}
                      ></ImageBackground>
                    </View>
                  </View>
                  <View style={style.icn}>
                    <ImageBackground
                      source={audio}
                      style={style.icono}
                    ></ImageBackground>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    }
  };
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View>
      <View style={style.campo}>
        <View>
          <TextInput
            placeholder="Buscar"
            style={style.input}
            placeholderTextColor="#808080"
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>

      {renderDataAuditiva(search, temas)}

      <View style={style.conte}>
        <TouchableOpacity onPress={handlepost}>
          <ImageBackground source={atras} style={style.btn}></ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  campo: {
    flexDirection: "row",
    alignSelf: "center",
  },
  campogeneral:{
    backgroundColor:'red',
    flexDirection: "row",
    alignSelf: "center",
  },  
  contendor: {
    flexDirection: "row",
    alignSelf: "center", 
    marginTop: 10,
    backgroundColor: "#f0f8ff",
    padding: 10,
    width: 280,
  },
  text: {
    fontWeight: "bold",
    fontSize: 11,
    color: "navy",
    marginTop: 30,
    alignSelf: "center",
  },
  contenedortexto:{
    width:150
  },
  icono: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  icn: {
    alignSelf: "center",
    margin: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  contenedorimagen: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems:'flex-start',
    width: 100,
    marginHorizontal: 10,
  },
  btn: {
    width: 40,
    height: 40,
    margin: 5,
  },
  input: {
    backgroundColor: "white",
    width: 350,
    alignSelf: "center",
    padding: 8,
    color: "navy",
    marginTop: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "navy",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  conte: {
    width: 50,
    alignSelf: "center",
  },
});

export default Auditiva;

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../context/GlobalProvider";
import { conexionURL } from "../helpers/configuracion.js";
import { Audio } from "expo-av";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";

const Face = ({ faces }) => {
    const navigation = useNavigation();
    const handlebackPress = () => {
        navigation.navigate("Principal");
      };
      const cerrar = {
        uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
      };
    const renderData = (faces) => {
        return (
          <View>
            {faces.map((item) => (
              <View style={style.contenedor} key={item.id}>
                  <View>
                    <TouchableOpacity>
                      <ImageBackground
                        source={{ uri: item.Imagen }}
                        style={style.emoji}
                      ></ImageBackground>
                    </TouchableOpacity>
                  </View>
              </View>
            ))}
          </View>
        );
      };
      return (
        <View>
    
          {renderData(faces)}
    
          <TouchableOpacity onPress={handlebackPress}>
            <ImageBackground
              source={cerrar}
              style={style.imagencerrar}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      );
};
const style = StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      paddingBottom: "30%",
    },
    imagenmenu: {
      width: 50,
      height: 50,
    },
    estado: {
      padding: 10,
    },
    description: {
      color: "black",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 15,
    },
    emoji: {
      width: 110,
      height: 110,
      alignSelf: "center",
      margin: 3,
    },
    contenedor: {
      flexDirection: "row",
      alignSelf: "center",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    imagencerrar: {
      width: 40,
      height: 40,
      alignSelf: "center",
      margin:10
    },
    name: {
      color: "blue",
      fontWeight: "bold",
    },
    //select
    select: {
      backgroundColor: "#dcdcdc",
      width: "90%",
      alignSelf: "center",
      margin: 5,
    },
  });
  
export default Face;
import React, { useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";

const Atencion = ({ temas }) => {
  const atras = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const handlepost = () => {
    navigation.navigate("Aprendizaje");
  };
  const handlePressPdf = async (link) => {
    try {
      const url = `${link}`;
      console.log(url);
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        alert("No se puede abrir el archivo PDF");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderDataAtencion = (search, temas) => {
    if (search == "") {
      return (
        <View>
          <View style={style.container} > 
            {temas.map((item) => (
              <View style={style.contendor} key={item.idTema}>
                <View style={style.imagen}>
                  <TouchableOpacity
                    onPress={() =>
                      handlePressPdf(
                        item.Pdf != null
                          ? item.Pdf
                          : "https://www.dropbox.com/s/c729dxy7begmapj/TEMA%20NO%20EXISTENTE.pdf?dl=1"
                      )
                    }
                  >
                    <ImageBackground
                      source={{ uri: item.Imagen }}
                      style={style.Img}
                    ></ImageBackground>
                    <View style={style.descripcion}>
                      <Text style={style.texto}>{item.Descripcion}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      );
    } else {
      const buscar = temas.filter((item) => {
        return item.Descripcion.includes(search);
      });
      return (
        <View>
          {buscar.map((item) => (
            <View style={style.contendor} key={item.idTema}>
              <View style={style.imagen}>
                <TouchableOpacity
                  onPress={() =>
                    handlePressPdf(
                      item.Pdf != null
                        ? item.Pdf
                        : "https://www.dropbox.com/s/c729dxy7begmapj/TEMA%20NO%20EXISTENTE.pdf?dl=1"
                    )
                  }
                >
                  <ImageBackground
                    source={item.Imagen}
                    style={style.Img}
                  ></ImageBackground>
                  <View style={style.descripcion}>
                    <Text style={style.texto}>{item.Descripcion}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      );
    }
  };
  return (
    <View style={style.container}>
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

      {renderDataAtencion(search, temas)}

      <View style={style.conte}>
        <TouchableOpacity onPress={handlepost}>
          <ImageBackground source={atras} style={style.btn}></ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  campo: {
    flexDirection: "row",
    alignSelf: "center",
  },
  conte: {
    width: 50,
    alignSelf: "center",
  },
  input: {
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
  container: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop:10,
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
  },
  Img: {
    width: 100,
    aspectRatio: 1,
    flexDirection: "row",
    alignSelf: "center",
  },
  descripcion: {
    width: 110,
    alignSelf: "center",
  },
  texto: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    color: "navy",
  },
  imagen: {
    width: 120,
    margin:5,
  },
  contenedor: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default Atencion;

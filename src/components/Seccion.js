import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import { useGlobal } from "../context/GlobalProvider";
import { conexionURL } from "../helpers/configuracion.js";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";

const Seccion = ({ temas }) => {
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const pdf = {uri:"https://www.dropbox.com/s/f6xs1wl26x6euvm/pdf.png?dl=1"}
  const navigation = useNavigation();
  const { auth, BorrarTema, setRecharge, actualizarPdf} = useGlobal();
  const [search, setSearch] = useState("");

  const handleclick = (idTema) => {
    if (idTema == 1) {
      navigation.navigate("alimentos");
    }
    if (idTema == 2) {
      navigation.navigate("frutas");
    }
    if (idTema == 3) {
      navigation.navigate("verduras");
    }
    if (idTema == 4) {
      navigation.navigate("animales");
    }
    if (idTema == 5) {
      navigation.navigate("insectos");
    }
    if (idTema == 6) {
      navigation.navigate("utilidadanimal");
    }
    if (idTema == 7) {
      navigation.navigate("articulacion");
    }
    if (idTema == 8) {
      navigation.navigate("Color");
    }
    if (idTema == 9) {
      navigation.navigate("cuidado");
    }
    if (idTema == 10) {
      navigation.navigate("Salud");
    }
    if (idTema == 11) {
      navigation.navigate("adelante");
    }
    if (idTema == 12) {
      navigation.navigate("estaciones");
    }
    if (idTema == 13) {
      navigation.navigate("dia");
    }
    if (idTema == 14) {
      navigation.navigate("temperatura");
    }
    if (idTema == 15) {
      navigation.navigate("seres");
    }
    if (idTema == 16) {
      navigation.navigate("niño");
    }
    if (idTema == 17) {
      navigation.navigate("DescripcionMod");
    }
    if (idTema == 18) {
      navigation.navigate("family");
    }
    if (idTema == 19) {
      navigation.navigate("habitaciones");
    }
    if (idTema == 20) {
      navigation.navigate("parteshuesos");
    }
    if (idTema == 21) {
      navigation.navigate("instituciones");
    }
    if (idTema == 22) {
      navigation.navigate("comunicacion");
    }
    if (idTema == 23) {
      navigation.navigate("transporte");
    }
    if (idTema == 24) {
      navigation.navigate("moneda");
    }
    if (idTema == 25) {
      navigation.navigate("musculos");
    }
    if (idTema == 60) {
      navigation.navigate("plantas");
    }
    if (idTema == 61) {
      navigation.navigate("ambiente");
    }
    if (idTema == 62) {
      navigation.navigate("Normas");
    }
    if (idTema == 63) {
      navigation.navigate("Numero");
    }
    if (idTema == 64) {
      navigation.navigate("Enteros");
    }
    if (idTema == 65) {
      navigation.navigate("oficios");
    }
    if (idTema == 66) {
      navigation.navigate("mar");
    }
    if (idTema == 67) {
      navigation.navigate("Cara");
    }
    if (idTema == 68) {
      navigation.navigate("sabores");
    }
    if (idTema == 69) {
      navigation.navigate("seguridad");
    }
    if (idTema == 70) {
      navigation.navigate("semaforo");
    }
    if (idTema == 71) {
      navigation.navigate("digestivo");
    }
    if (idTema == 72) {
      navigation.navigate("respiratorio");
    }
    if (idTema == 73) {
      navigation.navigate("escolares");
    }
    if (idTema == 74) {
      navigation.navigate("peligroso");
    }
    if (idTema == 75) {
      navigation.navigate("utiles");
    }
    //LENGUAJE
    if (idTema == 76) {
      navigation.navigate("LetraA", {id:"a"});
    }
    if (idTema == 77) {
      navigation.navigate("LetraA", {id:"b"});
    }
    if (idTema == 78) {
      navigation.navigate("LetraA", {id:"c"});
    }
    if (idTema == 79) {
      navigation.navigate("LetraA", {id:"d"});
    }
    if (idTema == 80) {
      navigation.navigate("LetraA", {id:"e"});
    }
    if (idTema == 81) {
      navigation.navigate("LetraA", {id:"f"});
    }
    if (idTema == 82) {
      navigation.navigate("LetraA", {id:"g"});
    }
    if (idTema == 83) {
      navigation.navigate("LetraA", {id:"h"});
    }
    if (idTema == 84) {
      navigation.navigate("LetraA", {id:"i"});
    }
    if (idTema == 85) {
      navigation.navigate("LetraA", {id:"j"});
    }
    if (idTema == 86) {
      navigation.navigate("LetraA", {id:"k"});
    }
    if (idTema == 87) {
      navigation.navigate("LetraA", {id:"l"});
    }
    if (idTema == 88) {
      navigation.navigate("LetraA", {id:"ll"});
    }
    if (idTema == 89) {
      navigation.navigate("LetraA", {id:"m"});
    }
    if (idTema == 90) {
      navigation.navigate("LetraA", {id:"n"});
    }
    if (idTema == 91) {
      navigation.navigate("LetraA", {id:"ñ"});
    }
    if (idTema == 92) {
      navigation.navigate("LetraA", {id:"o"});
    }
    if (idTema == 93) {
      navigation.navigate("LetraA", {id:"p"});
    }
    if (idTema == 94) {
      navigation.navigate("LetraA", {id:"q"});
    }
    if (idTema == 95) {
      navigation.navigate("LetraA", {id:"r"});
    }
    if (idTema == 96) {
      navigation.navigate("LetraA", {id:"s"});
    }
    if (idTema == 97) {
      navigation.navigate("LetraA", {id:"t"});
    }
    if (idTema == 98) {
      navigation.navigate("LetraA", {id:"u"});
    }
    if (idTema == 99) {
      navigation.navigate("LetraA", {id:"v"});
    }
    if (idTema == 100) {
      navigation.navigate("LetraA", {id:"w"});
    }
    if (idTema == 101) {
      navigation.navigate("LetraA", {id:"x"});
    }
    if (idTema == 102) {
      navigation.navigate("LetraA", {id:"y"});
    }
    if (idTema == 103) {
      navigation.navigate("LetraA", {id:"z"});
    }
    if (idTema == 104) {
      navigation.navigate("Vocales");
    }
    if (idTema == 105) {
      navigation.navigate("Onomatopeya");
    }
  };
  const handlepost = () => {
    navigation.navigate("Aprendizaje");
  };
  const handlePress = async (link) => {
    try {
      const url =`${conexionURL}api/docente/file/${link}`;
      console.log(url)
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        alert("No se puede abrir el archivo PDF");
      }
    } catch (error) {
      console.log(error)
    }
  };
  const handleDelete = async (id) => {
    try {
      await BorrarTema(id);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadFile = async (fileUri, fileName) => {
    const apiUrl = "http://192.168.0.23:3000/api/docente/upload"; // Reemplaza 'your-server-url' con la dirección de tu servidor
    const fileData = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const formData = new FormData();
    formData.append("file", {
      uri: fileUri,
      name: fileName,
      type: "multipart/form-data",
    });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse.message);
      } else {
        console.log("Error al subir el archivo");
      }
    } catch (error) {
      console.error("Error en la conexión", error);
    }
  };
  const pickDocument = async (id) => {
    const result = await DocumentPicker.getDocumentAsync({});

    if (result.type === "success") {
      const fileUri = result.uri;
      const fileName = result.name;
      try {
        await actualizarPdf({ idTema: id, Pdf: fileName });
        await uploadFile(fileUri, fileName);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No se seleccionó ningún archivo");
    }
  };
  const renderData = (search, temas) => {
    if (search == "") {
      return (
        <View>
          {temas.map((item) => (
            <View style={style.general} key={item.idTema}>
              <View style={style.contendor}>
                <View style={style.descripcion}>
                  <TouchableOpacity
                    onPress={() => {
                      handleclick(item.idTema);
                    }}
                  >
                    <Text style={style.text}>TEMA: {item.Descripcion}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.contpdf}>
                <TouchableOpacity
                  onPress={() =>
                    handlePress(
                      item.Pdf != null
                        ? item.Pdf
                        : "https://www.dropbox.com/s/c729dxy7begmapj/TEMA%20NO%20EXISTENTE.pdf?dl=1"
                    )
                  }
                >
                  <ImageBackground
                    source={pdf}
                    style={style.pdf}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>

              <View style={style.contarchivo}>
                {auth.IdRol == 5 && (
                  <View style={style.contenedoresiconos}>
                    <TouchableOpacity
                      onPress={() => {
                        handleDelete(item.idTema);
                      }}
                    >
                      <ImageBackground
                        style={style.archivo}
                      ></ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        pickDocument(item.idTema);
                      }}
                    >
                      <ImageBackground
                        style={style.archiv}
                      ></ImageBackground>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
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
            <View style={style.general} key={item.idTema}>
              <View style={style.contendor}>
                <View style={style.descripcion}>
                  <TouchableOpacity
                    onPress={() => {
                      handleclick(item.idTema);
                    }}
                  >
                    <Text style={style.text}>TEMA: {item.Descripcion}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.contpdf}>
                <TouchableOpacity
                  onPress={() =>
                    handlePress(
                      item.Pdf != null
                        ? item.Pdf
                        : "https://www.dropbox.com/s/c729dxy7begmapj/TEMA%20NO%20EXISTENTE.pdf?dl=1"
                    )
                  }
                >
                  <ImageBackground
                    source={pdf}
                    style={style.pdf}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={style.contarchivo}>
                <TouchableOpacity
                  onPress={() => {
                    handleDelete(item.idTema);
                  }}
                >
                  <ImageBackground
                    style={style.archivo}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View>
      <View style={style.campo}>
        <View style={style.campoTexto}>
          <TextInput
            placeholder="Buscar"
            style={style.input}
            placeholderTextColor="#808080"
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>

      {renderData(search, temas)}

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
    backgroundColor:'white'
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#f0f8ff",
    padding: 10,
    width: 310,
  },
  campo: {
    flexDirection: "row",
    alignSelf: "center",
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 11,
    marginTop: 10,
    color: "navy",
    margin: 10,
    lineHeight: 18,
  },
  icono: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  descripcion: {
    width: 250,
    alignSelf: "center",
  },
  general: {
    flexDirection: "row",
    alignSelf: "center",
  },
  contpdf: {
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 5,
  },
  pdf: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  contendorpf: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
    backgroundColor: "#b0e0e6",
    padding: 10,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  icn: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  conte: {
    width: 50,
    alignSelf: "center",
  },
  tema: {
    alignSelf: "center",
  },
  archivo: {
    width: 25,
    height: 25,
    margin: 8,
  },
  archiv: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  contarchivo: {
    alignSelf: "center",
    marginTop: 9,
    marginLeft: 5,
  },
  tema: {
    alignSelf: "center",
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
  contenedoresiconos: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default Seccion;

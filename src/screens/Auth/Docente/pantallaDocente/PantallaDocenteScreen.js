import React from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../../components/Layout";
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
//IMAGENES
import Name from "../../../../components/General";

const PantallaDocenteScreen = () => {
  const profesor = {uri:"https://www.dropbox.com/s/mzj1qapmjvt83ck/prof.png?dl=1"}
  const navegate = useNavigation();
  const handleclick = () => {
    navegate.navigate("Registro");
  };
  const listar = () => {
    navegate.navigate("lista");
  };
  return (
    <Layout>
      <View style={style.container}>
        <Name />
        <View style={style.general}>
          <View style={style.contenedorimagen}>
            <View style={style.imagen}>
              <ImageBackground
                source={profesor}
                style={style.imagenes}
              ></ImageBackground>
            </View>
          </View>
          <View style={style.contenedores}>
            <View style={style.btn}>
              <Button
                title="REGISTRAR DOCENTE"
                onPress={handleclick}
                color="green"
                style={style.btnpress}
              />
            </View>
            <View style={style.btnlista}>
              <TouchableOpacity style={style.btnlistar} onPress={listar}>
                <Text style={style.contenedortlista}>Lista de usuarios</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    marginTop: 30,
    paddingBottom: 500,
  },
  btn: {
    marginTop: 10,
    width: 180,
    alignSelf: "center",
  },
  contenedor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 150,
  },
  imagen: {
    margin: 5,
  },
  imagenes: {
    height: 280,
    width: 270,
    marginTop: 20,
  },
  btnlista: {
    width: 160,
    alignSelf: "center",
    marginTop: 10,
  },
  contenedortlista: {
    textAlign: "center",
    fontSize: 15,
    color: "#a52a2a",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  contenedores: {
    alignSelf: "center",
  },
  contenedorimagen: {
    alignSelf: "center",
  },
  general: {
    marginTop: 80,
  },
});

export default PantallaDocenteScreen;

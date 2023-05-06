import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useGlobal } from "../context/GlobalProvider";
import icon from "../../assets/new.png";
import cg from "../../assets/cg.jpg";

const General = () => {
  const { auth } = useGlobal();
  return (
    <View style={style.contenedor}>
      <View style={style.contenedorimage}>
        <View style={style.imagen}>
          <ImageBackground source={cg} style={style.imagenes}></ImageBackground>
        </View>
      </View>
      <View style={style.containerDescription}>
        <View style={style.con}>
          <ImageBackground source={icon} style={style.icon}></ImageBackground>
          <Text style={style.name}>
            {auth.IdRol == 2
              ? auth.Nombre_Niño
              : auth.IdRol == 1
              ? "ADMIN"
              : auth.IdRol == 6
              ? "DIRECTOR"
              : "DOCENTE"}
          </Text>
        </View>
        <View style={style.des}>
          <Text style={style.welcome}>Te damos la Bienvenida</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  contenedor: {
    backgroundColor: "white",
  },
  containerDescription: {
    flexDirection: "row",
    backgroundColor: "#6495ed",
    borderColor: "#f5f7fb",
    shadowColor: "#040404",
    shadowRadius: 13,
    elevation: 2,
  },
  welcome: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
  },
  name: {
    color: "black",
    backgroundColor: "white",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 15,
    marginRight: 8,
    marginTop: 5,
  },
  con: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 200,
  },
  des: {
    alignSelf: "center",
    padding: 15,
  },
  encabezado: {
    padding: 3,
    flexDirection: "row",
    backgroundColor: "#ededf2",
    width: 350,
  },
  inicio: {
    color: "navy",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 8,
  },
  cebe: {
    width: 50,
    height: 50,
    marginLeft: 190,
    marginTop: 5,
  },
  imagenes: {
    width: 50,
    height: 50,
    marginRight: 150,
    marginLeft: 150,
  },
  contenedorimage: {
    marginLeft: 200,
  },
});
export default General;

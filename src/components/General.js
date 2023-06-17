import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useGlobal } from "../context/GlobalProvider";
import { ScrollView } from "react-native-gesture-handler";
const General = () => {
  const icon = {
    uri: "https://www.dropbox.com/s/6cxpe20l0yr039g/new.png?dl=1",
  };
  const cg = { uri: "https://www.dropbox.com/s/ccsr46yed39qcme/cg.jpg?dl=1" };
  const { auth } = useGlobal();
  return (
    <View style={style.contenedor}>
      <View style={style.ralla}><Text></Text></View>
      <View style={style.contenedorimage}>
          <ImageBackground source={cg} style={style.imagenes}></ImageBackground>
      </View>
      <ScrollView>
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
                : auth.IdRol == 5
                ? "DOCENTE"
                : "PSICOLOGO"
                }
            </Text>
          </View>
          <View style={style.des}>
            <Text style={style.welcome}>Te damos la Bienvenida</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  contenedor: {
    backgroundColor: "#e6e6fa",
    width: "100%",
  },
  containerDescription: {
    flexDirection: "row",
    backgroundColor: "#6495ed",
    shadowColor: "#040404",
    shadowRadius: 13,
    elevation: 2,
    borderColor: "navy",
    borderWidth: 1,
    borderLeftWidth:0,
    borderRightWidth:0
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
    borderColor: "black",
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
  ralla:{
    backgroundColor:'white',
  }
});
export default General;

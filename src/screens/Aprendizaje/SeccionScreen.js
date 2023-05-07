import { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Layout from "../../components/Layout";
import Name from "../../components/Name";
import DataDocente from "../../components/DataDocente";
import { useGlobal } from "../../context/GlobalProvider";

function SeccionScreen() {
  const { auth, docente, obtenerDatosDocente } = useGlobal();
  useEffect(() => {
    obtenerDatosDocente(auth.id_empresa);
  }, [obtenerDatosDocente]);
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name title="APRENDIZAJE" />
          <DataDocente data={docente} />
        </View>
      </ScrollView>
    </Layout>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:'white'
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
  },
  //OTROS
  contenedor: {
    width: 380,
    height: 230,
    backgroundColor: "#f8f8ff",
    alignSelf: "center",
    borderWidth: 4,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: "gold",
    marginTop: 15,
    shadowRadius: 5,
    elevation: 5,
  },
  icono: {
    width: 50,
    height: 50,
  },
  descripcion: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  texto: {
    backgroundColor: "#191970",
    padding: 10,
  },
  foto: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
  },
  imagenes: {
    flexDirection: "row",
  },
  icon: {
    height: 35,
    width: 35,
    marginLeft: 8,
  },
  icn: {
    height: 35,
    width: 35,
    marginLeft: 12,
  },
  contenedoicono: {
    alignSelf: "center",
  },
  rec: {
    fontSize: 10,
    color: "navy",
    fontWeight: "bold",
    marginTop: 8,
  },
  centrar: {
    alignSelf: "center",
  },
  contenedoriconos: {
    alignSelf: "center",
    flexDirection: "row",
  },
  temas: {
    margin: 5,
    borderWidth: 2,
    borderColor: "navy",
    padding: 8,
  },
  des: {
    color: "navy",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 11,
  },
  textociencia: {
    alignSelf: "center",
    margin: 10,
  },
  linea: {
    borderBottomColor: "#a7a7a7",
    borderBottomWidth: 1,
    margin: 5,
    width: 340,
  },
});

export default SeccionScreen;

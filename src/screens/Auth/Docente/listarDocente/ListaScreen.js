import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../../../context/GlobalProvider";
import { Feather } from "@expo/vector-icons";
import Layout from "../../../../components/Layout";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  FlatList,
} from "react-native";

const ListaScreen = () => {
  const usuario = {uri:"https://www.dropbox.com/s/nv9k77cwb5i2wbn/tea.jpg?dl=1"}
  const restablecer = {uri:"https://www.dropbox.com/s/5hw505f6q9fw70z/restablecer.png?dl=1"}
  const cg = {uri:"https://www.dropbox.com/s/5hw505f6q9fw70z/restablecer.png?dl=1"}
  const cebe = {uri:"https://www.dropbox.com/s/9wm5612pj2yye5c/cebe.png?dl=1"}
  const { auth, docente, obtenerDatosDocente } = useGlobal();
  const navigation = useNavigation();
  const handlepost = () => {
    navigation.navigate("Registrar");
  };
  const listar = () => {
    navigation.navigate("Registro");
  };

  const renderItem = ({ item }) => (
    <View style={style.row}>
      <Text style={style.cell}>{item.idCurso}</Text>
      <Text style={style.cell}>{item.Descripción}</Text>
      <Text
        style={style.cell}
        onPress={() => {
          navigation.navigate("Registro", { id: item.Id });
        }}
      >
        <Feather name="edit" size={22} color="blue" />
      </Text>
    </View>
  );

  useEffect(() => {
    obtenerDatosDocente(auth.id_empresa);
  }, []);
  return (
    <Layout>
      <View style={style.container}>
        <View style={style.encabezado}>
          <TouchableNativeFeedback onPress={handlepost}>
            <ImageBackground
              source={restablecer}
              style={style.restablecer}
            ></ImageBackground>
          </TouchableNativeFeedback>
          <Text style={style.texto}>LISTA DE DOCENTES</Text>
        </View>

        <View style={style.image}>
          <ImageBackground
            source={usuario}
            style={style.imagenlogin}
          ></ImageBackground>
        </View>

        <ImageBackground source={cebe} style={style.registro}></ImageBackground>

        <FlatList
          data={docente}
          renderItem={renderItem}
          keyExtractor={(item) => item.idCurso.toString()}
          style={style.table}
        />

        <View style={style.btnlista}>
          <TouchableOpacity style={style.btnlistar} onPress={listar}>
            <Text style={style.contenedortlista}>Volver</Text>
          </TouchableOpacity>
        </View>

        <View style={style.contenedorimage}>
          <View style={style.imagen}>
            <ImageBackground
              source={cg}
              style={style.imagenes}
            ></ImageBackground>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 30,
    paddingBottom: 5,
  },
  imagenlogin: {
    width: 360,
    height: 40,
    alignSelf: "center",
    marginTop: 10,
  },
  registro: {
    width: 140,
    height: 140,
    alignSelf: "center",
  },
  encabezado: {
    flexDirection: "row",
    backgroundColor: "#2a80b9",
    padding: 15,
  },
  restablecer: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  texto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginLeft: 20,
    alignSelf: "center",
  },
  contenedorimage: {
    flexDirection: "row",
    alignSelf: "center",
  },
  contenedortlista: {
    textAlign: "center",
    fontSize: 15,
    color: "#a52a2a",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ListaScreen;

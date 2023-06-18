import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../context/GlobalProvider";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import Name from "../../components/General";

const MensaggeScreen = ({ route }) => {
  const enviar = {
    uri: "https://www.dropbox.com/s/zcr44jc6erdb6rn/send.png?dl=1",
  };
  const navegation = useNavigation();
  const { auth, newMenssage, obtenerMensaje, MensajeActualizar } = useGlobal();
  const [loading, setLoading] = useState(false);
  const [dataMensaje, setDataMensaje] = useState([]);
  const [mensaje, setMensaje] = useState({
    Mensaje: "",
    idCurso: auth.Descripción,
    fecha: "",
  });
  const handleChange = (name, value) =>
    setMensaje({ ...mensaje, [name]: value });

  const handleSend = async () => {
    console.log(mensaje);
    console.log(auth);
    setLoading(true);
    if (mensaje.Mensaje === "") {
      Alert.alert("Existen campos vacíos");
      return;
    }
    try {
      const { data, status } = await newMenssage(mensaje);
      if (status == 201) {
        Alert.alert("Registrado");
        setMensaje({
          Mensaje: "",
          idCurso: auth.idCurso,
        });
        navegation.navigate("Aprendizaje");
        setLoading(false);
      } else {
        Alert.alert(`${data.message}`);
        setLoading(false);
      }
    } catch (error) {
      Alert.alert(error);
      setLoading(false);
    }
  };

  const handle = async (id) => {
    try {
      await MensajeActualizar(id);
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({ item }) => {
    const formattedDate = new Date(item.fecha).toLocaleDateString("es-ES");
    return (
      <TouchableOpacity
        onPress={() => {
          handle(item.id);
        }}
      >
        <View key={item.id} style={style.row}>
          <View style={[style.cell, style.column]}>
            <Text style={style.cellText}>{item.Mensaje}</Text>
          </View>
          {auth.IdRol !== 2 && (
            <View style={[style.cell, style.column]}>
              <Text style={style.cellText}>{auth.Descripción}</Text>
            </View>
          )}
          <View style={[style.cell, style.column]}>
            <Text style={style.cellText}>{formattedDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const load = async (id) => {
      const { data } = await obtenerMensaje(id);
      setDataMensaje(data);
    };
    if (route.params && route.params.id) {
      load(route.params.id);
    } else {
      load(auth.curso);
    }
  }, [obtenerMensaje]);

  useEffect(() => {});

  return (
    <Layout>
      <View style={style.container}>
        <Name />

        {auth.IdRol === 5 ? (
          <View style={style.containerMensaje}>
            <View style={style.campoTexto}>
              <Text style={style.newMessage}>Mensaje Nuevo</Text>
              <TextInput
                style={style.texto}
                placeholder="Escribir..."
                maxLength={60}
                onChangeText={(text) => handleChange("Mensaje", text)}
                value={mensaje.Mensaje}
              />
              <View style={style.iconos}>
                <TouchableOpacity onPress={handleSend}>
                  <View style={style.send}>
                    <ImageBackground
                      source={enviar}
                      style={style.icn}
                    ></ImageBackground>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}

        <View style={style.table}>
          <View style={[style.row, style.headerRow]}>
            <View style={[style.cell, style.column]}>
              <Text style={style.headerCell}>TEMA</Text>
            </View>
            <View style={[style.cell, style.column]}>
              <Text style={style.headerCell}>CURSO</Text>
            </View>
            <View style={[style.cell, style.column]}>
              <Text style={style.headerCell}>FECHA</Text>
            </View>
          </View>
          <FlatList
            data={dataMensaje}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  newMessage: {
    fontSize: 11,
    fontWeight: "bold",
    margin: 10,
  },
  texto: {
    borderWidth: 2,
    borderColor: "#3cb371",
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
    padding: "10%",
    backgroundColor:'white'
  },
  icn: {
    width: 30,
    height: 30,
    margin: 10,
    alignSelf:'center'
  },
  send: {
    borderRadius: 70,
    backgroundColor:'#e0ffff',
    margin:5,
    borderColor: "#3cb371",
    borderWidth:2
  },
  table: {
    borderWidth: 2,
    marginVertical: 10,
    backgroundColor: "#f0ffff",
    paddingBottom: 5,
    borderLeftWidth: 2, // Agregar estilo para línea vertical izquierda
    borderRightWidth: 2, // Agregar estilo para línea vertical derecha
    borderColor: "white", // Color de las líneas verticales
  },
  headerRow: {
    backgroundColor: "#3cb371",
  },
  headerCell: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color:'white'
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
  },
  cell: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  iconos: {
    alignSelf: "flex-end",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
  },
  cellText: {
    fontSize: 11,
    textAlign: "center",
    fontWeight:'bold'
  },
  containerMensaje: {
    height: "25%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default MensaggeScreen;

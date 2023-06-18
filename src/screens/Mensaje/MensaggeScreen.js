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
  const enviar = {uri:"https://www.dropbox.com/s/zcr44jc6erdb6rn/send.png?dl=1"}
  const navegation = useNavigation();
  const { auth, newMenssage, obtenerMensaje, MensajeActualizar } = useGlobal();
  const [loading, setLoading] = useState(false);
  const [dataMensaje, setDataMensaje] = useState([]);
  const [mensaje, setMensaje] = useState({
    Mensaje: "",
    idCurso: auth.curso,
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
          idCurso: auth.curso,
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
    return (
      <View
        key={item.id}
      >
        <TouchableOpacity
          onPress={() => {
            handle(item.id);
          }}
        >
          <Text style={style.cell}>{item.Mensaje}</Text>
        </TouchableOpacity>
      </View>
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

        {auth.IdRol == 5 && (
          <View style={style.campoTexto}>
            <Text style={style.newMessage}>Mensaje Nuevo</Text>
            <TextInput
              style={style.texto}
              placeholder="Nuevo  Mensaje..."
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
            <View>
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        )}

        <FlatList
          data={dataMensaje}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={style.table}
        />
      </View>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%'
  },
  newMessage: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 5,
  },
  texto: {
    borderWidth: 2,
    borderColor: "black",
    width: "95%",
    height:"50%",
    alignSelf: "center",
  },
  icn: {
    width: 30,
    height: 30,
    margin: 15,
  },
  send: {
    alignSelf:"flex-end",
  },
  table: {
    borderWidth: 2,
    borderColor: "#ccc",
    marginVertical: 10,
    width:"95%",
    height:"100%",
    alignSelf:'center',
    paddingHorizontal: 10,
    backgroundColor:'white',
    paddingBottom:5
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  cell: {
    flex: 1,
    textAlign: "left",
    fontSize: 12,
    fontWeight: "bold",
    padding:5,
    borderBottomWidth: 1, // Agregar bordes inferiores a las celdas
    borderBottomColor: '#ccc', // Cambiar el color de los bordes inferiores
  },
  iconos:{
    alignSelf:"flex-end",
  }
});

export default MensaggeScreen;

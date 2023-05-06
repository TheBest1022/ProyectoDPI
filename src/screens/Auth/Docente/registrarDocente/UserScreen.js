import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../../../context/GlobalProvider";
import { Picker } from "@react-native-picker/picker";
import Layout from "../../../../components/Layout";
import ChekComponent from "../../../../components/ChekComponent";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
//IMAGENES
import usuario from "../../../../../assets/tea.jpg";
import icon from "../../../../../assets/userdocente.png";
import niño from "../../../../../assets/userdocent.png";
import correo from "../../../../../assets/correo.png";
import contra from "../../../../../assets/contra.png";
import restablecer from "../../../../../assets/restablecer.png";
import cg from "../../../../../assets/cg.jpg";
import cebe from "../../../../../assets/cebe.png";

const courses = [
  { id: 1, name: "Materiales de estimulación visual" },
  { id: 2, name: "Materiales para la estimulación auditiva" },
  { id: 3, name: "Materiales psicomotricidad infantil" },
  { id: 4, name: "Materiales para trabajar la atención" },
  { id: 5, name: "Materiales para actividades de Comunicación" },
  { id: 6, name: "Materiales para trabajar las habilidades sociales" },
  { id: 7, name: "Materiales para trabajar lógico-matemática" },
];

const UserScreen = ({ navigation, route }) => {
  const navegate = useNavigation();
  const { company, obtenerEscuela } = useGlobal();
  const [loading, setLoading] = useState(false);
  const id = route.params ? route.params.id : null;
  const [edit, setEdit] = useState(false);
  const { registerDocente, obtenerDocente, Actualizar } = useGlobal();
  const [filter, setFilter] = useState("");
  const [user, setUser] = useState({
    documento: "",
    Nombre_Docente: "",
    Apellido_Docente: "",
    idDocente: "",
    usuario: "",
    password: "",
    idCurso: [],
    rol: 5,
    empresa: "",
  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const handlePress = (id) => {
    if (selectedCourses.includes(id)) {
      setSelectedCourses((prevCourses) =>
        prevCourses.filter((courseId) => courseId !== id)
      );
    } else {
      setSelectedCourses((prevCourses) => [...prevCourses, id]);
    }
  };
  const handleChange = (name, value) => setUser({ ...user, [name]: value });
  const handleSubmit = async () => {
    setLoading(true);
    user.empresa = filter;
    user.usuario = user.documento;
    if (!edit) {
      if (
        user.documento === "" ||
        user.Nombre_Docente === "" ||
        user.Apellido_Docente === "" ||
        user.usuario === "" ||
        user.password === ""
      ) {
        Alert.alert("Existen campos vacíos");
        return;
      }
    }
    try {
      user.idCurso = selectedCourses;
      const { status, data } = !edit
        ? await registerDocente(user)
        : await Actualizar(user);
      if (status == 201) {
        if (!edit) {
          Alert.alert("Registrado");
        } else {
          Alert.alert("Actualizado");
        }
        setUser({
          Nombre_Docente: "",
          Apellido_Docente: "",
          idDocente: "",
          usuario: "",
          password: "",
          idCurso: [],
          rol: 5,
        });
        navegate.navigate("Principal");
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
  const handlepost = () => {
    navegate.navigate("Registrar");
  };
  useEffect(() => {
    if (route.params && route.params.id) {
      setEdit(true);
      navigation.setOptions({ headerTitle: "Modificar Docente" });
      (async () => {
        const response = await obtenerDocente(route.params.id);
        console.log(response.Id);
        setUser({
          Nombre_Docente: response.Nombre_Docente,
          Apellido_Docente: response.Apellido_Docente,
          idDocente: response.Id,
          usuario: "",
          password: "",
          idCurso: "",
          rol: 5,
        });
      })();
    }
    if (id == null) {
      setUser({
        Nombre_Docente: "",
        Apellido_Docente: "",
        idDocente: "",
        usuario: "",
        password: "",
        idCurso: "",
        rol: 5,
      });
    }
  }, [route.params, route.params?.id]);
  useEffect(() => {
    obtenerEscuela();
  }, []);

  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <View style={style.encabezado}>
            <TouchableNativeFeedback onPress={handlepost}>
              <ImageBackground
                source={restablecer}
                style={style.restablecer}
              ></ImageBackground>
            </TouchableNativeFeedback>
            <Text style={style.texto}>REGISTRO DE DOCENTES</Text>
          </View>

          <View style={style.image}>
            <ImageBackground
              source={usuario}
              style={style.imagenlogin}
            ></ImageBackground>
          </View>

          <ImageBackground
            source={cebe}
            style={style.registro}
          ></ImageBackground>

          <View style={style.description}>
            <Text style={style.letter}>REGISTRO</Text>
          </View>

          <View style={style.registeruser}>
            {id == null && (
              <View style={style.icono}>
                <ImageBackground
                  source={icon}
                  style={style.icon}
                ></ImageBackground>
                <TextInput
                  style={style.input}
                  onChangeText={(text) => handleChange("documento", text)}
                  value={user.documento}
                  placeholder="DNI"
                />
              </View>
            )}

            <View style={style.icono}>
              <ImageBackground
                source={icon}
                style={style.icon}
              ></ImageBackground>
              <TextInput
                style={style.input}
                onChangeText={(text) => handleChange("Nombre_Docente", text)}
                value={user.Nombre_Docente}
                placeholder="Nombre"
              />
            </View>

            <View style={style.icono}>
              <ImageBackground
                source={niño}
                style={style.icon}
              ></ImageBackground>
              <TextInput
                style={style.input}
                onChangeText={(text) => handleChange("Apellido_Docente", text)}
                value={user.Apellido_Docente}
                placeholder="Apellidos"
              />
            </View>

            {id == null && (
              <View style={style.icono}>
                <ImageBackground
                  source={correo}
                  style={style.icon}
                ></ImageBackground>
                <TextInput
                  style={style.input}
                  onChangeText={(text) => handleChange("usuario", text)}
                  value={user.documento}
                  placeholder="Usuario"
                />
              </View>
            )}

            {id == null && (
              <View style={style.icono}>
                <ImageBackground
                  source={contra}
                  style={style.icon}
                ></ImageBackground>
                <TextInput
                  style={style.input}
                  onChangeText={(text) => handleChange("password", text)}
                  value={user.password}
                  placeholder="contraseña"
                  keyboardType="numeric"
                />
              </View>
            )}

            {id == null && (
              <Picker
                selectedValue={filter}
                onValueChange={(itemValue) => setFilter(itemValue)}
              >
                <Picker.Item label="Seleccione su escuela" value="" />
                {company.map((item) => (
                  <Picker.Item
                    key={item.id}
                    label={item.nombre}
                    value={item.id}
                  />
                ))}
              </Picker>
            )}

            {id == null && (
              <View style={style.contenedor}>
                {courses.map((course) => (
                  <ChekComponent
                    key={course.id}
                    label={course.name}
                    checked={selectedCourses.includes(course.id)}
                    onPress={() => handlePress(course.id)}
                    style={style.chek}
                  />
                ))}
              </View>
            )}

            <View style={style.btniniciar}>
              <TouchableOpacity
                style={style.btninciarsesion}
                onPress={handleSubmit}
              >
                <Text style={style.contenedortextiniciar}>
                  {id == null ? "REGISTRAR" : "ACTUALIZAR"}
                </Text>
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

          <View style={style.contenedorimage}>
            <View style={style.imagen}>
              <ImageBackground
                source={cg}
                style={style.imagenes}
              ></ImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    marginTop: 30,
  },
  imagenlogin: {
    width: 360,
    height: 40,
    alignSelf: "center",
    marginTop: 10,
  },
  letter: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  description: {
    backgroundColor: "#2a80b9",
    width: 350,
    alignSelf: "center",
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1.5,
  },
  input: {
    margin: 12,
    borderWidth: 3,
    backgroundColor: "white",
    borderTopColor: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    color: "navy",
    width: 280,
    borderColor: "navy",
    alignSelf: "center",
  },
  btniniciar: {
    backgroundColor: "#2a80b9",
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    width: 160,
    borderRadius: 115,
    alignSelf: "center",
  },
  contenedortextiniciar: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  registeruser: {
    backgroundColor: "white",
    width: 350,
    alignSelf: "center",
    borderWidth: 1.5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingBottom: 8,
  },
  registro: {
    width: 140,
    height: 140,
    alignSelf: "center",
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginLeft: 5,
    marginTop: 8,
  },
  icono: {
    flexDirection: "row",
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
  imagenes: {
    width: 80,
    height: 80,
    margin: 3,
  },
  seleccion: {
    color: "black",
    width: 310,
    alignSelf: "center",
  },
  select: {
    flexDirection: "row",
  },
  curso: {
    fontSize: 14,
  },
  btnlista: {
    backgroundColor: "white",
    marginBottom: 20,
    width: 160,
    alignSelf: "center",
  },
  contenedortlista: {
    textAlign: "center",
    fontSize: 15,
    color: "#a52a2a",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default UserScreen;

import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../../../context/GlobalProvider";
import { Picker } from "@react-native-picker/picker";
import Layout from "../../../../components/Layout";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";

const RegisterScreen = () => {
  const usuario = {
    uri: "https://www.dropbox.com/s/nv9k77cwb5i2wbn/tea.jpg?dl=1",
  };
  const icon = {
    uri: "https://www.dropbox.com/s/0ecs7f5qe3nevkh/baby.png?dl=1",
  };
  const niño = {
    uri: "https://www.dropbox.com/s/mwhdzts1pyzwvu4/varon.png?dl=1",
  };
  const correo = {
    uri: "https://www.dropbox.com/s/32dbbybg0mzn29r/correo.png?dl=1",
  };
  const contra = {
    uri: "https://www.dropbox.com/s/6ufy6m7q661xc1s/contra.png?dl=1",
  };
  const restablecer = {
    uri: "https://www.dropbox.com/s/5hw505f6q9fw70z/restablecer.png?dl=1",
  };
  const cebe = {
    uri: "https://www.dropbox.com/s/ccsr46yed39qcme/cg.jpg?dl=1",
  };
  const navigation = useNavigation();
  const { Register, company, obtenerEscuela } = useGlobal();
  const [filter, setFilter] = useState("");
  const [user, setUser] = useState({
    document: "",
    Apoderado: "",
    niño: "",
    usuario: "",
    contraseña: "",
    rol: 2,
    empresa: "",
  });
  const handleChange = (name, value) => setUser({ ...user, [name]: value });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    user.empresa = filter;
    user.usuario = user.document;
    if (
      user.Apoderado === "" ||
      user.niño === "" ||
      user.usuario === "" ||
      user.contraseña === "" ||
      user.empresa === ""
    ) {
      setLoading(false);
      Alert.alert("Existen campos vacíos");
      return;
    }
    try {
      const { status, data } = await Register(user);
      if (status == 201) {
        Alert.alert("Registrado");
        setUser({
          document: "",
          Apoderado: "",
          niño: "",
          usuario: "",
          contraseña: "",
          rol: 2,
          empresa: "",
        });
        navigation.navigate("Login");
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
    navigation.navigate("Login");
  };

  useEffect(() => {
    obtenerEscuela();
  }, []);

  return (
    <ScrollView>
      <Layout>
        <View style={style.container}>
          <View style={style.encabezado}>
            <TouchableNativeFeedback onPress={handlepost}>
              <ImageBackground
                source={restablecer}
                style={style.restablecer}
              ></ImageBackground>
            </TouchableNativeFeedback>
            <Text style={style.texto}>REGISTRO DE USUARIOS</Text>
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
            <View style={style.icono}>
              <ImageBackground
                source={icon}
                style={style.icon}
              ></ImageBackground>
              <TextInput
                style={style.input}
                onChangeText={(text) => handleChange("document", text)}
                value={user.document}
                placeholder="DNI"
              />
            </View>
            <View style={style.icono}>
              <ImageBackground
                source={icon}
                style={style.icon}
              ></ImageBackground>
              <TextInput
                style={style.input}
                onChangeText={(text) => handleChange("Apoderado", text)}
                value={user.Apoderado}
                placeholder="Nombre del Apoderado"
              />
            </View>
            <View style={style.icono}>
              <ImageBackground
                source={niño}
                style={style.icon}
              ></ImageBackground>
              <TextInput
                style={style.input}
                onChangeText={(text) => handleChange("niño", text)}
                value={user.niño}
                placeholder="Nombre del niño"
              />
            </View>
            <View style={style.icono}>
              <ImageBackground
                source={correo}
                style={style.icon}
              ></ImageBackground>
              <TextInput
                style={style.input}
                onChangeText={(text) => handleChange("usuario", text)}
                value={user.document}
                placeholder="Usuario o Correo"
              />
            </View>
            <View style={style.icono}>
              <ImageBackground
                source={contra}
                style={style.icon}
              ></ImageBackground>
              <TextInput
                style={style.input}
                onChangeText={(text) => handleChange("contraseña", text)}
                value={user.contraseña}
                placeholder="Contraseña"
                keyboardType="numeric"
              />
            </View>

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

            <View style={style.btniniciar}>
              <TouchableNativeFeedback
                style={style.btninciarsesion}
                onPress={handleSubmit}
              >
                <Text style={style.contenedortextiniciar}>Registrarse</Text>
              </TouchableNativeFeedback>
            </View>
            <View>
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>
      </Layout>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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
    marginTop: 30,
    marginBottom: 20,
    width: 150,
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
    padding: 20,
    width:"100%"
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
    width: 90,
    height: 90,
    marginTop: 10,
  },
});

export default RegisterScreen;

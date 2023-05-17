import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../../context/GlobalProvider";
import Layout from "../../../components/Layout";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";

const InicioSecionScreen = () => {
  const localimage = {
    uri: "https://www.dropbox.com/s/36lkwzachncnywe/autismo.png?dl=1",
  };
  const usuario = {
    uri: "https://www.dropbox.com/s/yb98pj889pwtldd/user.png?dl=1",
  };
  const candado = {
    uri: "https://www.dropbox.com/s/9q04v4hgejvo226/candado.png?dl=1",
  };
  const ayudo = {
    uri: "https://www.dropbox.com/s/fo49vik1n72jl37/ayudo.png?dl=1",
  };

  const { setAuth, SignIn } = useGlobal();
  const navigation = useNavigation();
  const [user, setUser] = useState({
    us: "",
    password: "",
  });
  const handleChange = (name, value) => setUser({ ...user, [name]: value });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (user.us === "" || user.password === "") {
      setLoading(false);
      Alert.alert("Existen campos vacíos");
      return;
    }
    try {
      const { status, data } = await SignIn(user);
      if (status == 201) {
        setAuth(data.user);
        navigation.navigate("Principal");
        setLoading(false);
      } else {
        Alert.alert(`${data.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <View style={style.textocontenedor}>
            <ImageBackground
              source={ayudo}
              style={style.ayudo}
            ></ImageBackground>
          </View>

          <ImageBackground
            source={localimage}
            style={style.imagengeneral}
          ></ImageBackground>

          <View style={style.contenedorlogin}>
            <View style={style.logeo}>
              <ImageBackground
                source={usuario}
                style={style.user}
              ></ImageBackground>
              <TextInput
                style={style.input}
                placeholder="DNI"
                placeholderTextColor="navy"
                onChangeText={(text) => handleChange("us", text)}
                value={user.us}
              />
            </View>

            <View style={style.logeo}>
              <ImageBackground
                source={candado}
                style={style.user}
              ></ImageBackground>
              <TextInput
                style={style.input}
                placeholder="Contraseña"
                placeholderTextColor="navy"
                onChangeText={(text) => handleChange("password", text)}
                value={user.password}
                secureTextEntry={true}
              />
            </View>

            <View style={style.btniniciar}>
              <TouchableOpacity
                style={style.btninciarsesion}
                onPress={handleSubmit}
              >
                <Text style={style.contenedortextiniciar}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>

            <View style={style.btnregister}>
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <TouchableNativeFeedback
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={style.contenedortextregistrar}>Registrarse</Text>
                </TouchableNativeFeedback>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const style = StyleSheet.create({
  /* CONTEDOR - GENERAL*/
  container: {
    marginTop: 2,
    width: "100%",
    height: "100%",
  },
  texto: {
    color: "gold",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
  },
  imagengeneral: {
    width: 360,
    height: 300,
    alignSelf: "center",
    marginTop: 50,
  },
  textocontenedor: {
    padding: 5,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  /*BOTONES PRICIPALES*/
  contenedorlogin: {
    margin:10
  },
  btniniciar: {
    backgroundColor: "gold",
    marginBottom: 10,
    borderRadius: 115,
    width: 220,
    padding: 8,
    alignSelf: "center",
  },
  contenedortextiniciar: {
    textAlign: "center",
    fontSize: 15,
    color: "navy",
    fontWeight: "bold",
  },
  contenedortextregistrar: {
    textAlign: "center",
    fontSize: 15,
    color: "navy",
    textDecorationLine: "underline",
  },
  contenedortextolv: {
    textAlign: "center",
    fontSize: 15,
    color: "black",
    textDecorationLine: "underline",
  },
  logeo: {
    borderWidth: 3,
    borderColor: "navy",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    width: 350,
    alignSelf: "center",
    marginBottom: 30,
    flexDirection: "row",
  },
  user: {
    width: 20,
    height: 20,
  },
  input: {
    fontSize: 12,
    marginLeft: 8,
    width: 300,
  },
  olv: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 50,
  },
  ayudo: {
    width: 350,
    height: 50,
    marginTop: 30,
  },
});

export default InicioSecionScreen;

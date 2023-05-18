import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../context/GlobalProvider";
import Layout from "../../components/Layout";
import Name from "../../components/Name";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const PrincipalScreen = () => {
  const Img = {
    uri: "https://www.dropbox.com/s/ihn6nbj57hxsg92/estimulacion.png?dl=1",
  };
  const Img2 = {
    uri: "https://www.dropbox.com/s/9aguell3l8em2b0/atencion.png?dl=1",
  };
  const Img3 = {
    uri: "https://www.dropbox.com/s/xg8dmzqpwlnq0e6/alegre.png?dl=1",
  };
  const Img4 = {
    uri: "https://www.dropbox.com/s/8al8474yxwdrpjl/triste.png?dl=1",
  };
  const Img5 = {
    uri: "https://www.dropbox.com/s/caxu1km66gjfu3h/enfadado.png?dl=1",
  };
  const Img6 = {
    uri: "https://www.dropbox.com/s/697wx323l45ytzc/estudiando.png?dl=1",
  };
  const cerrar = {
    uri: "https://www.dropbox.com/s/pai7eu5gt2wxy0i/exit.png?dl=1",
  };
  const ver = {
    uri: "https://www.dropbox.com/s/8z8qevinklotfud/vermas.png?dl=1",
  };
  const { auth, LogOut } = useGlobal();
  const navigation = useNavigation();
  const handleback = () => {
    LogOut();
    if (auth == null) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("Principal");
    }
  };
  const handleAprendizajeclick = () => {
    navigation.navigate("Aprendizaje");
  };
  const hanldeanimoclick = () => {
    navigation.navigate("Ánimo");
  };
  return (
    <ScrollView>
      <Layout>
        <Name title="PRINCIPAL" />
        <View style={style.container}>
          <View style={style.curso}>
            <Text style={style.texto}>CONÓCENOS </Text>
          </View>

          <View style={style.contenedor}>
            <ImageBackground source={Img6} style={style.est}></ImageBackground>
            <View style={style.desciption}>
              <Text style={style.tex}>
                TEAyudo Aprender es una herramienta de aprendizaje, intervención
                e inclución social para persona con TEA y otras niños con
                habilidades especiales.
              </Text>
              <Text style={style.tex}>
                Es una aplicación interactiva para favorecer la inclusión
                educativa y social.
              </Text>
            </View>
          </View>

          <View style={style.curso}>
            <Text style={style.texto}>MIS CURSOS </Text>
          </View>

          <View style={style.contenedor}>
            <View style={style.clase}>
              <ImageBackground source={Img} style={style.Img}></ImageBackground>
              <Text style={style.humano}>Estimulación Visual</Text>
            </View>

            <View style={style.clase}>
              <ImageBackground
                source={Img2}
                style={style.Img}
              ></ImageBackground>
              <Text style={style.humano}>Trabajo de atención</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleAprendizajeclick}>
            <View style={style.ver}>
              <Text style={style.mas}>ver mas</Text>
              <ImageBackground
                source={ver}
                style={style.vermas}
              ></ImageBackground>
            </View>
          </TouchableOpacity>

          <View style={style.curso}>
            <Text style={style.texto}>¿COMO TE ENCUENTRAS HOY?</Text>
          </View>

          <View style={style.contenedor}>
            <View style={style.estado}>
              <ImageBackground
                source={Img3}
                style={style.animo}
              ></ImageBackground>
            </View>
            <View style={style.estado}>
              <ImageBackground
                source={Img4}
                style={style.animo}
              ></ImageBackground>
            </View>
            <View style={style.estado}>
              <ImageBackground
                source={Img5}
                style={style.animo}
              ></ImageBackground>
            </View>
          </View>

          <TouchableOpacity onPress={hanldeanimoclick}>
            <View style={style.ver}>
              <Text style={style.mas}>ver mas</Text>
              <ImageBackground
                source={ver}
                style={style.vermas}
              ></ImageBackground>
            </View>
          </TouchableOpacity>

          <View style={style.atras}>
            <TouchableOpacity onPress={handleback}>
              <ImageBackground
                source={cerrar}
                style={style.imagencerrar}
              ></ImageBackground>
            </TouchableOpacity>
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
  },
  imagencerrar: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  curso: {
    padding: 8,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
  },
  contenedor: {
    flexDirection: "row",
    alignSelf: "center",
  },
  clase: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 5,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 2,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "navy",
  },
  Img: {
    width: 50,
    height: 50,
    margin: 3,
  },
  humano: {
    alignSelf: "center",
    fontWeight: "bold",
    marginRight: 12,
    fontSize: 10,
  },
  ver: {
    flexDirection: "row",
    marginLeft: 320,
    width: 70,
  },
  vermas: {
    width: 10,
    height: 10,
    alignSelf: "center",
    margin: 3,
  },
  mas: {
    color: "navy",
    fontWeight: "bold",
  },
  animo: {
    width: 120,
    height: 120,
  },
  estado: {
    padding: 5,
  },
  est: {
    width: 120,
    height: 199,
    alignSelf: "center",
  },
  desciption: {
    width: 250,
    padding: 8,
    alignSelf: "center",
  },
  tex: {
    textAlign: "justify",
    fontSize: 10,
    lineHeight: 18,
  },
  atras: {
    alignSelf: "center",
  },
});

export default PrincipalScreen;

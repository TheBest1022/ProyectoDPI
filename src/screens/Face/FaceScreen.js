import React, { useEffect, useState, useRef } from "react";
import { Audio } from "expo-av";
import { useGlobal } from "../../context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { dataFace } from "../../sample/Face";
import Layout from "../../components/Layout";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import Name from "../../components/Name";

const FaceScreen = () => {
  const navigation = useNavigation();
  const { auth, student } = useGlobal();
  const [sound, setSound] = React.useState();
  const [filter, setFilter] = useState("");
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [cronometroActivo, setCronometroActivo] = useState(false);
  const [mostrarTiempo, setMostrarTiempo] = useState(false);
  const intervalRef = useRef(null);
  const cerrar = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };
  const cronometro = {
    uri: "https://www.dropbox.com/s/grc0g2hmxxw3s1p/cronometro.png?dl=1",
  };
  const renderData = () => {
    return (
      <View>
        {dataFace.map(({ module }, index) => (
          <View style={style.contenedor} key={index}>
            {module.map(({ source, sonido }, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    if (cronometroActivo) {
                      detenerCronometro();
                    }
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.emoji}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const iniciarCronometro = () => {
    setCronometroActivo(true);
    intervalRef.current = setInterval(() => {
      setTiempoTranscurrido((prevTiempo) => prevTiempo + 1);
    }, 1000);
  };

  const detenerCronometro = () => {
    setCronometroActivo(false);
    clearInterval(intervalRef.current);
    setMostrarTiempo(true);
    setTimeout(() => {
      setMostrarTiempo(false);
      setTiempoTranscurrido(0);
    }, 7000);
  };

  const handlebackPress = () => {
    navigation.navigate("Principal");
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };
    useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <ScrollView>
      <Layout>
        <Name title="ESTADO" />

        <View style={style.container}>
          {auth.IdRol == 2 || auth.IdRol == 5 ? (
            <View style={style.estado}>
              <TouchableOpacity
                style={[style.cronometroButton, style.iniciarButton]}
                onPress={iniciarCronometro}
              >
                <ImageBackground
                  source={cronometro}
                  style={style.cronometro}
                ></ImageBackground>
              </TouchableOpacity>
              <Text style={style.description}>
                ¿Como te encuentras hoy&nbsp;
                <Text style={style.name}>{auth.Nombre_Niño}</Text>?
              </Text>
            </View>
          ) : (
            <View style={style.estado}>
              <TouchableOpacity
                style={[style.cronometroButton, style.iniciarButton]}
                onPress={iniciarCronometro}
              >
                <ImageBackground
                  source={cronometro}
                  style={style.cronometro}
                ></ImageBackground>
              </TouchableOpacity>
              <Picker
                selectedValue={filter}
                onValueChange={(itemValue) => setFilter(itemValue)}
                style={style.select}
              >
                <Picker.Item label="-- Alumno --" value="id" />
                {student.map((item) => (
                  <Picker.Item
                    key={item.id}
                    label={item.name}
                    value={item.id}
                  />
                ))}
              </Picker>
            </View>
          )}

          {cronometroActivo && !mostrarTiempo ? (
            <Text style={style.cronometroText}>
              {formatTime(tiempoTranscurrido)}
            </Text>
          ) : null}

          {mostrarTiempo && (
            <Text
              style={style.cronometroText}
            >{`Tiempo transcurrido: ${formatTime(tiempoTranscurrido)}`}</Text>
          )}

          {renderData()}

          <TouchableNativeFeedback onPress={handlebackPress}>
            <ImageBackground
              source={cerrar}
              style={style.imagencerrar}
            ></ImageBackground>
          </TouchableNativeFeedback>
        </View>
      </Layout>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  imagenmenu: {
    width: 50,
    height: 50,
  },
  estado: {
    width: "90%",
    padding: 15,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  description: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
  },
  emoji: {
    width: 110,
    height: 110,
    alignSelf: "center",
    margin: 3,
  },
  contenedor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imagencerrar: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 10,
  },
  name: {
    color: "blue",
    fontWeight: "bold",
  },
  //select
  select: {
    backgroundColor: "#f0ffff",
    width: "70%",
    alignSelf: "center",
    margin: 5,
    color:'navy',
    fontWeight:'bold',
  },
  textSelect:{
    fontWeight:'bold',
    fontSize:16
  },
  //Cronometro
  cronometroButton: {
    backgroundColor: "#f0ffff",
    alignSelf: "center",
    borderRadius: 70,
  },
  cronometroButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  cronometroText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  //btncronometro
  cronometro: {
    width: 80,
    height: 80,
  },
});

export default FaceScreen;

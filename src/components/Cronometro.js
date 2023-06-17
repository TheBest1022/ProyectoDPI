import React, { useEffect, useState, useRef } from "react";
import { useGlobal } from "../context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { Audio } from "expo-av";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";

const Cronometro = () => {
  const { auth, student, insertTimePractice, getStudents } = useGlobal();

  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [sound, setSound] = React.useState();
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [cronometroActivo, setCronometroActivo] = useState(false);
  const [mostrarTiempo, setMostrarTiempo] = useState(false);

  const intervalRef = useRef(null);

  const [user, setUser] = useState({
    apoderado: "",
    time: "",
  });

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
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const handleSubmit = async () => {
    setLoading(true);
    user.apoderado = auth.IdRol == 2 ? auth.id : filter != "" ? filter : "";
    user.time = formatTime(tiempoTranscurrido);
    if (user.apoderado === "" || user.time === "") {
      setLoading(false);
      Alert.alert("ERROR");
      return;
    }
    try {
      const { status, data } = await insertTimePractice(user);
      if (status == 201) {
        Alert.alert("Tiempo Registrado");
        setUser({
          apoderado: "",
          time: "",
        });
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
  const cronometro = {
    uri: "https://www.dropbox.com/s/grc0g2hmxxw3s1p/cronometro.png?dl=1",
  };
  const stop = {
    uri: "https://www.dropbox.com/s/z2mudxqlb9q9qal/boton-detener.png?dl=1",
  };
  const send = {
    uri: "https://www.dropbox.com/s/p77g5sk8w65v3uw/expediente.png?dl=1",
  };
  useEffect(() => {
    getStudents(auth.id_empresa);
  }, []);

  return (
    <View style={style.container}>
      <View>
        {auth.IdRol == 2 || auth.IdRol == 5 ? (
          <View>
            <View style={style.estado}>
              <TouchableOpacity
                style={[style.cronometroButton, style.iniciarButton]}
                onPress={async () => {
                  iniciarCronometro();
                }}
              >
                <ImageBackground
                  source={cronometro}
                  style={style.cronometro}
                ></ImageBackground>
              </TouchableOpacity>

              <View style={style.contenedorBotones}>
                <View>
                  <TouchableOpacity
                    style={[style.cronometroButtonDetenner]}
                    onPress={async () => {
                      detenerCronometro();
                    }}
                  >
                    <ImageBackground
                      source={stop}
                      style={style.stop}
                    ></ImageBackground>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={[style.cronometroButtonRegistrar]}
                    onPress={async () => {
                      handleSubmit();
                    }}
                  >
                    <ImageBackground
                      source={send}
                      style={style.send}
                    ></ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              {cronometroActivo && !mostrarTiempo ? (
                <Text style={style.cronometroText}>
                  {formatTime(tiempoTranscurrido)}
                </Text>
              ) : null}

              {mostrarTiempo && (
                <Text
                  style={style.cronometroText}
                >{`Tiempo transcurrido: ${formatTime(
                  tiempoTranscurrido
                )}`}</Text>
              )}
            </View>
          </View>
        ) : (
          <View>
            <Picker
              selectedValue={filter}
              onValueChange={(itemValue) => setFilter(itemValue)}
              style={style.select}
            >
              <Picker.Item label="-- Alumno --" value="" />
              {student.map((item) => (
                <Picker.Item key={item.id} label={item.name} value={item.id} />
              ))}
            </Picker>
            <View style={style.estado}>
              <TouchableOpacity
                style={[style.cronometroButton, style.iniciarButton]}
                onPress={async () => {
                  iniciarCronometro();
                }}
              >
                <ImageBackground
                  source={cronometro}
                  style={style.cronometro}
                ></ImageBackground>
              </TouchableOpacity>

              <View style={style.contenedorBotones}>
                <View>
                  <TouchableOpacity
                    style={[style.cronometroButtonDetenner]}
                    onPress={async () => {
                      detenerCronometro();
                    }}
                  >
                    <ImageBackground
                      source={stop}
                      style={style.stop}
                    ></ImageBackground>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={[style.cronometroButtonRegistrar]}
                    onPress={async () => {
                      handleSubmit();
                    }}
                  >
                    <ImageBackground
                      source={send}
                      style={style.send}
                    ></ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              {cronometroActivo && !mostrarTiempo ? (
                <Text style={style.cronometroText}>
                  {formatTime(tiempoTranscurrido)}
                </Text>
              ) : null}

              {mostrarTiempo && (
                <Text
                  style={style.cronometroText}
                >{`Tiempo transcurrido: ${formatTime(
                  tiempoTranscurrido
                )}`}</Text>
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
  estado: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
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
    width: "90%",
    alignSelf: "center",
    margin: 5,
    color: "navy",
    fontWeight: "bold",
  },
  textSelect: {
    fontWeight: "bold",
    fontSize: 16,
  },
  //Cronometro
  cronometroButton: {
    alignSelf: "center",
    borderRadius: 70,
  },
  cronometroButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cronometroText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
    color: "navy",
    textDecorationLine: "underline",
  },
  //btncronometro
  cronometro: {
    width: 120,
    height: 120,
  },
  //botones
  contenedorBotones: {
    flexDirection: "row",
    alignSelf: "center",
  },
  //Detener
  cronometroButtonDetenner: {
    backgroundColor: "red",
    margin: 3,
    padding: 10,
    borderRadius: 40,
  },
  cronometroButtonRegistrar: {
    backgroundColor: "green",
    margin: 3,
    padding: 10,
    borderRadius: 40,
  },
  Text: {
    color: "white",
    fontWeight: "bold",
  },
  //stop
  stop: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  //send
  send: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});

export default Cronometro;

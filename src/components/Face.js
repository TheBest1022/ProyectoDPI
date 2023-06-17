import React, { useState, useRef, useEffect } from "react";
import { useGlobal } from "../context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import { conexionURL } from "../helpers/configuracion.js";
import { Picker } from "@react-native-picker/picker";
import { Audio } from "expo-av";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from "react-native";

const Face = ({ faces }) => {
  const navigation = useNavigation();

  const { auth, student, getStudents, insertTimeFace} = useGlobal();

  const [sound, setSound] = React.useState();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [cronometroActivo, setCronometroActivo] = useState(false);
  const [mostrarTiempo, setMostrarTiempo] = useState(false);
  const [statusBottom, setStatusBottom] = useState(false)
  const intervalRef = useRef(null);

  const [user, setUser] = useState({
    apoderado:"",
    face: "",
    time: "",
  });

  const iniciarCronometro = () => {
    setCronometroActivo(true);
    setStatusBottom(true);
    intervalRef.current = setInterval(() => {
      setTiempoTranscurrido((prevTiempo) => prevTiempo + 1);
    }, 1000);
  };

  const detenerCronometro = () => {
    setCronometroActivo(false);
    setStatusBottom(false);
    clearInterval(intervalRef.current);
    setMostrarTiempo(true);
    setTimeout(() => {
      setMostrarTiempo(false);
      setTiempoTranscurrido(0);
    }, 5000);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleSubmit = async (imagen) => {
    setLoading(true);
    user.apoderado = auth.IdRol == 2 ? auth.id : filter != "" ? filter : ""
    user.face = imagen
    user.time = formatTime(tiempoTranscurrido)
   if ((user.apoderado === "" || user.face === "", user.time === "")) {
      setLoading(false);
      Alert.alert("ERROR")
      return;
    }
    try {
      const { status, data } = await insertTimeFace(user);
      if(status == 201){
        Alert.alert("Tiempo Registrado");
        setUser({
          apoderado:"",
          face:"",
          time:""
        })
        navigation.navigate("Ánimo");
        setLoading(false);
      }else{
        Alert.alert(`${data.message}`);
        setLoading(false);
      }
    } catch (error) {
      Alert.alert(error);
      setLoading(false);
    }
  };

  const handlePressSound = async (item) => {
    const { sound } = await Audio.Sound.createAsync({
      uri: `${conexionURL}api/docente/sound/${item}`,
    });
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  useEffect(() => {
    getStudents(auth.id_empresa);
  }, []);

  const handlebackPress = () => {
    navigation.navigate("Principal");
  };

  const cerrar = {
    uri: "https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1",
  };

  const cronometro = {
    uri: "https://www.dropbox.com/s/grc0g2hmxxw3s1p/cronometro.png?dl=1",
  };

  const renderData = (faces) => {
    return (
      <View style={style.container}>
        {faces.map((item) => (
          <View style={style.emojiContainer} key={item.id}>
            <View>
              <TouchableOpacity
                onPress={async () => {
                  if (cronometroActivo) {
                    detenerCronometro();
                  }
                  if(statusBottom){
                    handleSubmit(item.id)
                  }
                  handlePressSound(item.Sonido)
                }}
              >
                <ImageBackground
                  source={{ uri: item.Imagen }}
                  style={style.emoji}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View>
      <View style={style.container}>
        {auth.IdRol == 2 ? (
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
              <Picker.Item label="-- Alumno --" value="" />
              {student.map((item) => (
                <Picker.Item key={item.id} label={item.name} value={item.id} />
              ))}
            </Picker>
          </View>
        )}

        <View style={style.containerTime}>

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
        </View>



        {renderData(faces)}
      </View>

      
      <TouchableOpacity onPress={handlebackPress}>
        <ImageBackground
          source={cerrar}
          style={style.imagencerrar}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  //Imagenes
  emoji: {
    width: 110,
    height: 110,
    alignSelf: "center",
    margin: 3,
  },
  dataContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  //cerrar
  imagencerrar: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 10,
  },
  estado: {
    width: "90%",
    padding: 15,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  //descripcion del nombre
  description: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
  },
  //Nombre de niño
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
    color: "navy",
    fontWeight: "bold",
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
  //contenedor
  contenedor: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  //container Time
  containerTime:{
    alignSelf: 'center',
    alignItems: 'center',  // Agrega esta propiedad para centrar horizontalmente
    justifyContent: 'center',  // Agrega esta propiedad para centrar verticalmente
    width: '100%',  // Ajusta el ancho del contenedor según tus necesidades
  }
});

export default Face;

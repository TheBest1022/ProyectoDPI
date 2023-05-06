import React from "react";
import Layout from "../../components/Layout";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Audio } from "expo-av";
import { useGlobal } from "../../context/GlobalProvider";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import Name from "../../components/Name";

import feliz from "../../../assets/alegre.png";
import triste from "../../../assets/triste.png";
import enojado from "../../../assets/enfadado.png";
import aburrido from "../../../assets/aburrido.png";
import sorprendido from "../../../assets/sorprendido.png";
import asustado from "../../../assets/miedoso.png";
import confuso from "../../../assets/confuso.png";
import goloso from "../../../assets/Goloso.png";
import avergonzado from "../../../assets/avergonzado.png";
import atento from "../../../assets/atento.png";
import cansado from "../../../assets/cansado.png";
import caluroso from "../../../assets/caluroso.png";
import distraido from "../../../assets/distraido.png";
import frio from "../../../assets/friolento.png";
import serio from "../../../assets/serio.png";
import tímido from "../../../assets/tímido.png";
import preocupado from "../../../assets/preocupado.png";
import nervioso from "../../../assets/nervioso.png";

import cerrar from "../../../assets/atras.png";

import felizmp from "../../../assets/Audios/feliz.mp3";
import tristemp from "../../../assets/Audios/triste.mp3";
import enojadomp from "../../../assets/Audios/enfadado.mp3";
import aburridomp from "../../../assets/Audios/aburrido.mp3";
import sorprendidomp from "../../../assets/Audios/sorprendido.mp3";
import asustadomp from "../../../assets/Audios/asustado.mp3";
import confusomp from "../../../assets/Audios/confuso.mp3";
import golosomp from "../../../assets/Audios/goloso.mp3";
import avergonzadomp from "../../../assets/Audios/avergonzado.mp3";
import atentomp from "../../../assets/Audios/atender.mp3";
import cansadomp from "../../../assets/Audios/cansado.mp3";
import calurosomp from "../../../assets/Audios/caluroso.mp3";
import distraidomp from "../../../assets/Audios/distraído.mp3";
import friomp from "../../../assets/Audios/frío.mp3";
import seriomp from "../../../assets/Audios/serio.mp3";
import timidomp from "../../../assets/Audios/tímido.mp3";
import preocupadomp from "../../../assets/Audios/preocupado.mp3";
import nerviosomp from "../../../assets/Audios/nervioso.mp3";

const FaceScreen = () => {
  const { auth } = useGlobal();
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handleback = () => {
    navigation.navigate("Principal");
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name title="ESTADO" />

          <View style={style.estado}>
            <Text style={style.description}>
              ¿Como te encuentras hoy&nbsp;<Text style={style.name}>{auth.Nombre_Niño}</Text>?
            </Text>
          </View>

          <View style={style.contenedor}>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(felizmp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={feliz}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(aburridomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={aburrido}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(tristemp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={triste}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={style.contenedor}>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(nerviosomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={nervioso}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(sorprendidomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={sorprendido}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(confusomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={confuso}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={style.contenedor}>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(enojadomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={enojado}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(asustadomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={asustado}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(avergonzadomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={avergonzado}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={style.contenedor}>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(golosomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={goloso}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(atentomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={atento}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(cansadomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={cansado}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={style.contenedor}>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(distraidomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={distraido}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(calurosomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={caluroso}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(friomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={frio}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={style.contenedor}>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(preocupadomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={preocupado}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(timidomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={tímido}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const { sound } = await Audio.Sound.createAsync(seriomp);
                setSound(sound);
                await sound.playAsync();
              }}
            >
              <ImageBackground
                source={serio}
                style={style.emoji}
              ></ImageBackground>
            </TouchableOpacity>
          </View>

          <TouchableNativeFeedback onPress={handleback}>
            <ImageBackground
              source={cerrar}
              style={style.imagencerrar}
            ></ImageBackground>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    marginTop: 25,
  },
  imagenmenu: {
    width: 50,
    height: 50,
  },
  estado: {
    padding: 15,
  },
  description: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
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
  },
  imagencerrar: {
    width: 35,
    height: 35,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  name: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default FaceScreen;

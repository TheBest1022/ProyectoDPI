import React, {useState, useCallback} from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../components/Layout";
import YoutubePlayer from 'react-native-youtube-iframe';
import Name from "../../../components/General";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";


const PsicomotrocidadScreen = () => {
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  const navigation = useNavigation();
  const handleback = () => {
    navigation.navigate("Aprendizaje");
  };
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Psicomotrocidad para niños</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"B4Xbv8y3mps"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Psicomotriz para niños Circuitos con botellas.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"5MpeHZzM1p8"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Psicomotriz juegos con desplazamientos.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"fYq6BAR5O9g"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Psicomotriz Con pelota.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"8-ocnkGMamM"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Psicomotriz para pequeños.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"vKl-zmS3VEA"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Secuencia de Colores y Formas.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"Jze_HURWTuI"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Psicomotriz Lateralidad juegos.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"0XRP464G4V8"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Taller de psicomotricidad: Escalera psicomotriz.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"qHsEUjwqmOE"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Lento - Movimiento - Activación Física - Baile .</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"VK3aXHqcHsQ"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: APRENDER a CONTAR en niños con TEA.</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"sASKLGo75qI"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: TRABAJAR CON NIÑOS CON TEA/CEA</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"ktTKswC1SbU"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Enseñar las EMOCIONES a niños con TEA</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"e0f91WgVQRE"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: ACTIVIDADES para trabajar las emociones BÁSICAS</Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"F_bk-Agm7Oo"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>

          <View style={style.conte}>
            <Text style={style.texto}>VIDEO: Actividades de CONCIENCIA FONOLÓGICA </Text>
            <YoutubePlayer
              height={240}
              width={350}
              videoId={"KKeTlkuEafo"} // Reemplaza esto con el ID del video de YouTube
              play={playing}
              onChangeState={onStateChange}
            />
          </View>


          <View style={style.containerimages}>
            <TouchableOpacity onPress={handleback}>
              <ImageBackground
                source={atras}
                style={style.imagensiguiente}
              ></ImageBackground>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#f0f8ff",
  },
  imagensiguiente: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginBottom:20
  },
  video: {
    width: 320,
    height: 240,
  },
  conte: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:5
  },
  texto:{
    marginBottom:10,
    fontWeight:'bold',
    color:'purple',
    alignSelf:'center'
  },
});

export default PsicomotrocidadScreen;

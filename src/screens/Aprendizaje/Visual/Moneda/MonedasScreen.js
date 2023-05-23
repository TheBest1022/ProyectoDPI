import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import Layout from "../../../../components/Layout";
import Name from "../../../../components/General";
import {
  dataMenorSol,
  dataMoneda,
  dataMayorSol,
  dataBilletes,
} from "../../../../sample/Visual";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const MonedasScreen = () => {
  const Img = {uri:"https://www.dropbox.com/s/dfpqvodyg82heov/moneda.png?dl=1"}
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();
  const handlebackPress = () => {
    navigation.navigate("visual");
  };
  const renderDataMonedaSol = () => {
    return (
      <View>
        {dataMoneda.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const renderDataMenorSol = () => {
    return (
      <View>
        {dataMenorSol.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const renderDataMayorSol = () => {
    return (
      <View>
        {dataMayorSol.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  const renderBiletes = () => {
    return (
      <View>
        {dataBilletes.map(({ module }, index) => (
          <View style={style.contendor} key={index}>
            {module.map(({ source }, index) => (
              <View style={style.imagen} key={index}>
                <TouchableOpacity
                  onPress={async () => {
                    const { sound } = await Audio.Sound.createAsync(sonido);
                    setSound(sound);
                    await sound.playAsync();
                  }}
                >
                  <ImageBackground
                    source={source}
                    style={style.img}
                  ></ImageBackground>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <Text style={style.text}>LAS MONEDAS</Text>

          <View style={style.contendor}>
            <View style={style.tex}>
              <Text style={style.descripcion}>
                El dinero es un símbolo que representa el valor de las cosas,
                tiene forma de moneda, billete y sirve para comprar todo aquello
                que queramos o necesitemos.
              </Text>
            </View>
            <View style={style.imagen}>
              <TouchableOpacity>
                <ImageBackground
                  source={Img}
                  style={style.Img}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={style.textos}>Monedas menor a un sol</Text>

          {renderDataMenorSol()}

          <Text style={style.textos}>Moneda de un sol</Text>

          {renderDataMonedaSol()}

          <Text style={style.textos}>Monedas mayor a un sol</Text>

          {renderDataMayorSol()}

          <Text style={style.textos}>Billetes</Text>

          {renderBiletes()}

          <View style={style.contendor}>
            <TouchableOpacity onPress={handlebackPress}>
              <ImageBackground
                source={atras}
                style={style.btn}
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
    height:"100%",
    width:"100%",
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tex: {
    width: 230,
    margin: 8,
    alignSelf: "center",
  },
  descripcion: {
    textAlign: "justify",
    fontSize: 11,
    lineHeight: 18,
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
  },
  Img: {
    width: 140,
    height: 140,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
  },
  textos: {
    fontSize: 12,
    color: "purple",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  foto: {
    width: 115,
    height: 115,
    margin: 3,
  },
  ft: {
    width: 80,
    height: 80,
    margin: 3,
  },
  contendores: {
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  img: {
    width: 110,
    height: 110,
    margin: 5,
  },
  imagen: {
    margin: 5,
  },
});

export default MonedasScreen;

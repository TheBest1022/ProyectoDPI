import React, { useEffect } from "react";
import { useGlobal } from "../../../context/GlobalProvider";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { dataAudios } from "../../../sample/Auditiva";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";
import Auditiva from "../../../components/Auditiva";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SeccAuditiva = ({route}) => {
  const id = route.params ? route.params.id : null;
  const { TemaId, tema, recharge } = useGlobal();
  useEffect(() => {
    TemaId(id);
  }, [recharge]);
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <Auditiva temas={tema} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:'white'
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#f0f8ff",
    padding: 10,
    width: 250,
  },
  campo: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 11,
    marginTop: 10,
    color: "navy",
    margin: 10,
    lineHeight: 18,
    alignSelf: "center",
  },
  icono: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  icn: {
    alignSelf: "center",
    margin: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  contenedorimagen: {
    marginLeft: 20,
  },
  contenedor: {
    alignItems: "center",
    margin: 3,
  },
  imagensiguiente: {
    width: 40,
    height: 40,
    margin: 5,
    alignSelf: "center",
  },
});

export default SeccAuditiva;

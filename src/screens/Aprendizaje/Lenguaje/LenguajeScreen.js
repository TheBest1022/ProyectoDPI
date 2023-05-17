import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useGlobal } from "../../../context/GlobalProvider";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";
import Seccion from "../../../components/Seccion";
const LenguajeScreen = ({ route }) => {
  const id = route.params ? route.params.id : null;
  const { TemaId, tema, recharge } = useGlobal();
  useEffect(() => {
    TemaId(id);
  }, [recharge]);

  return (
    <Layout>
      <Name />
      <ScrollView>
        <View style={style.container}>
          <Seccion temas={tema} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: "100%",
  },
});

export default LenguajeScreen;

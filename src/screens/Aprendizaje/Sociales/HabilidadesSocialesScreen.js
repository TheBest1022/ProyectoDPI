import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import { View, StyleSheet, ScrollView } from "react-native";
import Name from "../../../components/General";
import Seccion from "../../../components/Seccion";
import { useGlobal } from "../../../context/GlobalProvider";

const HabilidadesSocialesScreen = ({route}) => {
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
          <Seccion temas={tema} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#f0f8ff",
    padding: 5,
  },
});

export default HabilidadesSocialesScreen;

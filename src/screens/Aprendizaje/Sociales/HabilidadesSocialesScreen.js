import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useGlobal } from "../../../context/GlobalProvider";
import Name from "../../../components/General";
import Sociales from "../../../components/Sociales";
import Layout from "../../../components/Layout";

const HabilidadesSocialesScreen = ({ route }) => {
  const id = route.params ? route.params.id : null;
  const { TemaId, tema, recharge } = useGlobal();
  useEffect(() => {
    TemaId(id);
  }, [recharge]);
  return (
    <ScrollView>
      <Layout>
        <Name />
        <View style={style.container}>
          <Sociales temas={tema} />
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
});

export default HabilidadesSocialesScreen;

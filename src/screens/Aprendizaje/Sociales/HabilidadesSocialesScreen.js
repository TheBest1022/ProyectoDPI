import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useGlobal } from "../../../context/GlobalProvider";
import Name from "../../../components/General";
import Sociales from "../../../components/Sociales";
import Layout from "../../../components/Layout";

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
          <Sociales temas={tema} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "white",
    padding: 5,
  },
});

export default HabilidadesSocialesScreen;

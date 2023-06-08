import React, { useEffect } from "react";
import { useGlobal } from "../../../context/GlobalProvider";
import { View, StyleSheet, ScrollView } from "react-native";
import Atencion from "../../../components/Atencion";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";

const AtencioScreenScreen = ({ route }) => {
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
          <Atencion temas={tema} />
        </View>
      </Layout>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
  },
});

export default AtencioScreenScreen;

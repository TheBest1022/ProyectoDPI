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
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <Atencion temas={tema} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 15,
    paddingTop: 5,
  },
});

export default AtencioScreenScreen;

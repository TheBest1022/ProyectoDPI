import React, { useEffect } from "react";
import { useGlobal } from "../../../context/GlobalProvider";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";
import Auditiva from "../../../components/Auditiva";
import { View, StyleSheet, ScrollView } from "react-native";

const SeccAuditiva = ({ route }) => {
  const id = route.params ? route.params.id : null;
  const { TemaId, tema, recharge } = useGlobal();
  useEffect(() => {
    TemaId(id);
  }, [recharge]);
  return (
    <ScrollView style={style.scrollViewContent}>
      <Layout>
        <Name />

        <View style={style.container}>
          <Auditiva temas={tema} />
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

export default SeccAuditiva;

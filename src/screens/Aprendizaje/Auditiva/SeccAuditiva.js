import React, { useEffect } from "react";
import { useGlobal } from "../../../context/GlobalProvider";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";
import Auditiva from "../../../components/Auditiva";
import {
  View,
  StyleSheet,
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
  }
});

export default SeccAuditiva;

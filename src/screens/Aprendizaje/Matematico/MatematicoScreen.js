import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import { View, StyleSheet, ScrollView } from "react-native";
import { useGlobal } from "../../../context/GlobalProvider";
import Name from "../../../components/General";
import Matematico from "../../../components/Matematico";

const MatematicoScreen = ({route}) => {
  const id = route.params ? route.params.id : null;
  const { TemaId, tema, recharge } = useGlobal();
  useEffect(() => {
    TemaId(id);
  }, [recharge]);
  return (
    <Layout>
      <ScrollView>
         <Name />
        <View style={style.container}>
  
          <Matematico temas={tema} />
        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:'white',
    paddingBottom:"100%"
  },
});

export default MatematicoScreen ;

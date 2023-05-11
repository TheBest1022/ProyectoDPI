import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useGlobal } from "../../../context/GlobalProvider";
import Layout from "../../../components/Layout";
import Name from "../../../components/General";
import Seccion from "../../../components/Seccion";

const SeccScreen = ({route}) => {
  const atras = {uri:"https://www.dropbox.com/s/t1gtw5hq3n6bja2/atras.png?dl=1"}
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
    width: "100%",
    backgroundColor:'white'
  },
  campo: {
    flexDirection: "row",
    alignSelf: "center",
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
  },
  contendorpf: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
    backgroundColor: "#b0e0e6",
    padding: 10,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  conte: {
    width: 50,
    alignSelf: "center",
  },
  tema: {
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#f0f8ff",
    width: 320,
    alignSelf: "center",
    padding: 8,
    color: "navy",
    marginTop: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "navy",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  icn: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});

export default SeccScreen;

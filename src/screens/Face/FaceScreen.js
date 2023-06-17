import React, { useEffect} from "react";
import { useGlobal } from "../../context/GlobalProvider";
import Face from "../../components/Face";
import Layout from "../../components/Layout";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Name from "../../components/Name";

const FaceScreen = ({ route }) => {
  const id = route.params ? route.params.id : null;
  const { FaceId, recharge, face} = useGlobal();
  useEffect(() => {
    FaceId(id);
  }, [recharge]);
  return (
    <ScrollView>
      <Layout>
        <Name title="ESTADO" />
        <View style={style.container}>
            <Face faces={face} />
        </View>
      </Layout>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});

export default FaceScreen;

import { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Layout from "../../components/Layout";
import Name from "../../components/Name";
import DataDocente from "../../components/DataDocente";
import { useGlobal } from "../../context/GlobalProvider";

function SeccionScreen() {
  const { auth, docente, obtenerDatosDocente } = useGlobal();
  useEffect(() => {
    obtenerDatosDocente(auth.id_empresa);
  }, [obtenerDatosDocente]);
  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name title="APRENDIZAJE" />
          <DataDocente data={docente} />
        </View>
      </ScrollView>
    </Layout>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:'white'
  },
});

export default SeccionScreen;

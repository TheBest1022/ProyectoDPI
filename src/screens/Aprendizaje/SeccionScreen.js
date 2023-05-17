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
       <Name title="APRENDIZAJE" />
      <ScrollView>
        <View style={style.container}>
          <DataDocente data={docente} />
        </View>
      </ScrollView>
    </Layout>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom:"40%"
  },
});

export default SeccionScreen;

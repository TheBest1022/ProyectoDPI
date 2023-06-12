import React, { useEffect, useState } from "react";
import { conexionURL } from "../../helpers/configuracion";
import { Picker } from "@react-native-picker/picker";
import { useGlobal } from "../../context/GlobalProvider";
import { Buffer } from "buffer";
import ChekComponent from "../../components/ChekComponent";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import Layout from "../../components/Layout";
import Name from "../../components/General";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  ImageBackground,
  ActivityIndicator,
  Alert
} from "react-native";
import axios from "axios";

let data = [
  {
    id: 1,
    name: "Materiales de estimulación visual ",
  },
  {
    id: 2,
    name: "Materiales para la estimulación auditiva ",
  },
  {
    id: 3,
    name: "Materiales psicomotricidad infantil",
  },
  {
    id: 4,
    name: "Materiales para trabajar la atención ",
  },
  {
    id: 5,
    name: "Materiales para actividades del lenguaje y comunicación ",
  },
  {
    id: 6,
    name: "Materiales para trabajar las habilidades sociales ",
  },
  {
    id: 7,
    name: "Materiales para trabajar lógico-matemáticas ",
  },
];
const AsistenciaScreen = () => {
  const niños = {uri:"https://www.dropbox.com/s/b7yo2x9w2md9nc8/ni%C3%B1os.png?dl=1"}
  const excel = {uri:"https://www.dropbox.com/s/87zn7mottep5xkq/excel.png?dl=1"}
  const { auth, getStudents, student, addAssistence } = useGlobal();
  const [selectStudent, setSelectStudent] = useState([]);
  const [assistence, setAssistence] = useState({
    estudiante: [],
    docente: auth.idDocente,
    usuario: auth.Id,
    empresa: auth.id_empresa,
  });
  const [filter, setFilter] = useState("");
  const [loader, setLoader] = useState(false);

  const handlePress = (id) => {
    const existingStudent = selectStudent.find((student) => student.id === id);

    if (existingStudent) {
      setSelectStudent((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id
            ? {
                ...student,
                estado: student.estado === "ASISTIÓ" ? "FALTA" : "ASISTIÓ",
              }
            : student
        )
      );
    } else {
      setSelectStudent((prevStudents) => [
        ...prevStudents,
        { id, estado: "FALTA" },
      ]);
    }
  };

  const handleSubmit = async () => {
    assistence.estudiante = selectStudent;
    try {
      const { status, data } = await addAssistence(assistence);
      if (status == 201) {
        Alert.alert(data.message);
      } else {
        Alert.alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const downloadExcel = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(
        `${conexionURL}api/docente/report/assistence/${auth.id_empresa}?course=${filter}`,
        {
          responseType: "arraybuffer",
        }
      );

      const base64 = Buffer.from(data, "binary").toString("base64");

      const path = FileSystem.documentDirectory + "report.xlsx";
      await FileSystem.writeAsStringAsync(path, base64, {
        encoding: FileSystem.EncodingType.Base64,
      });

      console.log(path);

      // Compartir el archivo descargado
      const localUri = "file://" + path;

      if (!(await Sharing.isAvailableAsync())) {
        alert("La función para compartir no está disponible en su plataforma");
        return;
      }

      await Sharing.shareAsync(localUri, {
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        dialogTitle: "Reporte de asistencia",
      });
      setLoader(false);
    } catch (error) {
      console.error("Error downloading and sharing Excel:", error);
    }
  };

  useEffect(() => {
    getStudents(auth.id_empresa);
  }, []);

  useEffect(() => {
    if (student.length > 0) {
      setSelectStudent(student.map(({ id }) => ({ id, estado: "ASISTIÓ" })));
    }
  }, [student]);

  return (
    <Layout>
      <ScrollView>
        <View style={style.container}>
          <Name />

          <View>
            <Text style={style.texto}>CONTROL DE ASISTENCIAS</Text>
          </View>

          <View style={style.img}>
            <ImageBackground
              source={niños}
              style={style.imagen}
            ></ImageBackground>
          </View>

          <View style={style.contenedor}>
            <View style={style.lista}>
              <View style={style.asistencia}>
                {student.map(({ id, name }, index) => {
                  const studentObj = selectStudent.find(
                    (course) => course.id === id
                  );
                  const isChecked =
                    studentObj && studentObj.estado === "ASISTIÓ";
                  return (
                    <ChekComponent
                      key={index}
                      label={`${name}`}
                      checked={isChecked}
                      onPress={() => handlePress(id)}
                    />
                  );
                })}
              </View>
            </View>

            <Picker
              selectedValue={filter}
              onValueChange={(itemValue) => setFilter(itemValue)}
              style={style.select}
            >
              <Picker.Item label="-- Selecionar --" value="" />
              {data.map((course) => (
                <Picker.Item
                  key={course.id}
                  label={course.name}
                  value={course.id}
                />
              ))}
            </Picker>

            <View style={style.botones}>
              <View>
                <TouchableOpacity
                  style={style.btnregistrar}
                  onPress={handleSubmit}
                >
                  <Text style={style.register}>REGISTRAR</Text>
                </TouchableOpacity>
              </View>
              <View style={style.exportar}>
                {!loader ? (
                  <TouchableOpacity style={style.excel} onPress={downloadExcel}>
                    <ImageBackground
                      source={excel}
                      style={style.imagenexcel}
                    ></ImageBackground>
                  </TouchableOpacity>
                ) : (
                  <ActivityIndicator size="large" color="#0000ff" />
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%"
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
  },
  imagen: {
    width: 200,
    height: 100,
    alignSelf: "center",
  },
  asistencia: {
    padding: 5,
    marginTop: 10,
  },
  select: {
    width: "80%",
    borderWidth: 2,
    backgroundColor:'#dcdcdc', 
    fontSize:10,
    borderRadius: 25,
    borderColor:'red',
    alignSelf:"center"
  },
  botones: {
    alignSelf: "center",
    flexDirection: "row",
    margin: 10,
  },
  imagenexcel: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 15,
  },
  btnregistrar: {
    backgroundColor: "green",
    borderRadius: 25,
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  register: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default AsistenciaScreen;

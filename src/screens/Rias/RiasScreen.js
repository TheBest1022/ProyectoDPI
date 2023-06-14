import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useGlobal } from "../../context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/Layout";
import Name from "../../components/Name";

let data = [
  {
    id: 1,
    nivel: "Inicial",
  },
  {
    id: 2,
    nivel: "Primaria",
  },
  {
    id: 3,
    nivel: "Secundaria",
  },
];

const RiasScreen = () => {
  const navigation = useNavigation();
  const { Register, company, obtenerEscuela, getStudents, student, auth } = useGlobal();
  const handleChange = (name, value) => setUser({ ...user, [name]: value });
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [Alumno, setAlumno] = useState({
    empresa: auth.id_empresa,
  });
  const [user, setUser] = useState({
    apoderado: "",
    nombre: "",
    empresa: "",
    sexo: "",
    nivel: "",
    fechaEval: "",
    fechaNac: "",
    adivinanza: "",
    categorias: "",
    analogias: "",
    figuras: "",
    verbal: "",
    no_verbal: "",
    ad: "",
    an: "",
    ca: "",
    fi: "",
    mv: "",
    mvn: "",
    TotalRv: "",
    TotalNRv: "",
    Total: "",
    Memoria: "",
    Indiceverbal: "",
    IndiceNoverbal: "",
    IndiceGeneral: "",
    IndiceMemoria: "",
  });
  const handleSubmit = async () => {
    setLoading(true);
    user.empresa = filter;
    if (
      apoderado === "" ||
      nombre === "" ||
      empresa === "" ||
      sexo === "" ||
      nivel === "" ||
      fechaEval === "" ||
      fechaNac === "" ||
      adivinanza === "" ||
      categorias === "" ||
      analogias === "" ||
      figuras === "" ||
      verbal === "" ||
      no_verbal === "" ||
      ad === "" ||
      an === "" ||
      ca === "" ||
      fi === "" ||
      mv === "" ||
      mvn === "" ||
      TotalRv === "" ||
      TotalNRv === "" ||
      Total === "" ||
      Memoria === "" ||
      Indiceverbal === "" ||
      IndiceNoverbal === "" ||
      IndiceGeneral === "" ||
      IndiceMemoria === ""
    ) {
      setLoading(false);
      Alert.alert("Existen campos vacíos");
      return;
    }
    try {
      const { status, data } = await Register(user);
      if (status == 201) {
        Alert.alert("Registrado");
        setUser({
          apoderado: "",
          nombre: "",
          empresa: "",
          sexo: "",
          nivel: "",
          fechaEval: "",
          fechaNac: "",
          adivinanza: "",
          categorias: "",
          analogias: "",
          figuras: "",
          verbal: "",
          no_verbal: "",
          ad: "",
          an: "",
          ca: "",
          fi: "",
          mv: "",
          mvn: "",
          TotalRv: "",
          TotalNRv: "",
          Total: "",
          Memoria: "",
          Indiceverbal: "",
          IndiceNoverbal: "",
          IndiceGeneral: "",
          IndiceMemoria: "",
        });
        navigation.navigate("Principal");
        setLoading(false);
      } else {
        Alert.alert(`${data.message}`);
        setLoading(false);
      }
    } catch {
      Alert.alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerEscuela();
  }, []);

  useEffect(() => {
    getStudents(auth.id_empresa);
  }, []);

  return (
    <ScrollView>
      <Layout>
        <Name title="REGISTRO DE APRENDIZAJE" />
        <View style={style.container}>
          <View style={style.date}>
            <View style={style.dateName}>
              <Text style={style.text}>Nombre y Apellido</Text>
              <Picker
                selectedValue={filter}
                onValueChange={(itemValue) => setFilter(itemValue)}
                style={style.select}
              >
                <Picker.Item label="-- Seleccionar --" value="id" />
                {student.map((item) => (
                  <Picker.Item
                    key={item.id}
                    label={item.name}
                    value={item.id}
                  />
                ))}
              </Picker>
              <Text style={style.text}>Examinador</Text>
              <TextInput
                style={style.inputNivel}
                placeholder="Examinador"
                value={user.nombre}
                onChangeText={(text) => handleChange("nombre", text)}
              />
              <View style={style.dateCentro}>
                <Text style={style.text}>Centro Educativo</Text>
                <Picker
                  style={style.select}
                  selectedValue={filter}
                  onValueChange={(itemValue) => setFilter(itemValue)}
                >
                  <Picker.Item label="-- Seleccionar --" value="id" />
                  {company.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.nombre}
                      value={item.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={style.formDateSexo}>
              <View style={style.formSexo}>
                <View style={style.dateSexo}>
                  <Text style={style.text}>Sexo</Text>
                  <TextInput
                    style={style.input}
                    placeholder="Sexo"
                    value={user.sexo}
                    onChangeText={(text) => handleChange("sexo", text)}
                  />
                </View>
                <View style={style.dateSexo}>
                  <Text style={style.text}>Nivel Educativo</Text>
                  <Picker
                    style={style.selectNivel}
                    selectedValue={filter}
                    onValueChange={(itemValue) => setFilter(itemValue)}
                  >
                    <Picker.Item label="-- Nivel --" value="id" />
                    {data.map((item) => (
                      <Picker.Item
                        key={item.id}
                        label={item.nivel}
                        value={item.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>

            <View style={style.formDate}>
              <View style={style.form}>
                <View style={style.dateFecha}>
                  <Text style={style.text}>Fecha de Evaluación</Text>
                  <TextInput
                    style={style.input}
                    placeholder="Fecha de Ev."
                    value={user.fechaEval}
                    onChangeText={(text) => handleChange("fechaEval", text)}
                  />
                </View>
                <View style={style.dateFecha}>
                  <Text style={style.text}>Fecha de Nacimiento</Text>
                  <TextInput
                    style={style.input}
                    placeholder="Fecha de Nac."
                    value={user.fechaNac}
                    onChangeText={(text) => handleChange("fechaNac", text)}
                  />
                </View>
              </View>
            </View>

            <View style={style.formRias}>
              <View style={style.containerRias}>
                <Text style={style.containerTextRias}>Puntuación T</Text>
              </View>

              <View style={style.formularioRias}>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>Adivinanza (Ad)</Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt."
                    value={user.adivinanza}
                    onChangeText={(text) => handleChange("Adivinanza", text)}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>Categorías (Ca)</Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt."
                    value={user.categorias}
                    onChangeText={(text) => handleChange("categoria", text)}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Analogías Verbales (An)
                  </Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt."
                    value={user.analogias}
                    onChangeText={(text) => handleChange("analogias", text)}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Figuras Incompletas (Fi)
                  </Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt."
                    value={user.figuras}
                    onChangeText={(text) => handleChange("figuras", text)}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>Memoria Verbal (Mv)</Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt."
                    value={user.verbal}
                    onChangeText={(text) => handleChange("verbal", text)}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Memoria no Verbal (Mnv)
                  </Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt."
                    value={user.no_verbal}
                    onChangeText={(text) => handleChange("no_verbal", text)}
                  />
                </View>

                <View style={style.formDatosRias}>
                  <View style={style.Rias}>
                    <Text style={style.text}>RA. VERBAL</Text>
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Ad."
                      value={user.ad}
                      onChangeText={(text) => handleChange("ad", text)}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ca."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="An."
                      value={user.an}
                      onChangeText={(text) => handleChange("an", text)}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Fi."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mv."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mnv."
                      editable={false}
                      placeholderTextColor="white"
                    />
                  </View>
                  <View style={style.Rias}>
                    <Text style={style.text}>NO VERBAL</Text>
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ad."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Ca."
                      value={user.ca}
                      onChangeText={(text) => handleChange("ca", text)}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="An."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Fi."
                      value={user.fi}
                      onChangeText={(text) => handleChange("fi", text)}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mv."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mnv."
                      editable={false}
                      placeholderTextColor="white"
                    />
                  </View>
                  <View style={style.Rias}>
                    <Text style={style.text}></Text>
                    <TextInput
                      style={style.inputRiasPtColor}
                      editable={false}
                    />
                    <TextInput
                      style={style.inputRiasPtColor}
                      editable={false}
                    />
                    <TextInput
                      style={style.inputRiasPtColor}
                      editable={false}
                    />
                    <TextInput
                      style={style.inputRiasPtColor}
                      editable={false}
                    />
                    <TextInput
                      style={style.inputRiasPtColor}
                      editable={false}
                    />
                    <TextInput
                      style={style.inputRiasPtColor}
                      editable={false}
                    />
                  </View>
                  <View style={style.Rias}>
                    <Text style={style.text}>MEMORIA</Text>
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ad."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ca."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="An."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Fi."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Mv."
                      value={user.mv}
                      onChangeText={(text) => handleChange("mv", text)}
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Mnv."
                      value={user.mvn}
                      onChangeText={(text) => handleChange("mvn", text)}
                    />
                  </View>
                </View>
              </View>

              <View style={style.containerRias}>
                <Text style={style.containerSumaRias}>
                  Suma de Puntuaciones T
                </Text>

                <View style={style.RiasSuma}>
                  <TextInput
                    style={style.inputRiasPtSuma}
                    editable={false}
                    value={user.TotalRv}
                    onChangeText={(text) => handleChange("TotalRv", text)}
                  />
                  <Text style={style.signo}>+</Text>
                  <TextInput
                    style={style.inputRiasPtSuma}
                    editable={false}
                    value={user.TotalNRv}
                    onChangeText={(text) => handleChange("TotalNRv", text)}
                  />
                  <Text style={style.signo}>=</Text>
                  <TextInput
                    style={style.inputRiasPtsSuma}
                    editable={false}
                    value={user.Total}
                    onChangeText={(text) => handleChange("Total", text)}
                  />
                  <TextInput
                    style={style.inputRiasPtSuma}
                    editable={false}
                    value={user.Memoria}
                    onChangeText={(text) => handleChange("Memoria", text)}
                  />
                </View>
              </View>

              <View>
                <Text style={style.containerIndiceRias}>Indíces del RIAS</Text>

                <View style={style.RiasIndice}>
                  <View style={style.formDatosRiasIndice}>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. VERBAL</Text>
                      <TextInput
                        style={style.inputRiasPtIndice}
                        value={user.Indiceverbal}
                        onChangeText={(text) =>
                          handleChange("Indiceverbal", text)
                        }
                      />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. NO VERBAL</Text>
                      <TextInput
                        style={style.inputRiasPtIndice}
                        value={user.IndiceNoverbal}
                        onChangeText={(text) =>
                          handleChange("IndiceNoverbal", text)
                        }
                      />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. GENERAL</Text>
                      <TextInput
                        style={style.inputRiasPtIndice}
                        value={user.IndiceGeneral}
                        onChangeText={(text) =>
                          handleChange("IndiceGeneral", text)
                        }
                      />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. MEMORIA</Text>
                      <TextInput
                        style={style.inputRiasPtIndice}
                        value={user.IndiceMemoria}
                        onChangeText={(text) =>
                          handleChange("IndiiceMemoria", text)
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={style.containerButton}>
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                  <Text style={style.buttonText}>Registrar</Text>
                </TouchableOpacity>
              </View>
              <View>
                {loading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </Layout>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor:'white'
  },
  //containerRias
  containerRias: {
    width: "100%",
  },
  //dateName
  text: {
    fontWeight: "bold",
    padding: 5,
  },
  select: {
    backgroundColor: "#f8f8ff",
  },
  //date
  formDate: {
    alignSelf: "center",
    flexDirection: "row",
  },
  input: {
    width: 180,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    paddingHorizontal: 8,
    margin: 3,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  inputNivel: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    paddingHorizontal: 8,
    margin: 3,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  selectForm: {
    backgroundColor: "#2e8b57",
    width: 185,
    margin: 3,
  },
  //formDatePrincipal
  form: {
    alignSelf: "center",
    flexDirection: "row",
  },
  //formRias
  containerTextRias: {
    backgroundColor: "#2e8b57",
    color: "white",
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 20,
  },
  inputRias: {
    width: "15%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    textAlign: "center",
  },
  formDateRias: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textAdivinanza: {
    alignSelf: "center",
  },
  //Rias
  formDatosRias: {
    flexDirection: "row",
  },
  Rias: {
    margin: 5,
  },
  //RiasVerbal
  textFromRias: {
    fontWeight: "bold",
    textAlign: "center",
  },
  inputRiasPt: {
    width: "60%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    alignSelf: "center",
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    textAlign: "center",
  },
  inputRiasPtColor: {
    backgroundColor: "#2e8b57",
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "center",
  },
  inputRiasPts: {
    backgroundColor: "#2e8b57",
    width: "60%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "center",
  },
  containerSumaRias: {
    backgroundColor: "#9400d3",
    color: "white",
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 20,
  },
  //RiasSuma
  RiasSuma: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignSelf: "center",
  },
  inputRiasPtSuma: {
    width: "20%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    alignSelf: "center",
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    textAlign: "center",
  },
  signo: {
    alignSelf: "center",
  },
  //Suma
  inputRiasPtsSuma: {
    backgroundColor: "#ffb6c1",
    width: "20%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    alignSelf: "center",
    borderRadius: 10,
    textAlign: "center",
  },
  //button
  containerButton: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  //indice
  containerIndiceRias: {
    backgroundColor: "#000080",
    color: "white",
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 20,
  },
  RiasIndice: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignSelf: "center",
  },
  formDatosRiasIndice: {
    flexDirection: "row",
  },
  inputRiasPtIndice: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    textAlign: "center",
  },
  textIndice: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  //selectivelDateSexo
  selectNivel: {
    width: "160%",
    backgroundColor: "#f8f8ff",
  },
  dateSexo: {
    alignSelf: "center",
  },
  formSexo: {
    flexDirection: "row",
  },
  formDateSexo: {
    flexDirection: "row",
  },
});

export default RiasScreen;

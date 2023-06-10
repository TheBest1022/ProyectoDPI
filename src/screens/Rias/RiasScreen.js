import React from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Layout from "../../components/Layout";
import Name from "../../components/Name";
const RiasScreen = () => {
  return (
    <ScrollView>
      <Layout>
        <Name title="REGISTRO DE APRENDIZAJE" />
        <View style={style.container}>
          <View style={style.date}>
            <View style={style.dateName}>
              <Text style={style.text}>Nombre y Apellido</Text>
              <Picker style={style.select}>
                <Picker.Item label="Opción 1" value="opcion1" />
                <Picker.Item label="Opción 2" value="opcion2" />
                <Picker.Item label="Opción 3" value="opcion3" />
              </Picker>
              <Text style={style.text}>Examinador</Text>
              <TextInput style={style.inputNivel} placeholder="Examinador" />
              <View style={style.dateCentro}>
                <Text style={style.text}>Centro</Text>
                <Picker style={style.select}>
                  <Picker.Item label="Opción 1" value="opcion1" />
                  <Picker.Item label="Opción 2" value="opcion2" />
                  <Picker.Item label="Opción 3" value="opcion3" />
                </Picker>
              </View>
            </View>

            <View style={style.formDate}>
              <View style={style.form}>
                <View style={style.dateSexo}>
                  <Text style={style.text}>Sexo</Text>
                  <TextInput style={style.input} placeholder="Sexo" />
                </View>
                <View style={style.dateSexo}>
                  <Text style={style.text}>Nivel Educativo</Text>
                  <TextInput style={style.input} placeholder="Nivel Edu." />
                </View>
              </View>
            </View>

            <View style={style.formDate}>
              <View style={style.form}>
                <View style={style.dateFecha}>
                  <Text style={style.text}>Fecha de Evaluación</Text>
                  <TextInput style={style.input} placeholder="Fecha de Ev." />
                </View>
                <View style={style.dateFecha}>
                  <Text style={style.text}>Fecha de Nacimiento</Text>
                  <TextInput style={style.input} placeholder="Fecha de Nac." />
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
                  <TextInput style={style.inputRias} placeholder="Pt." />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>Categorías (Ca)</Text>
                  <TextInput style={style.inputRias} placeholder="Pt." />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Analogías Verbales (An)
                  </Text>
                  <TextInput style={style.inputRias} placeholder="Pt." />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Figuras Incompletas (Fi)
                  </Text>
                  <TextInput style={style.inputRias} placeholder="Pt." />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>Memoria Verbal (Mv)</Text>
                  <TextInput style={style.inputRias} placeholder="Pt." />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Memoria no Verbal (Mnv)
                  </Text>
                  <TextInput style={style.inputRias} placeholder="Pt." />
                </View>

                <View style={style.formDatosRias}>
                  <View style={style.Rias}>
                    <Text style={style.text}>RA. VERBAL</Text>
                    <TextInput style={style.inputRiasPt} placeholder="Ad." />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ca."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput style={style.inputRiasPt} placeholder="An." />
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
                    <TextInput style={style.inputRiasPt} placeholder="Ca." />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="An."
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput style={style.inputRiasPt} placeholder="Fi." />
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
                    <TextInput style={style.inputRiasPt} placeholder="Mv." />
                    <TextInput style={style.inputRiasPt} placeholder="Mnv." />
                  </View>
                </View>
              </View>

              <View style={style.containerRias}>
                <Text style={style.containerSumaRias}>
                  Suma de Puntuaciones T
                </Text>

                <View style={style.RiasSuma}>
                  <TextInput style={style.inputRiasPtSuma} editable={false} />
                  <Text style={style.signo}>+</Text>
                  <TextInput style={style.inputRiasPtSuma} editable={false} />
                  <Text style={style.signo}>=</Text>
                  <TextInput style={style.inputRiasPtsSuma} editable={false} />
                  <TextInput style={style.inputRiasPtSuma} editable={false} />
                </View>
              </View>

              <View>
                <Text style={style.containerIndiceRias}>Indíces del RIAS</Text>

                <View style={style.RiasIndice}>
                  <View style={style.formDatosRiasIndice}>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. VERBAL</Text>
                      <TextInput style={style.inputRiasPtIndice} />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. NO VERBAL</Text>
                      <TextInput style={style.inputRiasPtIndice} />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. GENERAL</Text>
                      <TextInput style={style.inputRiasPtIndice} />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. MEMORIA</Text>
                      <TextInput style={style.inputRiasPtIndice} />
                    </View>
                  </View>
                </View>

              </View>

              <View style={style.containerButton}>
                <TouchableOpacity style={style.button}>
                  <Text style={style.buttonText}>Registrar</Text>
                </TouchableOpacity>
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
    borderRadius: 10
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
    borderRadius: 20
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
    textAlign:'center'
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
    textAlign:'center'
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
    textAlign:'center'
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
    textAlign:'center'
  },
  containerSumaRias: {
    backgroundColor: "#9400d3",
    color: "white",
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 20
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
    textAlign:'center'
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
    textAlign:'center'
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
    borderRadius: 20
  },
  RiasIndice:{
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignSelf: "center",
  },
  formDatosRiasIndice:{
    flexDirection: "row",
  },
  inputRiasPtIndice:{
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    margin: 3,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    textAlign:'center'
  },
  textIndice:{
    fontWeight: "bold",
    textAlign: "center",
    fontSize:14
  },
});

export default RiasScreen;

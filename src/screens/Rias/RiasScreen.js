import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useGlobal } from "../../context/GlobalProvider";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/Layout";
import Name from "../../components/Name";
import DateTimePicker from "@react-native-community/datetimepicker";

let data = [
  {
    id: "Inicial",
    nivel: "Inicial",
  },
  {
    id: "Primaria",
    nivel: "Primaria",
  },
  {
    id: "Secundaria",
    nivel: "Secundaria",
  },
];

let sexo = [
  {
    id: "Masculino",
    nivel: "Masculino",
  },
  {
    id: "Femenino",
    nivel: "Femenino",
  },
];

const RiasScreen = () => {
  //Navegacion
  const navigation = useNavigation();
  //Provaider
  const {
    insertRias,
    company,
    obtenerEscuela,
    getStudents,
    student,
    auth,
    getPsicologo,
    psicologo,
  } = useGlobal();
  //stattus
  const [filter, setFilter] = useState("");
  const [filterpsicologo, setFilterpsicologo] = useState("");
  const [filterApoderado, setFilterApoderado] = useState("");
  const [filterDegree, setFilterDegree] = useState("");
  const [filterSexo, setFilterSexo] = useState("");
  const [loading, setLoading] = useState(false);
  const [fechaEval, setFechaEval] = useState(new Date());
  const [fechaNac, setFechaNac] = useState(new Date());
  const [showFechaEvalPicker, setShowFechaEvalPicker] = useState(false);
  const [showFechaNacPicker, setShowFechaNacPicker] = useState(false);
  //Date
  const handleFechaEvalChange = (event, selectedDate) => {
    setShowFechaEvalPicker(false);
    if (selectedDate) {
      setFechaEval(selectedDate);
      const fechaEvalStr = formatDate(selectedDate); // Convertir fechaEval a cadena en formato "yyyy-mm-dd"
      setUser((prevUser) => ({ ...prevUser, fechaEval: fechaEvalStr }));
    }
  };
  const handleFechaNacChange = (event, selectedDate) => {
    setShowFechaNacPicker(false);
    if (selectedDate) {
      setFechaNac(selectedDate);
      const fechaNacStr = formatDate(selectedDate); // Convertir fechaNac a cadena en formato "yyyy-mm-dd"
      setUser((prevUser) => ({ ...prevUser, fechaNac: fechaNacStr }));
    }
  };
  const showFechaEvalDatePicker = () => {
    setShowFechaEvalPicker(true);
  };
  const showFechaNacDatePicker = () => {
    setShowFechaNacPicker(true);
  };
  //Funciones
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
    IndiceMemoria: ""
  });
  const handleSubmit = async () => {
    setLoading(true);
    const fechaEvalStr = formatDate(fechaEval); // Convertir fechaEval a cadena en formato "yyyy-mm-dd"
    const fechaNacStr = formatDate(fechaNac); // Convertir fechaNac a cadena en formato "yyyy-mm-dd"
    user.fechaEval = fechaEvalStr;
    user.fechaNac = fechaNacStr;
    if (
      user.adivinanza === "" ||
      user.categorias === "" ||
      user.analogias === "" ||
      user.figuras === "" ||
      user.verbal === "" ||
      user.no_verbal === "" ||
      user.ad === "" ||
      user.an === "" ||
      user.ca === "" ||
      user.fi === "" ||
      user.mv === "" ||
      user.mvn === "" ||
      user.Indiceverbal === "" ||
      user.IndiceNoverbal === "" ||
      user.IndiceGeneral === "" ||
      user.IndiceMemoria === ""
    ) {
      setLoading(false);
      Alert.alert("Existen campos vacíos");
      return;
    }
    user.empresa = filter;
    user.apoderado = filterApoderado;
    user.nivel = filterDegree;
    user.sexo = filterSexo;
    user.nombre = filterpsicologo;
    user.TotalRv = parseInt(user.ad) + parseInt(user.an);
    user.TotalNRv = parseInt(user.ca) + parseInt(user.fi);
    user.Total = parseInt(user.TotalRv) + parseInt(user.TotalNRv);
    user.Memoria = parseInt(user.mv) + parseInt(user.mvn);
    try {
      const { status, data } = await insertRias(user);
      if (status == 201) {
        Alert.alert(data.message);
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
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleChange = (name, value) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  let filterCompany =
    company.length != 0 &&
    company.filter((item) => auth.id_empresa === item.id);
  //useEffect
  useEffect(() => {
    obtenerEscuela();
  }, []);
  useEffect(() => {
    getStudents(auth.id_empresa);
  }, []);
  useEffect(() => {
    getPsicologo(auth.id_empresa);
  }, []);

  return (
    <ScrollView>
      <Layout>
        <Name title="REGISTRO DE APRENDIZAJE" />
        <View style={style.container}>
          <View style={style.date}>
            <View style={style.dateName}>
              <Text style={style.text}>
                Nombre y Apellido <Text style={style.obligatorio}>*</Text>
              </Text>
              <Picker
                selectedValue={filterApoderado}
                onValueChange={(itemValue) => setFilterApoderado(itemValue)}
                style={style.select}
              >
                <Picker.Item label="-- Seleccionar --" value="" />
                {student.map((item) => (
                  <Picker.Item
                    key={item.id}
                    label={item.name}
                    value={item.id}
                  />
                ))}
              </Picker>
              <Text style={style.text}>
                Examinador <Text style={style.obligatorio}>*</Text>
              </Text>
              <Picker
                selectedValue={filterpsicologo}
                onValueChange={(itemValue) => setFilterpsicologo(itemValue)}
                style={style.select}
              >
                <Picker.Item label="-- Seleccionar --" value="" />
                {psicologo &&
                  psicologo.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
              </Picker>
              <View style={style.dateCentro}>
                <Text style={style.text}>
                  Centro Educativo <Text style={style.obligatorio}>*</Text>
                </Text>
                <Picker
                  style={style.select}
                  selectedValue={filter}
                  onValueChange={(itemValue) => setFilter(itemValue)}
                >
                  <Picker.Item label="-- Seleccionar --" value="" />
                  {filterCompany &&
                    filterCompany.map((item) => (
                      <Picker.Item
                        key={item.id}
                        label={item.nombre}
                        value={item.id}
                      />
                    ))}
                </Picker>
              </View>
            </View>

            <View style={style.formDate}>
              <View style={style.form}>
                <View style={style.item}>
                  <Text style={style.text}>
                    Sexo <Text style={style.obligatorio}>*</Text>
                  </Text>
                  <Picker
                    style={style.selectItem}
                    selectedValue={filterSexo}
                    onValueChange={(itemValue) => setFilterSexo(itemValue)}
                  >
                    <Picker.Item label="-- Sexo --" value="" />
                    {sexo.map((item) => (
                      <Picker.Item
                        key={item.id}
                        label={item.nivel}
                        value={item.id}
                      />
                    ))}
                  </Picker>
                </View>
                <View style={style.item}>
                  <Text style={style.text}>
                    Nivel Educativo <Text style={style.obligatorio}>*</Text>
                  </Text>
                  <Picker
                    style={style.selectItem}
                    selectedValue={filterDegree}
                    onValueChange={(itemValue) => setFilterDegree(itemValue)}
                  >
                    <Picker.Item label="-- Nivel --" value="" />
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
                  <Text style={style.textFecha}>
                    Fecha de Evaluación <Text style={style.obligatorio}>*</Text>
                  </Text>
                  <TouchableOpacity onPress={showFechaEvalDatePicker}>
                    <TextInput
                      value={fechaEval ? fechaEval.toDateString() : ""}
                      editable={false}
                    />
                  </TouchableOpacity>
                  {showFechaEvalPicker && (
                    <DateTimePicker
                      value={fechaEval ? fechaEval : new Date()}
                      mode="date"
                      placeholder="Fecha de Ev."
                      onChange={handleFechaEvalChange}
                      format="YYYY-MM-DD"
                    />
                  )}
                </View>
                <View style={style.dateFecha}>
                  <Text style={style.textFecha}>
                    Fecha de Nacimiento <Text style={style.obligatorio}>*</Text>
                  </Text>
                  <TouchableOpacity onPress={showFechaNacDatePicker}>
                    <TextInput
                      value={fechaNac ? fechaNac.toDateString() : ""}
                      editable={false}
                    />
                  </TouchableOpacity>
                  {showFechaNacPicker && (
                    <DateTimePicker
                      value={fechaNac ? fechaNac : new Date()}
                      mode="date"
                      placeholder="Fecha de Nac."
                      onChange={handleFechaNacChange}
                      format="YYYY-MM-DD"
                    />
                  )}
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
                    placeholder="Pt"
                    value={user.adivinanza}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("adivinanza", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>Categorías (Ca)</Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt"
                    value={user.categorias}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("categorias", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Analogías Verbales (An)
                  </Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt"
                    value={user.analogias}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("analogias", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Figuras Incompletas (Fi)
                  </Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt"
                    value={user.figuras}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("figuras", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>Memoria Verbal (Mv)</Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt"
                    value={user.verbal}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("verbal", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
                <View style={style.formDateRias}>
                  <Text style={style.textAdivinanza}>
                    Memoria no Verbal (Mnv)
                  </Text>
                  <TextInput
                    style={style.inputRias}
                    placeholder="Pt"
                    value={user.no_verbal}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("no_verbal", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>

                <View style={style.formDatosRias}>
                  <View style={style.Rias}>
                    <Text style={style.text}>RA. VERBAL</Text>
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Ad"
                      value={user.ad}
                      onChangeText={(text) => {
                        // Remover caracteres no numéricos
                        const numericText = text.replace(/[^0-9]/g, "");

                        // Limitar a dos dígitos
                        const truncatedText = numericText.slice(0, 3);

                        // Actualizar el estado con el valor filtrado
                        handleChange("ad", truncatedText);
                      }}
                      keyboardType="numeric"
                      maxLength={3}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ca"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="An"
                      value={user.an}
                      onChangeText={(text) => {
                        // Remover caracteres no numéricos
                        const numericText = text.replace(/[^0-9]/g, "");

                        // Limitar a dos dígitos
                        const truncatedText = numericText.slice(0, 3);

                        // Actualizar el estado con el valor filtrado
                        handleChange("an", truncatedText);
                      }}
                      keyboardType="numeric"
                      maxLength={3}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Fi"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mv"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mnv"
                      editable={false}
                      placeholderTextColor="white"
                    />
                  </View>
                  <View style={style.Rias}>
                    <Text style={style.text}>NO VERBAL</Text>
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ad"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Ca"
                      value={user.ca}
                      onChangeText={(text) => {
                        // Remover caracteres no numéricos
                        const numericText = text.replace(/[^0-9]/g, "");

                        // Limitar a dos dígitos
                        const truncatedText = numericText.slice(0, 3);

                        // Actualizar el estado con el valor filtrado
                        handleChange("ca", truncatedText);
                      }}
                      keyboardType="numeric"
                      maxLength={3}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="An"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Fi"
                      value={user.fi}
                      onChangeText={(text) => {
                        // Remover caracteres no numéricos
                        const numericText = text.replace(/[^0-9]/g, "");

                        // Limitar a dos dígitos
                        const truncatedText = numericText.slice(0, 3);

                        // Actualizar el estado con el valor filtrado
                        handleChange("fi", truncatedText);
                      }}
                      keyboardType="numeric"
                      maxLength={3}
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mv"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Mnv"
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
                      placeholder="Ad"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Ca"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="An"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPts}
                      placeholder="Fi"
                      editable={false}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Mv"
                      value={user.mv}
                      onChangeText={(text) => {
                        // Remover caracteres no numéricos
                        const numericText = text.replace(/[^0-9]/g, "");

                        // Limitar a dos dígitos
                        const truncatedText = numericText.slice(0, 3);

                        // Actualizar el estado con el valor filtrado
                        handleChange("mv", truncatedText);
                      }}
                      keyboardType="numeric"
                      maxLength={3}
                    />
                    <TextInput
                      style={style.inputRiasPt}
                      placeholder="Mnv"
                      value={user.mvn}
                      onChangeText={(text) => {
                        // Remover caracteres no numéricos
                        const numericText = text.replace(/[^0-9]/g, "");

                        // Limitar a dos dígitos
                        const truncatedText = numericText.slice(0, 3);

                        // Actualizar el estado con el valor filtrado
                        handleChange("mvn", truncatedText);
                      }}
                      keyboardType="numeric"
                      maxLength={3}
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
                    value={`${
                      user.ad == "" || user.an == ""
                        ? ""
                        : parseInt(user.ad) + parseInt(user.an)
                    }`}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("TotalRv", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                  <Text style={style.signo}>+</Text>
                  <TextInput
                    style={style.inputRiasPtSuma}
                    editable={false}
                    value={`${
                      user.ca == "" || user.fi == ""
                        ? ""
                        : parseInt(user.ca) + parseInt(user.fi)
                    }`}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("TotalNRv", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                  <Text style={style.signo}>=</Text>
                  <TextInput
                    style={style.inputRiasPtsSuma}
                    editable={false}
                    value={`${
                      user.ad == "" ||
                      user.an == "" ||
                      user.ca == "" ||
                      user.fi == ""
                        ? ""
                        : parseInt(user.ad) +
                          parseInt(user.an) +
                          (parseInt(user.ca) + parseInt(user.fi))
                    }`}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("Total", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={2}
                  />
                  <TextInput
                    style={style.inputRiasPtSuma}
                    editable={false}
                    value={`${
                      user.mv == "" || user.mvn == ""
                        ? ""
                        : parseInt(user.mv) + parseInt(user.mvn)
                    }`}
                    onChangeText={(text) => {
                      // Remover caracteres no numéricos
                      const numericText = text.replace(/[^0-9]/g, "");

                      // Limitar a dos dígitos
                      const truncatedText = numericText.slice(0, 3);

                      // Actualizar el estado con el valor filtrado
                      handleChange("Memoria", truncatedText);
                    }}
                    keyboardType="numeric"
                    maxLength={2}
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
                        onChangeText={(text) => {
                          // Remover caracteres no numéricos
                          const numericText = text.replace(/[^0-9]/g, "");

                          // Limitar a dos dígitos
                          const truncatedText = numericText.slice(0, 3);

                          // Actualizar el estado con el valor filtrado
                          handleChange("Indiceverbal", truncatedText);
                        }}
                        keyboardType="numeric"
                        maxLength={3}
                      />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. NO VERBAL</Text>
                      <TextInput
                        style={style.inputRiasPtIndice}
                        value={user.IndiceNoverbal}
                        onChangeText={(text) => {
                          // Remover caracteres no numéricos
                          const numericText = text.replace(/[^0-9]/g, "");

                          // Limitar a dos dígitos
                          const truncatedText = numericText.slice(0, 3);

                          // Actualizar el estado con el valor filtrado
                          handleChange("IndiceNoverbal", truncatedText);
                        }}
                        keyboardType="numeric"
                        maxLength={3}
                      />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. GENERAL</Text>
                      <TextInput
                        style={style.inputRiasPtIndice}
                        value={user.IndiceGeneral}
                        onChangeText={(text) => {
                          // Remover caracteres no numéricos
                          const numericText = text.replace(/[^0-9]/g, "");

                          // Limitar a dos dígitos
                          const truncatedText = numericText.slice(0, 3);

                          // Actualizar el estado con el valor filtrado
                          handleChange("IndiceGeneral", truncatedText);
                        }}
                        keyboardType="numeric"
                        maxLength={3}
                      />
                    </View>
                    <View style={style.Rias}>
                      <Text style={style.textIndice}>I. MEMORIA</Text>
                      <TextInput
                        style={style.inputRiasPtIndice}
                        value={user.IndiceMemoria}
                        onChangeText={(text) => {
                          // Remover caracteres no numéricos
                          const numericText = text.replace(/[^0-9]/g, "");

                          // Limitar a dos dígitos
                          const truncatedText = numericText.slice(0, 3);

                          // Actualizar el estado con el valor filtrado
                          handleChange("IndiceMemoria", truncatedText);
                        }}
                        keyboardType="numeric"
                        maxLength={3}
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
    backgroundColor: "white",
  },
  //containerRias
  containerRias: {
    width: "100%",
  },
  //dateName
  text: {
    fontWeight: "bold",
    padding: 5,
    color: "navy",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
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
    color: "black",
    fontWeight: "bold",
  },
  textIndice: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  //selectivelDateSexo
  selectItem: {
    width: "100%",
    backgroundColor: "#f8f8ff",
    justifyContent: "space-between",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    margin: 10,
  },
  //obligatorio
  obligatorio: {
    color: "red",
  },
  dateFecha: {
    textAlign: "center",
    flex: 1,
    margin: 5,
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "navy",
    padding: 15,
  },
  textFecha: {
    fontWeight: "bold",
    color: "navy",
    fontSize: 12,
    paddingBottom: 5,
  },
});

export default RiasScreen;

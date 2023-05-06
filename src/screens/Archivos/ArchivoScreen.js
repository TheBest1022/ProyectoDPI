import React from "react";
import Layout from "../../components/Layout";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Name from "../../components/General";
import atras from "../../../assets/atras.png";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const ArchivoScreen = () => {
  const navigation = useNavigation();
  const handlepost = () => {
    navigation.navigate("seccionhumano");
  };
  const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
  ];

  const renderItem = ({ item }) => (
    <View style={style.row}>
      <Text style={style.cell}>{item.id}</Text>
      <Text style={style.cell}>{item.name}</Text>
      <Text style={style.cell}>
        <AntDesign name="delete" size={22} color="red" />
      </Text>
    </View>
  );

  return (
    <Layout>
      <View style={style.container}>
        <Name />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={style.table}
        />

        <View style={style.contendor}>
          <TouchableOpacity onPress={handlepost}>
            <ImageBackground source={atras} style={style.btn}></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#f0f8ff",
    paddingBottom: 15,
  },
  contendor: {
    flexDirection: "row",
    alignSelf: "center",
  },
  btn: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 5,
    marginTop: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});

export default ArchivoScreen;

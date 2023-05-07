import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ChekComponent = ({ label, checked , onPress }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.checkBoxContainer} onPress={onPress}>
        <Ionicons
          name={checked ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={checked ? "blue" : "gray"}
        />
        <Text style={style.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft:20
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width:350,
    marginTop:5,
    marginBottom:5
  },
  label: {
    marginLeft:10,
    fontSize:12,
    alignSelf: "center",
  },
});

export default ChekComponent;

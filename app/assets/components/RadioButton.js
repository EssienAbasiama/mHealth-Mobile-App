// RadioButton.js
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({ selected }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <View
        style={[styles.radioButton, selected && styles.radioButtonSelected]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButton: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  radioButtonSelected: {
    backgroundColor: "#000",
  },
});

export default RadioButton;

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WhiteButtonCom(props) {
  return (
    <View style={tempStyles.screenStyle}>
      <TouchableOpacity
        disabled={props.disable}
        onPress={props.getPress}
        style={tempStyles.buttonStyle}
      >
        <Text style={tempStyles.buttonText}>{props.getLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const tempStyles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 200,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "white",
  },
  buttonText: {
    color: "#68D7D4",
    fontSize: 18,
    alignItems: "center",
  },
  screenStyle: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
});

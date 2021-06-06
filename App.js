import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/Loading";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";

import { AuthProvider } from "./src/components/Auth/context";
import AppNavigator from "./src/components/navigation/AppNavigator";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

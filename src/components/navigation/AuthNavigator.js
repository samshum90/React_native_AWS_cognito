import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";

const Stack = createStackNavigator();

const AuthNavigator = ({ isSignout }) => (
  <Stack.Navigator initialRouteName="SignIn" headerMode="none">
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        title: "Sign in",
        animationTypeForReplace: isSignout ? "pop" : "push",
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

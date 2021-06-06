import React, { useState } from "react";
import { Auth } from "aws-amplify";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { SignUpLink } from "../SignUp";
import { styles } from "../../styles/generalStyleSheet";
// import { PasswordForgetLink } from "../PasswordForget";
import HomeButtonCom from "../../components/homeButtonCom";
import { useAuthDispatch } from "../../components/Auth/context";
import WhiteButtonCom from "../../components/whiteButtonCom";
import { signIn } from "../../services/authService";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>SignIn</Text>
        <SignInForm />
        {/* <PasswordForgetLink /> */}
        <SignUpLink navigation={navigation} />
      </View>
    </View>
  );
};

function SignInFormBase() {
  const dispatch = useAuthDispatch();
  const [signInLoading, setSignInLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInUser = async () => {
    setSignInLoading(true);
    signIn(email, password)
      .then((r) => {
        console.log(r);
        dispatch({
          type: "SIGN_IN",
          token: r.signInUserSession.accessToken.jwtToken,
        });
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => setSignInLoading(false));
  };

  const isInvalid = password === "" || email === "";

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Enter your password"
        autoCapitalize="none"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <WhiteButtonCom
        getLabel={"Sign In"}
        getPress={signInUser}
        disable={isInvalid}
      />
      <Text style={styles.error}>{error && <Text>{error.message}</Text>}</Text>
    </>
  );
}

const SignInLink = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.link}>
        Have an account?
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text>Sign in!</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const SignInForm = SignInFormBase;

export default SignIn;
export { SignInForm, SignInLink };

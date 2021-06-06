import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";

import { Auth } from "aws-amplify";
import { styles } from "../../styles/conStyleSheet";

import { signIn, signUp, confirmSignUp } from "../../services/authService";
import { useAuthDispatch } from "../../components/Auth/context";
import WhiteButtonCom from "../../components/whiteButtonCom";
import { SignInLink } from "../SignIn/index";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Sign Up</Text>
        <SignUpForm />
        <SignInLink navigation={navigation} />
      </View>
    </View>
  );
};

const SignUpFormBase = () => {
  const dispatch = useAuthDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState("");
  const [signed, setSigned] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [code, setCode] = useState("");

  const signUpUser = () => {
    setSignUpLoading(true);
    signUp(email, passwordOne, name)
      .then((data) => {
        console.log(data);
        setSigned(true);
        setSignUpLoading(false);
      })
      .catch((err) => {
        setSignUpLoading(false);
        console.log(err);
        setError(err);
      });
  };

  const confirm = () => {
    setVerifyLoading(true);
    confirmSignUp(email, code)
      .then((r) => {
        setVerifyLoading(false);
        signIn(email, passwordOne).then(() =>
          dispatch({
            type: "SIGN_IN",
            token: "dummy-auth-token",
          })
        );
      })
      .catch((err) => {
        setVerifyLoading(false);
        console.log(err);
        setError(err);
      });
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    name === "";

  return (
    <View>
      {!signed && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={(value) => setName(value)}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={passwordOne}
            onChangeText={(value) => setPasswordOne(value)}
            secureTextEntry
            keyboardType="default"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            value={passwordTwo}
            onChangeText={(value) => setPasswordTwo(value)}
            secureTextEntry
            keyboardType="default"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
          />

          <WhiteButtonCom
            getLabel={"Register"}
            getPress={signUpUser}
            disable={isInvalid}
          />
          <Text style={styles.error}>
            {error && <Text>{error.message}</Text>}
          </Text>
        </>
      )}
      {signed && (
        <>
          <TextInput
            placeholder="Verification code"
            value={code}
            onChangeText={(value) => setCode(value)}
            keyboardType="default"
            autoCapitalize="none"
          />
          <WhiteButtonCom
            getLabel={"Verify"}
            getPress={confirm}
            disable={isInvalid}
          />
        </>
      )}
    </View>
  );
};

const SignUpLink = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.link}>Don't have an account</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Sign up!</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignUpForm = SignUpFormBase;

export default SignUp;
export { SignUpForm, SignUpLink };

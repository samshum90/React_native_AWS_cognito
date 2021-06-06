import * as React from "react";
import { View, Button, Text } from "react-native";
import { useAuthDispatch } from "../components/Auth/context";
import { signOut } from "../services/authService";

import { styles } from "../styles/generalStyleSheet";
function Home() {
  const dispatch = useAuthDispatch();

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch({ type: "SIGN_OUT" });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title="Log Out" onPress={handleSignOut} />
    </View>
  );
}

export default Home;

import React from "react";

import * as SecureStore from "expo-secure-store";

import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "../../application/Common/Globals";

export default function Settings({ navigation }) {
  function SignOut() {
    try {
      SecureStore.deleteItemAsync("token");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container flex={1} safeArea>
      <MaterialIcons
        name="keyboard-backspace"
        size={20}
        color="#000"
        style={styles.header}
        onPress={() => navigation.goBack()}
      />
    <Text h1 center>Settings</Text>

    <Text
        h3
        color={'red'}
        touchable
        onPress={() => {
          SignOut();
          navigation.goBack();
        }}
      >
        Sign Out
      </Text>
    </Container>
  );
}

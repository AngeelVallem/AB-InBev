import React, {useState} from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components";


import { login } from "../../../infrastructure/Api/Services";

//Custom Components
import Text from "../../../infrastructure/Components/Text";
import Button from "../../../infrastructure/Components/Button";

const CustomInput = styled.TextInput`
borderRadius : 50px
margin: 12px
padding : 25px
backgroundColor : #F5F5F5
`;

//Component for Login

export function SignInForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <CustomInput
        placeholder={"Email"}
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder={"password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        text={"Sign In"}
        onPress={() => {
          if (email === "" || password === "") {
            return alert("Llene los campos vacios");
          }
          login(
            "https://conduit.productionready.io/api/users/login",
            {
              user: { email, password },
            },
            navigation,
            "Home",
            "successful login"
          );
        }}
      />

      <Text
        h4
        touchable
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        You dont have an account? Register
      </Text>
    </KeyboardAvoidingView>
  );
}

//Component for register

export function SignUpForm({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <CustomInput
        placeholder={"Username"}
        value={username}
        onChangeText={setUsername}
      />
      <CustomInput
        placeholder={"Email"}
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder={"password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        text={"Sign In"}
        shadow
        onPress={() => {
          if (email === "" || password === "") {
            return alert("Llene los campos vacios");
          }

          login(
            "https://conduit.productionready.io/api/users",
            {
              user: { username, email, password },},
            navigation,
            "Home",
            "successful Register"
          );
          
        }}
      />
      <Text
        h4
        touchable
        onPress={() => {
          navigation.goBack();
        }}
      >
        You already have an account? Login
      </Text>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components";
import * as SecureStore from "expo-secure-store";

import { login, currentUser } from "../../../infrastructure/Api/Login";

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

export function SignInForm() {
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
          login("https://conduit.productionready.io/api/users/login", {
            user: { email, password },
          });
        }}
      />
      <Text h5>
        You dont have an account? <Text h4>Register</Text>
      </Text>
    </KeyboardAvoidingView>
  );
}

//Component for register

export function SignUpForm() {
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
          console.log({ username, email, password });
          setEmail("");
          setPassword("");
        }}
      />
      <Text h5>
        You dont have an account? <Text h4>Register</Text>
      </Text>
    </>
  );
}

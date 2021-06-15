import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components";

import { register } from "../../../infrastructure/Api/Services";

//Custom Components
import Text from "../../../infrastructure/Components/Text";
import Button from "../../../infrastructure/Components/Button";

const CustomInput = styled.TextInput`
borderRadius : 50px
margin: 12px
padding : 25px
backgroundColor : #F5F5F5
`;

export default function Form({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const handleSubmit = () => {
	if(username === ""  ||  email === ""  || password === ""){
		return false
	}
	if(password.length <= 8 ){
		return Toast.show({
			type: "error",
			text1: "ERROR",
			text2: 'password is too short minimum is 8 characters',
			position: "top",
		      });
	}
	register({user : {username,email,password}},navigation)
}


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <CustomInput
        placeholder="Username"
	placeholder='eg. Hackerman8080'
        value={username}
        onChangeText={setUsername}
      />
      <CustomInput
        placeholder="Email"
	placeholder='eg. hackerman@hacker.com'
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder="password"
	maxLength={72}
	minLength={8}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        text={"Sign Up"}
        onPress={handleSubmit}
      />

      <Text
        h4
        touchable
        onPress={() => {
          navigation.goBack()
        }}
      >
        You already have an account? Login
      </Text>
    </KeyboardAvoidingView>
  );
}

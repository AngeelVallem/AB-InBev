import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import styled from "styled-components";
import Toast from "react-native-toast-message";

import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import Button from "../../infrastructure/Components/Button";
import getCurrentUser from "../../infrastructure/Api/getCurrentUser";
import { putMethod } from "../../infrastructure/Api/Services";

const CustomInput = styled.TextInput`
borderRadius : 50px
margin: 12px
padding : 25px
backgroundColor : #F5F5F9
width : 300px
`;

export default function EditProfile({ navigation }) {
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getCurrentUser().then(({ email, bio, image }) => {
      setEmail(email);
      setBio(bio);
      setImage(image)
    });
  }, []);

  return (
    <Container flex={1} safeArea justifyCenter={true} alignCenter={true}>
      <CustomInput value={email} onChangeText={setEmail} />
      <CustomInput value={bio} onChangeText={setBio} />
      <CustomInput value={image} onChangeText={setImage} />
      <Button
        text="Save"
        onPress={() => {
          putMethod("https://conduit.productionready.io/api/user", {
            user: {
              email,
              bio,
              image},
          });
setTimeout(()=>{
  navigation.goBack()
  Toast.show({
    type : 'success',
    text1: 'Profile edited succesfully',
  });
},300)
        }}
      />
    </Container>
  );
}

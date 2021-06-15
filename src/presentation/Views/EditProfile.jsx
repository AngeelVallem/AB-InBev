import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import Container from "../../infrastructure/Components/Container";
import Input from "../../infrastructure/Components/Input";
import Text from "../../infrastructure/Components/Text";
import Button from "../../infrastructure/Components/Button";
import { getCurrentUser } from "../../infrastructure/Api/Services";
import { putMethod } from "../../infrastructure/Api/Services";

export default function EditProfile({ route, navigation }) {
  const [username, setUsername] = useState(route.params.username);
  const [email, setEmail] = useState(route.params.email);
  const [bio, setBio] = useState(route.params.bio);
  const [image, setImage] = useState(route.params.image);

  const handleSubmit = () => {
    putMethod("https://conduit.productionready.io/api/user", {
      user: {
        email,
        bio,
        image,
      },
    });
    setTimeout(() => {
      navigation.goBack();
      Toast.show({
        type: "success",
        text1: "Profile edited succesfully",
      });
    }, 300);
  };

  return (
    <Container flex={1} safeArea justifyCenter={true} alignCenter={true}>
      <Text>Username</Text>
      <Input value={username} onChangeText={setUsername} w />
      <Text>Email</Text>
      <Input value={email} onChangeText={setEmail} w />
      <Text>Description</Text>
      <Input value={bio} onChangeText={setBio} w />
      <Text>Image url</Text>
      <Input value={image} onChangeText={setImage} w />
      <Button text="Save" onPress={handleSubmit}/>
    </Container>
  );
}

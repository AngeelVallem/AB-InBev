import React, { useState } from "react";

import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { putMethod } from "../../infrastructure/Api/Services";

import Container from "../../infrastructure/Components/Container";
import Button from "../../infrastructure/Components/Button";
import Text from "../../infrastructure/Components/Text";
import Input from "../../infrastructure/Components/Input";

export default function EditArticle({ route, navigation }) {
  const { title, description, body, slug } = route.params;

  const [titletoUpdate, setTitletoUpdate] = useState(title);
  const [descriptionToUpdate, setDescriptionToUpdate] = useState(description);
  const [bodyToUpdate, setBodyToUpdate] = useState(body);

  const handleSubmit = () => {
    putMethod(`https://conduit.productionready.io/api/articles/${slug}`, {
      article: {
        title: titletoUpdate,
        description: descriptionToUpdate,
        body: bodyToUpdate,
      },
    });
    setTimeout(() => {
      navigation.goBack();
    }, 400);
  };

  return (
    <Container flex={1} safeArea>
        <MaterialIcons
          name="keyboard-backspace"
          size={20}
          color="#000"
          style={{ marginLeft: 30 }}
          onPress={() => navigation.goBack()}
        />
      <Container flex={1} safeArea align='center' justify='center'>
      <Text>Article Title</Text>
      <Input value={titletoUpdate} onChangeText={setTitletoUpdate} w />
      <Text>Article Descrition</Text>
      <Input value={descriptionToUpdate} onChangeText={setDescriptionToUpdate} w />
      <Text>Article Body</Text>
      <Input value={bodyToUpdate} onChangeText={setBodyToUpdate} w />
      <Button text="Save" onPress={handleSubmit}/>
    </Container>
    </Container>
  );
}

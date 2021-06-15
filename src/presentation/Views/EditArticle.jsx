import React, { useState } from "react";

import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "../../application/Common/Globals";

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
      <Container style={(styles.header, { marginVertical: 30 })}>
        <MaterialIcons
          name="keyboard-backspace"
          size={20}
          color="#000"
          style={{ marginLeft: 30 }}
          onPress={() => navigation.goBack()}
        />
        <Text center h3>
          Edit Profile 🖋
        </Text>
      </Container>
      <Container>
        <Text>Title</Text>
        <Input onChangeText={setTitletoUpdate} value={titletoUpdate} />
      </Container>
      <Container>
        <Text>Description</Text>
        <Input
          onChangeText={setDescriptionToUpdate}
          value={descriptionToUpdate}
        />
      </Container>
      <Container>
        <Text>Body</Text>
        <Input onChangeText={setBodyToUpdate} value={bodyToUpdate} />
      </Container>
      <Button text="Save Changes" onPress={handleSubmit} />
    </Container>
  );
}

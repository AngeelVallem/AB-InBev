import React, { useState } from "react";
import { Keyboard } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { postMethod } from "../../infrastructure/Api/Services";

import myMarkDown from "../../application/UseCases/myMarkDown";

import Container from "../../infrastructure/Components/Container";
import Input from "../../infrastructure/Components/Input";
import Text from "../../infrastructure/Components/Text";
import Modal from "../Components/CreateArticle/Modal";
import { colors, styles } from "../../application/Common/Globals";

export default function CreateArticle({ navigation }) {
  const [text, SetText] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    postMethod(
      "https://conduit.productionready.io/api/articles",
      myMarkDown(text),
      navigation,
      "Home",
      "Article posted"
    );
  };

  return (
    <Container safeArea color={colors.bannersColor} flex={1}>
      <Container
        flex={1}
        style={styles.header}
        align="center"
        direction="row"
        justify="space-around"
      >
        <Text h3 touchable onPress={() => navigation.goBack()}>
          Close
        </Text>
        <MaterialCommunityIcons
          name="information"
          color={"#000"}
          size={30}
          onPress={() => {
            Keyboard.dismiss()
            setVisible(true);
          }}
        />
        <Text h3 touchable onPress={handleSubmit}>
          Send
        </Text>
      </Container>
      <Container flex={10} color="#fff" style={styles.inputMarkDown}>
        <Input
          textArea
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={50}
          multiline={true}
          value={text}
          onChangeText={SetText}
        />
      </Container>
      <Modal isVisible={visible} setIsVisible={setVisible} />
    </Container>
  );
}

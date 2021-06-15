import React, { useState } from "react";

import { postMethod } from "../../infrastructure/Api/Services";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

import Container from "../../infrastructure/Components/Container";
import Input from "../../infrastructure/Components/Input";
import Text from "../../infrastructure/Components/Text";

function myMarkDown(str, navigation) {
  const types = str.split(",");
  let article = {};
  types.forEach((type) => {
    const word = type.trim();
    if (word.match(/#[^“]*#/g)) {
      const title = word.replace(/[#]/g, "");
      article = { title };
    } else if (word.match(/:[^“]*:/g)) {
      const description = word.replace(/[:]/g, "");
      article = { ...article, description };
    } else if (word.match(/<[^“]*>/g)) {
      const body = word.replace(/[<>]/g, "");
      article = { ...article, body };
    }

    article = { ...article, tagList: ["reactjs", "angularjs", "dragons"] };
  });
  
    postMethod('https://conduit.productionready.io/api/articles',article,navigation,'Home', 'Article posted')
}

export default function CreateArticle({ navigation }) {
  const [text, SetText] = useState("");

  return (
    <Container safeArea color={"gray"} flex={1}>
      <Container
        flex={1}
        alignCenter={true}
        style={{
	flexDirection: 'row',
	justifyContent : 'space-around'
        }}
      >
        <Text h3 touchable onPress={() => navigation.goBack()}>
          Close
        </Text>
        <MaterialCommunityIcons name="information" color={"#000"} size={30} />
        <Text
          h3
          touchable
          onPress={() => {
            myMarkDown(text, navigation);
          }}
        >
          Send
        </Text>
      </Container>
      <View
        style={{
          flex: 10,
          backgroundColor: "#fff",
          borderWidth: 1,
          padding: 5,
          height: `${70}%`,
        }}
      >
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
      </View>
    </Container>
  );
}

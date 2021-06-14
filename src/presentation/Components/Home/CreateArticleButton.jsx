import React from "react";

import { colors,styles }  from "../../../application/Common/Globals";

import Container from "../../../infrastructure/Components/Container";

import Text from "../../../infrastructure/Components/Text";
import Image from "../../../infrastructure/Components/Image";

export default function CreateArticleButton({ navigation, hasToken, user }) {
  if (!hasToken) {
    return (
      <Container
        align="center"
        shadow
        color={colors.bannersColor}
        style={{ borderRadius: 5 }}
        touchable
        onPress={() => navigation.navigate('Forms')}
      >
        <Text h4>Login to be able to post 👋🏻</Text>
      </Container>
    );
  }

  return (
    <Container
      direction='row'
      style={{
          marginLeft : 10
      }}
    >
      <Image
        size={'50px'}
        circle
        source={{ uri: user.image }}
      />
      <Container
        touchable
        onPress={() => {
          navigation.push("CreateArticle");
        }}
        style={styles.addArticleButton}
      >
        <Text h4 >What's on your mind?</Text>
      </Container>
    </Container>
  );
}

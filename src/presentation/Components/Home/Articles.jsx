import React from "react";

//GLOBALS
import { colors, getDate } from "../../../application/Common/Globals";

//COMPONENTS
import Image from "../../../infrastructure/Components/Image";
import Text from "../../../infrastructure/Components/Text";

//LAYOUT COMPONENTS
import Container from "../../../infrastructure/Components/Container";

export default function ArticlesList({ article, index, navigation, user }) {
  const day = getDate.day(article.createdAt);
  const month = getDate.month(article.createdAt);

  return (
    <Container
      touchable
      onPress={() =>
        navigation.navigate("ArticleDetails", { id: article.slug, user })
      }
      shadow
    >
      <Container direction="row" justify="space-between">
        <Container direction="row" style={{ width: 70 + "%" }}>
          <Text h1 color={colors.secondary}>
            {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
          </Text>
          <Container style={{ marginTop: 25 }}>
            <Container direction="row">
              <Image
                size="30px"
                source={{ uri: article.author.image }}
                circle
              />
              <Text h4>
                {article.author.username} • {`${month} ${day}`}
              </Text>
            </Container>
            <Text h3 style={{ fontWeight: "bold" }}>
              {article.title}
            </Text>
            <Text h5>{article.description}</Text>
          </Container>
        </Container>
        <Container></Container>
      </Container>
    </Container>
  );
}

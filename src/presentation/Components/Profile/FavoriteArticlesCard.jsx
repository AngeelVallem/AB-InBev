import React from "react";

import Container from "../../../infrastructure/Components/Container";
import Text from "../../../infrastructure/Components/Text";
import Image from "../../../infrastructure/Components/Image";

export default function FavoriteArticlesCard({ article, index, navigation }) {
  return (
    <Container shadow key={index}>
      <Container direction="row">
        <Image
          size="30px"
          source={{ uri: article.author.image }}
          circle
          style={{ marginLeft: 10 }}
        />
        <Text>{article.author.username}</Text>
      </Container>
      <Text h3>{article.title}</Text>
      <Text>{article.description}</Text>
    </Container>
  );
}

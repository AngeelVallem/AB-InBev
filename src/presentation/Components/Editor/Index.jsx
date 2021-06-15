import React from "react";

import Container from "../../../infrastructure/Components/Container";
import Text from "../../../infrastructure/Components/Text";
import Button from "../../../infrastructure/Components/Button";
export default function ArticleEditable({
  article,
  index,
  navigation,
  onDelete,
  refresh,
}) {
  return (
    <Container flex={2} key={index} shadow direction="row">
      <Container flex={1}>
        <Text h2>{article.title}</Text>
        <Text h4> Descripton: {article.description}</Text>
        <Text h5>Created at : {article.createdAt}</Text>
        <Text h5>Last updated : {article.updatedAt}</Text>
      </Container>
      <Container>
        <Button text="Edit" onPress={() => navigation.push("EditArticle",article)} />
        <Button
          text="Delete"
          onPress={() => {
            onDelete(article.slug);
            refresh();
          }}
        />
      </Container>
    </Container>
  );
}

import React from "react";

//GLOBALS
import { colors, getDate } from "../../../application/Common/Globals";

//COMPONENTS
import Image from "../../../infrastructure/Components/Image";
import Text from "../../../infrastructure/Components/Text";

//LAYOUT COMPONENTS
import Container from "../../../infrastructure/Components/Container";

export default function ArticlesList({ article, index, navigation, user }) {
  const date = new Date(article.createdAt);

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
                source={{
                  uri: !article.author.image
                    ? "https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800063/21738698-hombre-foto-de-perfil-de-la-silueta-con-el-signo-de-interrogaci%C3%B3n-en-la-cabeza-vector.jpg"
                    : article.author.image,
                }}
                circle
              />
              <Text h4>
                {article.author.username.length > 8
                  ? article.author.username.split(' ')
                  : article.author.username}{" "}
                • {` ${date.getDate()}'${date.getFullYear()}`}
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

import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/core";

//COMPONENTS
import Image from "../../infrastructure/Components/Image";
import Text from "../../infrastructure/Components/Text";
import Spinner from "../../infrastructure/Components/Spinner";
import FollowButton from "../../infrastructure/Components/FollowButton";
import ActionsButon from "../Components/Article/ActionsButton";

//LAYOUT COMPONENTS
import Container from "../../infrastructure/Components/Container";

//Globals
import { styles } from "../../application/Common/Globals";

// API SERVICES
import {
  getByIdAuth,
  followUser,
  unFollowUser,
  favoriteArticle,
  unFavoriteArticle,
  getById,
} from "../../infrastructure/Api/Services";

export default function ArticuleDetails({ route, navigation }) {
  const [article, setArticle] = useState(null);
  const [actionsVisible, setActionsVisible] = useState(false);
  const { id, user } = route.params;
  const isFocus = useIsFocused();

  async function getArticle() {
    if (user) {
      const { article } = await getByIdAuth(
        `https://conduit.productionready.io/api/articles/${id}`
      );
      return setArticle(article);
    }
    const { article } = await getById(
      `https://conduit.productionready.io/api/articles/${id}`
    );
    return setArticle(article);
  }

  useEffect(() => {
    if (isFocus) {
      getArticle();
    }
  }, [isFocus]);

  if (!article) {
    return <Spinner />;
  }
  return (
    <Container safeArea flex={1}>
      <Container align="flex-end" style={styles.header}>
        <Text h3 touchable onPress={() => navigation.goBack()}>
          Close
        </Text>
      </Container>
      <Container flex={5} scroll style={{ padding: 20 }}>
        <Container direction="row" align="center">
          <Image size="50px" source={{ uri: article.author.image }} circle />
          <Text h3>{article.author.username}</Text>
          {user && user.username === article.author.username ? (
            <></>
          ) : (
            <FollowButton
              isFollowing={article.author.following}
              username={article.author.username}
              setFollow={followUser}
              setUnFollow={unFollowUser}
              refresh={getArticle}
            />
          )}
        </Container>
        <Text h1 center>
          {article.title.toUpperCase()}
        </Text>
        <Text h5 center>
          {article.description}
        </Text>
        <Text h3>{article.body}</Text>
      </Container>
      <ActionsButon
        isOpen={actionsVisible}
        onChangeOpen={setActionsVisible}
        navigation={navigation}
        id={id}
        isFavorite={article.favorited}
        setFavorite={favoriteArticle}
        setUnFavorite={unFavoriteArticle}
        refresh={getArticle}
      />
    </Container>
  );
}

// EDIT PROFILE LOGIC

// setTitle(article.title);
// setDescription(article.description);
// setBody(article.body);

// <Container safeArea justifyCenter={true} alignCenter={true}>
//   <CustomInput value={title} onChangeText={setTitle} />
//   <CustomInput value={description} onChangeText={setDescription} />
//   <CustomInput value={body} onChangeText={setBody} />
//   <Button
//     text={"Save"}
//     onPress={() => {
//       putMethod(
//         `https://conduit.productionready.io/api/articles/${route.params}`,
//         { article: { title, description, body } }
//       );
// navigation.push('Home')
//     }}
//   />
// </Container>

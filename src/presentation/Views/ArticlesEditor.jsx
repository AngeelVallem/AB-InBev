import React, { useEffect, useState } from "react";
import ArticleEditableCard from "../Components/Editor/Index";
import Spinner from "../../infrastructure/Components/Spinner";
import { useIsFocused } from "@react-navigation/native";
import { styles } from "../../application/Common/Globals";
import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";

import {
  getById,
  deleteArticle,
  getCurrentUser,
} from "../../infrastructure/Api/Services";

export default function ArticlesEditor({ navigation }) {
  const [articles, setArticles] = useState(null);
  const [user, setUser] = useState(null);

  const isFocus = useIsFocused();

  //GET CURRENT USER
  async function getUser() {
    const user = await getCurrentUser();
    setUser(user);
  }

  //GET USER ARTICLES
  async function getArticles() {
    const { articles } = await getById(
      `https://conduit.productionready.io/api/articles?author=${user.username}`
    );
    setArticles(articles);
  }

  // RENDER WHEN  COMPONENT MOUNT
  useEffect(() => {
    getUser();
  }, []);

  //RENDER WHEN USER USER ISNT NULL
  useEffect(() => {
    getArticles();
  }, [user]);

  //RE-RENDER WHEN THE SCREEN IS FOCUS TO FETCH ARTICLES
  useEffect(() => {
    if (user && isFocus) {
      getArticles();
    }
  }, [isFocus]);

  if (!articles) {
    return <Spinner />;
  }

  if (articles.length === 0) {
    return (
      <Container flex={1} align="center" justify="center">
        <Text h3 center>
          You don't have any articles yet 🙁
        </Text>
      </Container>
    );
  }

  return (
    <Container safeArea flex={1}>
      <Container style={styles.header}>
        <Text h2 center>
          My Articles
        </Text>
      </Container>
      <Container scroll>
        {articles.map((article, i) => (
          <ArticleEditableCard
            article={article}
            index={i}
            navigation={navigation}
            onDelete={deleteArticle}
            key={i}
            refresh={getUser}
          />
        ))}
      </Container>
    </Container>
  );
}

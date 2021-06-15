import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/core";

//USE CASES
import validateToken from "../../application/UseCases/ValidateToken";
import { getData, getCurrentUser } from "../../infrastructure/Api/Services";

//LAYOUT COMPONENTS
import Container from "../../infrastructure/Components/Container";

//COMPONENTS
import Text from "../../infrastructure/Components/Text";
import CreateArticle from "../Components/Home/CreateArticleButton";
import TagsList from "../Components/Home/Tags";
import Articles from "../Components/Home/Articles";

export default function Home({ navigation }) {
  const [hasAToken, setHasAToken] = useState(false);
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  const isFocused = useIsFocused();


  useEffect(() => {
    async function getTags() {
      try {
        const { tags } = await getData(
          "https://conduit.productionready.io/api/tags"
        );
        const { articles } = await getData(
          "https://conduit.productionready.io/api/articles"
        );
        setArticles(articles);
        setTags(tags);
      } catch (err) {
        alert("error");
      }
    }
    getTags();
  },[]);



  useEffect(() => {
    async function hasToken() {
      const token = await validateToken();
      setHasAToken(token);

      if (token) {
        const user = await getCurrentUser();
        setUser(user);
      }
    }
    if (isFocused) {
      hasToken();
    }
  }, [isFocused]);

  return (
    <Container flex={1} safeArea>
      <Container scroll flex={1} showsVerticalScrollIndicator={false}>
        <Container flex={1} style={{ marginTop: 30 }}>
          <Text h1>EXPLORE</Text>
          <CreateArticle
            navigation={navigation}
            hasToken={hasAToken}
            user={!user ? {} : user}
          />
        </Container>
        <TagsList tags={tags} />
        {/* articicles list  my alternative for FlatList */}
        {articles.map((article, i) => (
          <Articles
            key={i}
            article={article}
            index={i}
            navigation={navigation}
            user={user}
          />
        ))}
      </Container>
    </Container>
  );
}

import React, { useState, useEffect, useRef } from "react";
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
  const [filter, setFilter] = useState(null);

  const isFocused = useIsFocused();

  async function getTags() {
    try {
      const { tags } = await getData(
        "https://conduit.productionready.io/api/tags"
      );
      const { articles } = await getData(
        `https://conduit.productionready.io/api/articles?limit=30`
      );
      setArticles(articles);
      setTags(tags);
    } catch (err) {
      alert("error");
    }
  }
  useEffect(() => {
    getTags();
  }, []);

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
      getTags();
      setFilter(null);
    }
  }, [isFocused]);

  useEffect(() => {
    async function getArticlesFiltered() {
      if (filter) {
        const { articles } = await getData(
          `https://conduit.productionready.io/api/articles${`?tag=${filter}`}`
        );
        setArticles(articles);
      }
    }
    getArticlesFiltered();
  }, [filter]);

  return (
    <Container flex={1} safeArea>
      <Container scroll flex={1} showsVerticalScrollIndicator={false} nScrollToToP={() => alert('FETCH')}>
        <Container flex={1} style={{ marginTop: 30 }}>
          <Text
            h2
            touchable
            onPress={() => {
              getTags();
              setFilter(null);
            }}
          >
            EXPLORE <Text h3>{!filter ? "Global" : filter}</Text>
          </Text>
          <CreateArticle
            navigation={navigation}
            hasToken={hasAToken}
            user={!user ? {} : user}
          />
        </Container>
        <TagsList tags={tags} setFilter={setFilter} />
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

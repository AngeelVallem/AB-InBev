import React, { useState, useEffect } from "react";

import { useIsFocused } from "@react-navigation/native";
import validateToken from "../../application/UseCases/ValidateToken";
import {
  getCurrentUser,
  getArticlesWithParams,
} from "../../infrastructure/Api/Services";
import { colors, styles } from "../../application/Common/Globals";

import Container from "../../infrastructure/Components/Container";
import Button from "../../infrastructure/Components/Button";
import Image from "../../infrastructure/Components/Image";
import Text from "../../infrastructure/Components/Text";
import Spinner from "../../infrastructure/Components/Spinner";
import FavoriteArticlesCard from "../Components/Profile/FavoriteArticlesCard";

export default function Profile({ navigation }) {
  const [hasToken, setHasToken] = useState();
  const [favoriteArticles, setFavoriteArticles] = useState(null);
  const [user, setUser] = useState(null);

  const isFocused = useIsFocused();

  async function hasAToken() {
    const token = await validateToken();
    if (token) {
      setHasToken(true);
      const res = await getCurrentUser();
      return setUser(res);
    }
    setHasToken(false);
  }

  //valid token when the screen is mounted and fetch user
  useEffect(() => {
    hasAToken();
  }, []);

  //fetch favorite articles when user isnt a falsy
  useEffect(() => {
    async function getFavoriteArticles() {
      if (user) {
        const { articles } = await getArticlesWithParams(`?${user.username}`);
        return setFavoriteArticles(articles);
      }
      setHasToken(false);
    }
    getFavoriteArticles();
  }, [user]);

  //valid token when the screen is on focus and fetch user
  useEffect(() => {
    hasAToken();
  }, [isFocused]);

  //Render when hasToken is a falsy
  if (!user) {
    return (
      <Container flex={1} safeArea justifyCenter={true} alignCenter={true}>
        <Button
          text="Sign In"
          onPress={() => {
            navigation.navigate("Forms");
          }}
        />
      </Container>
    );
  }

  return (
    <Container flex={1} safeArea color={colors.bannersColor}>
      <Container align="flex-end" color={colors.bannersColor}>
        <Text
          h2
          touchable
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          ...
        </Text>
      </Container>
      <Container flex={1} align="center" color={colors.bannersColor}>
        <Container align="center" shadow color={colors.bannersColor}>
          <Text h3>{user.username}</Text>
          <Text h4>{user.bio}</Text>
        </Container>
        <Image size="80px" source={{ uri: user.image }} circle />
        <Text onPress={() => navigation.navigate("EditProfile", user)}>
          Edit profile
        </Text>
      </Container>
      <Container flex={1}>
        <Container style={styles.header}>
          <Text center h3>
            Favorites Articles ⭐️
          </Text>
        </Container>
        <Container scroll>
          {favoriteArticles ? (
            favoriteArticles.map((article, i) => (
              <FavoriteArticlesCard
                article={article}
                index={i}
                navigation={navigation}
              />
            ))
          ) : (
            <Spinner />
          )}
        </Container>
      </Container>
    </Container>
  );
}

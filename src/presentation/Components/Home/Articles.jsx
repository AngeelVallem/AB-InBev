import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getData from "../../../application/UseCases/getData";
import Article from "./Article";

const Articles = styled.FlatList`
  flex: 5;
`;

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData("https://conduit.productionready.io/api/articles")
      .then((res) => setArticles(res.articles))
      .catch((err) => console.log('soy el error', err));
  }, []);

  return (
    <Articles keyExtractor={item => item.slug} data={articles} renderItem={Article}/>
  );
}

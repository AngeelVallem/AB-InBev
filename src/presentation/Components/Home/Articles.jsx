import React, { useEffect, useState } from "react";
import getData from "../../../application/UseCases/getData";
import Article from "./Article";

//LAYOUT COMPONENT
import Container from "../../../infrastructure/Components/Container";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData("https://conduit.productionready.io/api/articles")
      .then((res) => setArticles(res.articles))
      .catch((err) => console.log("soy el error", err));
  }, []);

  return (
    <Container
      flatList
      flex={5}
      keyExtractor={(item) => item.slug}
      data={articles}
      renderItem={Article}
    />
  );
}

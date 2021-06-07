import React, { useEffect, useState, useRef } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import renderItem from "./Tag";
import getData from "../../../application/UseCases/getData";

const TagsList = styled.FlatList`
  flex: 1;
`;

export default function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getData("https://conduit.productionready.io/api/tags")
      .then((res) => setTags(res.tags))
      .catch((err) => err);
  }, []);

  return (
    <TagsList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={tags}
      renderItem={renderItem}
    />
  );
}

import React, { useEffect, useState} from "react";
import styled from "styled-components";
import Tag from "./Tag";

import getData from "../../../application/UseCases/getData";

import {ReverseArray} from '../../../application/Filters/TagsFilter'

const TagsList = styled.FlatList`
  flex: 1;
`;

export default function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getData("https://conduit.productionready.io/api/tags")
      .then((res) => setTags(res.tags))
      .catch((err) => console.log('Tags error :', err));
  }, []);


  return (
    <TagsList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={ReverseArray(tags)}
      renderItem={Tag}
    />
  );
}

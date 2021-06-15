import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native-gesture-handler";
import Text from "../../../infrastructure/Components/Text";
import Tag from "./Tag";


import tagsFilter from "../../../application/Filters/TagsFilter";

const TagsList = styled.FlatList`
marginBottom : 40px
`;

export default function Tags({tags,setFilter}) {

  

  return (
    <>
    <Text h4 style={{marginTop : 20}}>T A G S</Text>
        <TagsList
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) => item}
      data={tagsFilter(tags)}
      renderItem={({item}) => <Tag item={item} setFilter={setFilter}/>}

    />
    </>
  );
}

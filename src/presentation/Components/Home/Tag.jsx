import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { colors } from "../../../application/Common/Globals";

const TagItem = styled.View`
    padding : 10px
    margin : 0 5px
    backgroundColor : ${colors.bannersColor}
    borderRadius : 5px
`;

export default function Tag({ item,setFilter }) {



  return (
    <TouchableOpacity onPress={() => setFilter(item)}>
      <TagItem>
        <Text>{item}</Text>
      </TagItem>
    </TouchableOpacity>
  );
}

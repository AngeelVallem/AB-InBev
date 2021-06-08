import React from "react";
import styled from "styled-components";

export default function Container(props) {
  if (props.safeArea) {
    const CustomContainer = styled.SafeAreaView`
      ${props.flex && `flex : ${props.flex}`}
      ${props.justifyCenter && "justifyContent : center"}
        ${props.alignCenter && "alignItems : center"}
        ${props.direction && `flexDirection : ${props.direction}`}
        ${props.color && `backgroundColor : ${props.color}`}
        ${!props.styles ? "" : props.styles};
    `;
    return <CustomContainer>{props.children}</CustomContainer>;
  }

  if(props.flatList) {
    const CustomContainer = styled.FlatList`
      ${props.flex && `flex : ${props.flex}`}
      ${props.justifyCenter && "justifyContent : center"}
    ${props.alignCenter && "alignItems : center"}
    ${props.direction && `flexDirection : ${props.direction}`}
    ${props.color && `backgroundColor : ${props.color}`}
    ${!props.styles ? "" : props.styles};
    `;
    return <CustomContainer keyExtractor={props.key} data={props.data} renderItem={props.renderItem}/>
  }

  const CustomContainer = styled.View`
    ${props.flex && `flex : ${props.flex}`}
    ${props.justifyCenter && "justifyContent : center"}
      ${props.alignCenter && "alignItems : center"}
      ${props.direction && `flexDirection : ${props.direction}`}
      ${props.color && `backgroundColor : ${props.color}`}
      ${!props.styles ? "" : props.styles};
  `;
  return <CustomContainer >{props.children}</CustomContainer>;
}

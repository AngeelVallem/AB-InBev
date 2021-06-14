import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const CustomText = styled.Text`
  ${props => props.h1 && `fontSize : 40px fontWeight:700`}
  ${props => props.h2 && `fontSize : 30px fontWeight:500`}
  ${props => props.h3 && `fontSize : 20px fontWeight:400`}
  ${props => props.h4 && `fontSize : 15px fontWeight:300`}
  ${props => props.h5 && `fontSize : 10px fontWeight:300`}
  ${props => props.color && `color : ${props.color}`}
   padding : 10px 
   ${props => props.padding && `padding : ${props.padding} `}
   ${props => props.center && `textAlign: center`}
`;
export default function Text(props) {
  if (props.touchable) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <CustomText {...props}>{props.children}</CustomText>
      </TouchableOpacity>
    );
  }
  return <CustomText {...props}>{props.children}</CustomText>;
}

import React from "react";
import styled from "styled-components";

export default function Text(props) {
  const CustomText = styled.Text`
    ${props.h1 && `fontSize : 40px fontWeight:700`}
    ${props.h2 && `fontSize : 30px fontWeight:500`}
    ${props.h3 && `fontSize : 20px fontWeight:400`}
    ${props.h4 && `fontSize : 15px fontWeight:300`}
    ${props.h5 && `fontSize : 10px fontWeight:300`}
    ${props.color && `color : ${props.color}`}
     padding : 10px
    ${props.styles && props.styles}
  `;
  return <CustomText>{props.children}</CustomText>;
}

import React from "react";
import styled from "styled-components";

const CustomImage = styled.Image`
  ${(props) =>
    !props.size
      ? "width : 50px height : 50px"
      : `width : ${props.size}  height : ${props.size}`}
  ${props => props.circle && "borderRadius: 200px"}
`;

export default function Image(props) {
  return <CustomImage {...props}/>;
}

import React from "react";
import styled from "styled-components";



const CustomTextArea = styled.TextInput`
height: 80px
justifyContent: flex-start
  `;

const CustomText = styled.TextInput`
borderRadius : 20px
margin: 12px
padding : 25px
backgroundColor : #F5F5F5
${props => props.w && 'width : 300px'}
  `;

export default function Input(props) {
  if (props.textArea) {
    return <CustomTextArea {...props} />;
  }

  return <CustomText {...props} />;
}

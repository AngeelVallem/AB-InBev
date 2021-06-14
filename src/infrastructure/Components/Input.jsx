import React from "react";
import styled from "styled-components";

// borderRadius : 20px
// margin: 12px
// padding : 25px
// backgroundColor : #F5F5F5
const CustomInput = styled.TextInput`
height: 80px
justifyContent: flex-start
  `;
export default function Input(props) {

  return (
    <CustomInput
    {...props}
    />
  );
}

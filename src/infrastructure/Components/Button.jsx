import React from "react";
import styled from "styled-components";

import Text from "../Components/Text";

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
 height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: `${6}px`,
};
const CustomButton = styled.TouchableOpacity`
alignItems : center
justifyContent : center
backgroundColor : #000
margin: 12px
${props => props.padding ? props.padding : 'padding : 15px'}
${props => props.shadow && shadow}
`;
export default function Button(props) {


  return (
    <CustomButton {...props}>
      <Text color={"#fff"} h4>
        {props.text}
      </Text>
    </CustomButton>
  );
}

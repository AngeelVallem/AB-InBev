import React from "react";
import styled from "styled-components";

import Text from "../Components/Text";

export default function Button(props) {
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
  backgroundColor : #000
  borderRadius : 50px
  margin: 12px
  padding : 15px
  ${props.shadow && shadow}

  `;

  return (
    <CustomButton onPress={props.onPress}>
      <Text color={"#fff"} h4>
        {props.text}
      </Text>
    </CustomButton>
  );
}

import React from "react";
import { TouchableWithoutFeedback, ScrollView } from "react-native";
import {colors,styles} from '../../application/Common/Globals'

import styled from "styled-components";




const ContainerSafeArea = styled.SafeAreaView`
  ${(props) => props.flex && `flex : ${props.flex}`}
  backgroundColor: ${(props) => (!props.color ? "#fff" : props.color)}
    ${(props) => props.justifyCenter && "justifyContent : center"}
    ${(props) => props.alignCenter && "alignItems : center"}
    ${(props) => props.direction && `flexDirection : ${props.direction}`}
    ${(props) => (props.styles ? "" : props.styles)};
    ${props => props.align && `alignItems : ${props.align}`}
    ${props => props.justify && `justifyContent : ${props.justify}`}
    ${props => props.padding && `padding : ${props.padding}`}
    ${props => props.shadow && styles.shadow }
    ${props => props.width && `width : ${props.width}`}
    ${props => props.height && `height : ${props.height}`}
`;

const ScrollContainer = styled.ScrollView`
  ${(props) => props.flex && `flex : ${props.flex}`}
  backgroundColor: ${(props) => (!props.color ? "#fff" : props.color)}
    ${(props) => props.justifyCenter && "justifyContent : center"}
    ${(props) => props.alignCenter && "alignItems : center"}
    ${(props) => props.direction && `flexDirection : ${props.direction}`}
    ${(props) => (props.styles ? "" : props.styles)};
    ${props => props.align && `alignItems : ${props.align}`}
    ${props => props.justify && `justifyContent : ${props.justify}`}
    ${props => props.padding && `padding : ${props.padding}`}
    ${props => props.shadow && styles.shadow }
    ${props => props.width && `width : ${props.width}`}
    ${props => props.height && `height : ${props.height}`}
`;

const ContainerView = styled.View`
  ${(props) => props.flex && `flex : ${props.flex}`}
  backgroundColor: ${(props) => (!props.color ? "#fff" : props.color)}
  ${(props) => props.justifyCenter && "justifyContent : center"}
  ${(props) => props.alignCenter && "alignItems : center"}
  ${(props) => props.direction && `flexDirection : ${props.direction}`}
  ${props => props.border && `border : ${props.border}`}
  ${props => props.shadow && styles.shadow }
  ${props => props.align && `alignItems : ${props.align}`}
  ${props => props.justify && `justifyContent : ${props.justify}`}
  ${props => props.wrap && `flexWrap : ${props.wrap}`}
  ${props => props.padding && `padding : ${props.padding}`}
  ${props => props.width && `width : ${props.width}`}
  ${props => props.height && `height : ${props.height}`}
`;

export default function Container(props) {
  if (props.safeArea) {
    return <ContainerSafeArea {...props}>{props.children}</ContainerSafeArea>;
  }

  if (props.scroll) {
    return <ScrollContainer {...props}>{props.children}</ScrollContainer>;
  }

  if (props.touchable) {
    return (
      <TouchableWithoutFeedback onPress={props.onPress}>
        <ContainerView {...props}>{props.children}</ContainerView>
      </TouchableWithoutFeedback>
    );
  }
  return <ContainerView {...props}>{props.children}</ContainerView>;
}

import React, {useEffect} from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components";

const Container = styled.SafeAreaView`
  flex : 1
`
const Header = styled.View`
  flex : 1;

`

const HeaderTitle = styled.Text`
  fontSize : 30px
  fontWeight : bold
  padding : 30px
`

const TagsList = styled.View`
  flex : 1;
  backgroundColor : blue;
  margin : 10px 0
`
const Articles = styled.View`
  flex : 6;
  backgroundColor : orange;
  width : 50px;
  height : 50px
`

export default function Home({ navigation }) {  
  return (
    <Container>
      <Header>
        <HeaderTitle>EXPLORE</HeaderTitle>
      </Header>
      <TagsList></TagsList>
      <Articles></Articles>
    </Container>
  );
}

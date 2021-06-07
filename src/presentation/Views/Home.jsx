import React, {useEffect} from "react";
import { SafeAreaView, Text,ScrollView } from "react-native";
import styled from "styled-components";


//COMPONENTS
import TagsList from '../Components/Home/Tags'
import Articles from '../Components/Home/Articles'


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

export default function Home({ navigation }) {  
  return (
    <Container>
      <Header>
        <HeaderTitle>EXPLORE</HeaderTitle>
      </Header>
      <TagsList/>
      <Articles/>
    </Container>
  );
}

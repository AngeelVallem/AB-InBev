import React from "react";

import styled from "styled-components";

const Title = styled.Text`
  fontSize: 10px;
`;

const Container = styled.View`
  flex: 1;
  backgroundColor: #fff;
  alignItems: center;
  justifyContent: center;
  padding: 5px;
`

const Links = styled.Button`
  margin : 5px
`

export default function Home({navigation}) {
  return (
    <Container>
      <Title>Home screen</Title>
      <Links
        title="Go to Details"
        onPress={() => navigation.navigate("Intro")}
      />
    </Container>
  );
}

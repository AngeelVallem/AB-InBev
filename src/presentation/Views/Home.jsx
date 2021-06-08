import React, { useEffect } from "react";

//LAYOUT COMPONENTS
import Container from "../../infrastructure/Components/Container";

//COMPONENTS
import Text from "../../infrastructure/Components/Text";
import TagsList from "../Components/Home/Tags";
import Articles from "../Components/Home/Articles";

export default function Home() {
  return (
    <Container flex={1} safeArea>
      <Container flex={1} styles={"padding : 30px"}>
        <Text h1>EXPLORE</Text>
      </Container>
      <TagsList/>
      <Articles />
    </Container>
  );
}

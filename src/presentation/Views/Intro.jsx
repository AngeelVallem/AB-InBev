import React,{useEffect} from "react";

//Layout components
import Container from "../../infrastructure/Components/Container";

import Image from "../../infrastructure/Components/Image";
import Text from "../../infrastructure/Components/Text";


export default function Intro() {



  return (
    <Container flex={1} safeArea>
      <Container flex={10} justify={'center'}>
        <Image size="300px" source={{uri : 'https://i.postimg.cc/FRXDLQhT/08.png'}} />
        <Text h3 center>R E A L   W O R L D</Text>
        <Text h3 center='textAlign:center'>A P P L I C A T I O N</Text>
      </Container>
      <Container flex={1} justifyCenter={true} alignCenter={true}>
        <Text h4>Challenge for AB InBev</Text>
      </Container>
    </Container>
  );
}

import React,{useEffect} from "react";

//Layout components
import Container from "../../infrastructure/Components/Container";

import Image from "../../infrastructure/Components/Image";
import Text from "../../infrastructure/Components/Text";


export default function Intro({navigation}) {

useEffect(()=>{
  setTimeout(()=>{
    navigation.push('Home')
  },3000)
},[])

  return (
    <Container flex={1} safeArea>
      <Container flex={10} justifyCenter={true}>
        <Image size="300px" src="https://i.postimg.cc/FRXDLQhT/08.png" />
      </Container>
      <Container flex={1} justifyCenter={true} alignCenter={true}>
        <Text h4>Made with 🦾</Text>
      </Container>
    </Container>
  );
}

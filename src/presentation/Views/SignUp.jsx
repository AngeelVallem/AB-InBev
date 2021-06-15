import React from "react";

import { Keyboard } from "react-native";
import { colors,styles } from "../../application/Common/Globals";

//Custom Components
import Text from "../../infrastructure/Components/Text";
import Image from "../../infrastructure/Components/Image";

import Form from "../Components/Sign Up/Form"



//LAYOUT COMPONENTS
import Container from "../../infrastructure/Components/Container";

export default function SignUp({navigation}) {
  return (
    <Container
    flex={1}
    color={colors.bannersColor}
    touchable
    onPress={Keyboard.dismiss}
  >

    <Container flex={1}>
      <Container flex={1} safeArea justifyCenter={true} alignCenter={true} color={colors.bannersColor}>
        <Image size="100px" source={{uri : 'https://i.ibb.co/LJCBNPS/04.png'}} />
        <Text h3>Sign Up</Text>
      </Container>
      <Container
        flex={3}
        color={"#fff"}
        style={styles.form}
      >

        <Form  navigation={navigation}/>
      </Container>
    </Container>
  </Container>
  );
}


{/* <Container
flex={1}
color={colors.bannersColor}
touchable
onPress={Keyboard.dismiss}
>

<Container flex={1}>
  <Container flex={1} safeArea justifyCenter={true} alignCenter={true} color={colors.bannersColor}>
    <Image size="100px" source={{uri : 'https://i.ibb.co/jJMQVvW/02.png'}} />
    <Text h3>Sign In</Text>
  </Container>
  <Container
    flex={3}
    color={"#fff"}
    style={styles.form}
  >

    <Form  navigation={navigation}/>
  </Container>
</Container>
</Container> */}
import React from "react";
import { Keyboard } from "react-native";

//Custom Components
import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import Image from "../../infrastructure/Components/Image";

import { SignInForm } from "../Components/SignIn/Forms";

//Gobals
import { colors } from "../../application/Common/Globals";

export default function SignIn({ navigation }) {
  return (
    <Container
      flex={1}
      color={colors.bannersColor}
      touchable
      onPress={Keyboard.dismiss}
    >

      <Container flex={1}>
        <Container flex={2} safeArea justifyCenter={true} alignCenter={true} color={colors.bannersColor}>
          <Image size="200px" source={{uri : 'https://i.ibb.co/jJMQVvW/02.png'}} />
        </Container>
        <Container
          flex={3}
          color={"#fff"}
          justifyCenter={true}
          style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
        >
          <Text h2 styles="textAlign:center">
            Sign In
          </Text>
          <SignInForm  navigation={navigation}/>
        </Container>
      </Container>
    </Container>
  );
}

import React from "react";
import { Keyboard } from "react-native";

//Custom Components
import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import Image from "../../infrastructure/Components/Image";

import { SignInForm } from "../Components/SignIn/Forms";

//Gobals
import { colors } from "../../application/Common/Globals";

export default function SignIn() {
  return (
    <Container
      flex={1}
      color={colors.primary}
      touchable
      onPress={Keyboard.dismiss}
    >
      <Container flex={1}>
        <Container flex={2} safeArea justifyCenter={true} alignCenter={true}>
          <Image size="200px" src="https://i.ibb.co/jJMQVvW/02.png" />
        </Container>
        <Container
          flex={3}
          color={"#fff"}
          justifyCenter={true}
          styles="borderTopLeftRadius: 50px borderTopRightRadius: 50px"
        >
          <Text h2 styles="textAlign:center">
            Sign In
          </Text>
          <SignInForm />
        </Container>
      </Container>
    </Container>
  );
}

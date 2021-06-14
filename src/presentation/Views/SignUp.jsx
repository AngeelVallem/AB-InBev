import React from "react";

import { colors } from "../../application/Common/Globals";

//Custom Components
import Text from "../../infrastructure/Components/Text";
import Image from "../../infrastructure/Components/Image";

import {SignUpForm} from "../../presentation/Components/SignIn/Forms"



//LAYOUT COMPONENTS
import Container from "../../infrastructure/Components/Container";

export default function SignUp({navigation}) {
  return (
    <Container flex={1} color={colors.bannersColor}>
      <Container flex={1} safeArea justifyCenter={true} alignCenter={true} color={colors.bannersColor}>
        <Image size="150px" source={{uri : 'https://i.ibb.co/LJCBNPS/04.png'}} />
      </Container>
      <Container
        flex={3}
        color="#fff"
        justifyCenter={true}
        styles="borderTopLeftRadius: 50px borderTopRightRadius: 50px"
      >
          <Text h2 styles={'margin: 0 auto'}>Sign Up</Text>
        <SignUpForm navigation={navigation}/>
      </Container>
    </Container>
  );
}

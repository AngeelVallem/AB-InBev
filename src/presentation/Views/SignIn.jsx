import React from "react";
import { Keyboard } from "react-native";

//Custom Components
import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import Image from "../../infrastructure/Components/Image";

import Form from "../Components/SignIn/Form";

//Gobals
import { colors, styles } from "../../application/Common/Globals";

export default function SignIn({ navigation }) {
  return (
    <Container
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
    </Container>
  );
}

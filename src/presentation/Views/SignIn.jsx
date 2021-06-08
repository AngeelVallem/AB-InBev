import React from "react";

//Custum Components
import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import Form from "../../presentation/Components/SignIn/Form";

//Gobals
import { colors } from "../../application/Common/Globals";

export default function SignIn() {
  return (
    <Container flex={1} color={colors.primary}>
      <Container flex={1} safeArea>
        <Text h1 styles={"marginTop : 30px"}>
          Sign In
        </Text>
        <Text h4> Login for create articles , comment & follow users</Text>
      </Container>

      <Container
        flex={3}
        color={"#fff"}
        styles={`borderTopLeftRadius: 50px borderTopRightRadius: 50px`}
        justifyCenter={true}
      >
        <Form />
      </Container>
    </Container>
  );
}

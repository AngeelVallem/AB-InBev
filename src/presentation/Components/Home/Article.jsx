import React, { useState } from "react";
import {Touchable, TouchableOpacity} from 'react-native'

//LAYOUT COMPONENTS
import Container from "../../../infrastructure/Components/Container";
import Text from "../../../infrastructure/Components/Text";
import Image from "../../../infrastructure/Components/Image"

export default function Article({ item }) {
  return (
    <TouchableOpacity>
      <Container styles={"marginTop : 20px border: 1px solid black"}>
      <Image size='50px' src={item.author.image}/>
      <Text h3>
        {item.title}
      </Text>
    </Container>
    </TouchableOpacity>
  );
}

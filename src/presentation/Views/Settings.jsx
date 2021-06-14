import React from 'react'


import * as SecureStore from "expo-secure-store";

import Container from '../../infrastructure/Components/Container'
import Text from '../../infrastructure/Components/Text'


export default function Settings ({navigation}) {


    function SignOut() {
        try {
          SecureStore.deleteItemAsync("token");
        } catch (err) {
          console.log(err);
        }
      }

    return(
        <Container flex={1} safeArea>
            <Text h1 touchable onPress={() => {
                SignOut()
                navigation.goBack()
            }}>Sign Out</Text>
        </Container>
    )
}
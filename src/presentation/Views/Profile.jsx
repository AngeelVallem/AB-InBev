import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import {useIsFocused} from '@react-navigation/native'


import getCurrentUser from "../../infrastructure/Api/getCurrentUser";
import Articles from "../../presentation/Components/Home/Articles";

import Container from "../../infrastructure/Components/Container";
import Button from "../../infrastructure/Components/Button";
import Image from "../../infrastructure/Components/Image";
import Text from "../../infrastructure/Components/Text";

import { colors } from "../../application/Common/Globals";

export default function Profile({ navigation }) {
  const [hasToken, setHasToken] = useState();
  const [user, setUser] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {

    function validToken() {
      try {
        SecureStore.getItemAsync("token").then((token) => {
          if (!token) {
            return console.log("No");
          }
          setHasToken(true);
          getCurrentUser().then((res) => setUser(res));
        });
      } catch (err) {
        console.log(err);
      }
    }
      console.log("TODO : CLEAN PROFILE COMPONENT");
    validToken();
  },[]);

  useEffect(() => {
   async function validToken() {
      try {
        const token = await SecureStore.getItemAsync("token")
        if(token){
            setHasToken(true)
          const data = await getCurrentUser()
         return setUser(data)
        }

        setHasToken(false)

      } catch (err) {
        console.log(err);
      }
    }

    console.log(isFocused);
    validToken();
  }, [isFocused]);




  if (!hasToken) {
    return (
      <Container flex={1} safeArea justifyCenter={true} alignCenter={true}>
        <Button
          text="Sign In"
          onPress={() => {
            navigation.navigate("Forms");
          }}
        />
      </Container>
    );
  }
  return (
    <Container flex={1} safeArea color={colors.bannersColor}>
      <Container align='flex-end' color={colors.bannersColor}>
        <Text h2 touchable onPress={() => {
          navigation.navigate('Settings')
        }}>
          ...
        </Text>
      </Container>
      <Container
        flex={1}
        styles={`
      flexDirection : row
      justifyContent : space-around
      paddingTop : 20px
      `}
    
      >
        <Container flex={1} alignCenter={true}  color={colors.bannersColor}>
          <Image
            size="100px"
            source={{uri : user.image}}
            circle
          />
                    <Text
            touchable
            onPress={() => {
              navigation.navigate('EditProfile')
            }}
            styles={`
        border : 1px solid #000
        margin : 10px auto
      `}
          >
            Edit profile
          </Text>
        </Container>
        <Container flex={1}>
          <Text h3 styles={`textAlign:center`}>
            {user.username}
          </Text>
          <Text h4 styles={`textAlign:center`}>
            {user.bio}
          </Text>

        </Container>
      </Container>


    </Container>
  );
}

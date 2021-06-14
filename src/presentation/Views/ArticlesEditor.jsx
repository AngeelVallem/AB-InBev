import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { ScrollView, Alert,ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import {colors} from '../../application/Common/Globals'

import axios from "axios";

import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import Button from "../../infrastructure/Components/Button";

import { getById,deleteById,getCurrentUser } from "../../infrastructure/Api/Services";
import getUser from "../../infrastructure/Api/getCurrentUser";

export default function ArticlesEditor({navigation}) {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);

  const isFocused = useIsFocused();



  useEffect(() => {
    async function getUser () {
      const user = await getCurrentUser()
      setUser(user)
    }
    getUser()
  }, []);

  useEffect(
    () => {
      if (user) {
        getById(
          `https://conduit.productionready.io/api/articles?author=${user.username}`
        ).then((res) => setArticles(res.articles));
      }


    },
    [user],
    [isFocused]
  );



  const showAlert = ({ slug }) =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "EDIT",
        onPress: () => navigation.push('ArticleDetails',slug),
        style: "cancel",
      },
      { text: "DELETE", onPress: () => {
            deleteById('https://conduit.productionready.io/api/articles',slug)
            getUser().then((res) => setUser(res));
            Toast.show({
              type : 'error',
              text1: 'Article deleted succesfully',
            });
      } },
    ]);

  if (!user) {
    return (
      <Container safeArea justifyCenter={true} alignCenter={true}>
         <ActivityIndicator size={'large'} color={colors.primary}/>
      </Container>
    );
  }

  return (
    <Container safeArea flex={1}>
      <ScrollView>
        {articles.map((el, i) => (
          <Container
            colo={"peru"}
            flex={2}
            key={i}
            styles={`
          flexDirection : row
          justifyContent : space-around
          border : 1px solid #000
          marginVertical : 20px
            `}
          >
            <Text
              touchable
              onPress={() => {
                showAlert(el);
              }}
            >
              <Text h1 color={"gray"}>
                {i >= 10 ? i : `0${i + 1}`}
              </Text>{" "}
              {el.title}
            </Text>
          </Container>
        ))}
      </ScrollView>
    </Container>
  );
}

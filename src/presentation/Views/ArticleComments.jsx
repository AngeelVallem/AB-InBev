import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/core";
import {
  LogBox,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styled from "styled-components";
import Container from "../../infrastructure/Components/Container";
import Text from "../../infrastructure/Components/Text";
import Spinner from "../../infrastructure/Components/Spinner";
import Button from "../../infrastructure/Components/Button";
import { getById, addComment } from "../../infrastructure/Api/Services";
import Icon from "react-native-vector-icons/AntDesign";

import Comment from "../Components/Article/Comment";

const CustomInput = styled.TextInput`
borderRadius : 5px
margin: 12px
marginRight : 0px
backgroundColor : #F5F5F5
height: 60px
paddingLeft : 5px
width : 50%
`;

export default function Comments({ route, navigation }) {
  LogBox.ignoreLogs(["Warning: ..."]);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(null);
  const isFocus = useIsFocused()

  const {id, user} = route.params


  async function getComments() {
    const { comments } = await getById(
      `https://conduit.productionready.io/api/articles/${id}/comments`
    );
    setComments(comments);
  }

  useEffect(() => {
    if(isFocus){
	getComments();
    }
  }, [comments]);

  if (!comments) {
    return <Spinner />;
  }

  if (comments && comments.length === 0) {
    return (
      <Container flex={1} safeArea>
        <Container align="center" justify="center">
          <Icon name="minus" size={40} />
        </Container>
        <Container flex={5}>
          <Text h3 center>
            oh no.. seems that this post has no comments
          </Text>
        </Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container
              style={styles.inner}
              justify="space-around"
              direction="row"
            >
              <CustomInput
                placeholder="Write a comment..."
                value={comment}
                onChangeText={setComment}
              />
              <Button
                text="Submit"
                style={{ height: 60 }}
                onPress={() => {
                  if (comment === "") {
                    return false;
                  }
                  addComment(
                    id,
                    { comment: { body: comment } },
                    "Article Commented"
                  );
                  setComment("");
                }}
              />
            </Container>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Container>
    );
  }

  return (
    <Container flex={1} safeArea>
      <Container align="center" justify="center">
        <Icon name="minus" size={40} />
      </Container>
      <Container flex={8}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id.toString()}
          data={comments}
          renderItem={Comment}
        />
      </Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container
            style={styles.inner}
            justify="space-around"
            direction="row"
          >
            <CustomInput
              placeholder="Write a comment..."
              value={comment}
              onChangeText={setComment}
            />
            <Button
              text="Submit"
              style={{ height: 60 }}
              onPress={() => {
                if (comment === "") {
                  return false;
                }
                addComment(
                  id,
                  { comment: { body: comment } },
                  "Article Commented"
                );
                setComment("");
              }}
            />
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

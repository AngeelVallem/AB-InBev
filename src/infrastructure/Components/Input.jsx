import React from "react";
import styled from "styled-components";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const CustomTextArea = styled.TextInput`
height: 80px
justifyContent: flex-start
  `;

const CustomText = styled.TextInput`
borderRadius : 20px
margin: 12px
padding : 10px
backgroundColor : #F5F5F5
height : 40px
${(props) => props.w && "width : 300px"}
  `;

export default function Input(props) {
  if (props.textArea) {
    return <CustomTextArea {...props} />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <CustomText {...props} />
          <View style={styles.btnContainer}></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

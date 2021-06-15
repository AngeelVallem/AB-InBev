import React from "react";
import styled from "styled-components";
import {KeyboardAvoidingView, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'


const CustomTextArea = styled.TextInput`
height: 80px
justifyContent: flex-start
  `;

const CustomText = styled.TextInput`
borderRadius : 20px
margin: 15px
padding : 10px
backgroundColor : #F5F5F5
height : 40px
${props => props.w && 'width : 300px'}
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
        <CustomText {...props}/>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
});
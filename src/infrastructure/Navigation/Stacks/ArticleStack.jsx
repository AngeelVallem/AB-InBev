import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ArticleDetails from "../../../presentation/Views/ArticleDetail";
import ArticleComments from "../../../presentation/Views/ArticleComments";

const ArticleStack = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

export default function Stack({ route }) {
  return (
    <ArticleStack.Navigator
      screenOptions={stackOptions}
      mode="modal"
      initialRouteName="ArticleDetails"
    >
      <ArticleStack.Screen name="Home">
        {(props) => <ArticleDetails {...props} route={route} />}
      </ArticleStack.Screen>
      <ArticleStack.Screen name="Comments">
        {(props) => <ArticleComments {...props} route={route} />}
      </ArticleStack.Screen>
    </ArticleStack.Navigator>
  );
}

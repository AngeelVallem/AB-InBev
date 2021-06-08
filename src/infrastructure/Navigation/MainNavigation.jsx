import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "../../presentation/Views/Intro";
import MainTabNavigation from "../Components/TabNavigation";

const Stack = createStackNavigator();

const stackOption = {
  headerShown: false,
};

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={stackOption}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={MainTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

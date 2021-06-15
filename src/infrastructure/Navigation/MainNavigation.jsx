import React, { useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "../../presentation/Views/Intro";
import MainTabNavigation from "./TabsNavigation/TabNavigation";
import AuthStack from "../Navigation/Stacks/AuthStack"
import Settings from "../../presentation/Views/Settings"
import EditProfile from "../../presentation/Views/EditProfile"
import CreateArticle from "../../presentation/Views/CreateArticle";
import ArticleStack from  "../Navigation/Stacks/ArticleStack"
import EditArticle from "../../presentation/Views/EditArticle";

const Stack = createStackNavigator();
const stackOptions = {
  headerShown: false
};



export default function MainNavigation() {
  

  const [isLoaded, setIsLoaded] = useState(null)


  useEffect(() => {
    setTimeout(()=>{
      setIsLoaded(true)
    },2000)
  })

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackOptions}>
        <Stack.Screen name="Home" component={!isLoaded ? Intro : MainTabNavigation} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Forms" component={AuthStack}/>
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ArticleDetails" component={ArticleStack} />
         <Stack.Screen name="CreateArticle" component={CreateArticle} />
         <Stack.Screen name="EditArticle" component={EditArticle} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

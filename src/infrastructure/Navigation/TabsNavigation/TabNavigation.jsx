import React,{useState,useEffect} from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconicIcons from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/AntDesign";
import HomeScreen from "../../../presentation/Views/Home";
import EditorScreen from "../../../presentation/Views/ArticlesEditor";
import ProfileScreen from "../../../presentation/Views/Profile"

import AuthStack from "../Stacks/AuthStack"

import * as SecureStore from "expo-secure-store"


const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation({navigation}) {

  const [isLogged,setIsLogged] = useState()

  useEffect(()=>{
        navigation.addListener('focus',() =>{
          navigation.canGoBack(false)
        })
      SecureStore.getItemAsync('token')
      .then(token => {
        !token ? setIsLogged(false) : setIsLogged(true)
      })
  })  

  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#fff" }}>
    <Tab.Screen name="Home"  component={HomeScreen} />
    <Tab.Screen name='Editor' component={!isLogged ? AuthStack : EditorScreen}/>
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  );
}

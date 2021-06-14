import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../../../presentation/Views/SignIn";
import Register from "../../../presentation/Views/SignUp"

const ProfileStack = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

export default function Stack() {
  return (
    <ProfileStack.Navigator screenOptions={stackOptions} mode='modal'>
      <ProfileStack.Screen name="Login" component={Login}/>
      <ProfileStack.Screen name="Register" component={Register}/> 
    </ProfileStack.Navigator>
  );
}

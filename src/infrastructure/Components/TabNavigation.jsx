import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconicIcons from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/AntDesign";
import HomeScreen from "../../presentation/Views/Home";
import EditorScreen from "../../presentation/Views/ArticlesEditor";
import ProfileScreen from '../../presentation/Views/Profile'
import { colors } from "../../application/Common/Globals";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.primary}
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Editor"
        component={EditorScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconicIcons name="create" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntIcons name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

//Exporting all my views for the routes



const Stack = createStackNavigator()

export default function Routes () {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Tabs/>

        </Stack.Navigator>
    )
}
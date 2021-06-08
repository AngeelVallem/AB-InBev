import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

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
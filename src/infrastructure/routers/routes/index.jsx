import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

//Exporting all my views for the routes
import HomeScreen from '../../../presentation/Views/Home'
import IntroScreen from '../../../presentation/Views/Intro'


const Stack = createStackNavigator()

export default function Routes () {
    return(
        <React.Fragment>
        <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Intro' component={IntroScreen}/>
        </Stack.Navigator>
        </React.Fragment>
    )
}
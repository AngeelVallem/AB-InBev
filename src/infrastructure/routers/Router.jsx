import React from 'react'

import {NavigationContainer} from '@react-navigation/native'

import NavigationRoutes from './routes/index'


export default function Router () {
    return(
        <NavigationContainer>
        <NavigationRoutes/>            
        </NavigationContainer>
    )
}
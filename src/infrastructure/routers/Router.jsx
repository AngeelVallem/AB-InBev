import React from 'react'

import {NavigationContainer} from '@react-navigation/native'

import Nav from '../Components/TabNavigation'

export default function Router () {
    return(
        <NavigationContainer>
            <Nav/>
        </NavigationContainer>
    )
}
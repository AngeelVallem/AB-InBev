import React from 'react'
import {View, Text } from 'react-native'
import styled from 'styled-components'


const Container = styled.View`
    flex : 1;
    justifyContent:center;
    alignItems : center;
`

export default function Profile () {
    return (
       <Container>
           <Text>
               Profile Screen
           </Text>
       </Container> 
    )
}
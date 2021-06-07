import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex:1;
    justifyContent: center;
    alignItems : center;
`

export default function ArticlesEditor () {
    return(
        <Container>
            <Text>
                Editor Screen
            </Text>
        </Container>
    )
}
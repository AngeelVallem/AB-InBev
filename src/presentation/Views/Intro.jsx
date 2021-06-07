import React from 'react'

import styled from 'styled-components'


const Title = styled.Text`
    fontSize : 10px;
`

const Container = styled.View`
  flex : 1;
  backgroundColor : #fff;
  alignItems : center;
  justifyContent : center;
  padding : 5px;
`

const Links = styled.Button`
  margin : 5px
`



export default function Intro  ({navigation}) {
    return(
      <Container>
      <Title>Details Screen</Title>
      <Links
        title='Go to Details again'
        onPress={()=> navigation.push('Details')}
        />
        <Links
        title='Go to Home'
        onPress={()=> navigation.navigate('Home')}
        />
        <Links
        title='Go back'
        onPress={()=> navigation.goBack()}
        />
        <Links
        title='Go to first Screen'
        onPress={()=> navigation.popToTop()}
        />
      </Container>
    )
  }
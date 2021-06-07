import React from 'react'


import styled from 'styled-components'

const Title = styled.Text`
    fontSize : 10px;
    marginTop : 50px
`

const Container = styled.View`
  flex : 1;
  backgroundColor : #fff;
  alignItems : center;
  justifyContent : center;
  padding : 5px;
`


export default function Intro  () {

    return(
      <Container>
      <Title>Intro App</Title>
      <Title>Made with ❤️‍🔥</Title>
      </Container>
    )
  }
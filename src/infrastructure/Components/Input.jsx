import React from 'react'
import styled from 'styled-components'

export default function Input (props) {

    const CustomInput = styled.TextInput`
    borderRadius : 50px
    margin: 12px
    padding : 25px
    backgroundColor : #F5F5F5
    `

    return(
        <CustomInput placeholder={props.placeholder} />
        )
}
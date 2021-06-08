import React from 'react'
import styled from 'styled-components'


export default function Image (props) {
    
    const CustomImage =  styled.Image`
    width: 50px
    height: 50px
    `

    return(
        <CustomImage source={{uri : props.src}}/>
    )
}
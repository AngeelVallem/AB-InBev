import React from 'react'
import styled from 'styled-components'


export default function Image (props) {
    
    const CustomImage =  styled.Image`
    width: ${props.size}
    height: ${props.size}
    `

    const img = props.src === '' ? 'https://tienda.elsardinero.com/wp-content/uploads/2017/09/user.png' : props.src

    return(
        <CustomImage source={{uri : img}}/>
    )
}
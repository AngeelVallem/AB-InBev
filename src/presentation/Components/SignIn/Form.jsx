import React from 'react'

//Custom Components
import Text from '../../../infrastructure/Components/Text'
import Input from '../../../infrastructure/Components/Input'
import Button from '../../../infrastructure/Components/Button'

export default function Form () {
    return(
            <>
          <Input placeholder={'Email'}/>
          <Input placeholder={'password'}/>
          <Button text={'Sign In'} shadow/>
          <Text h5>You dont have an account? <Text h4 >Register</Text></Text>
    </>  
    )
}
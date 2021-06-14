import React from 'react'
import { ActivityIndicator } from 'react-native'

import Container from './Container'

import { colors } from '../../application/Common/Globals'

export default function Spinner () {
	return(
	<Container flex={1} align='center' justify='center'>
	<ActivityIndicator size='large' color={colors.bannersColor}/>
	</Container>
	)
}
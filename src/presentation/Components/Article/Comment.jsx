import React from 'react'

import Container from '../../../infrastructure/Components/Container'
import Text from '../../../infrastructure/Components/Text'
import Image from '../../../infrastructure/Components/Image'


export default function Comment ({item}) {


	return (
	<Container shadow>
            <Container direction="row" style={{ padding: 10 }} align="center">
              <Image
                size="30px"
                source={{ uri: item.author.image }}
                circle
              />
              <Text>{item.author.username}</Text>
              <Text></Text>
            </Container>
            <Text>{item.body}</Text>
          </Container>
	)
}
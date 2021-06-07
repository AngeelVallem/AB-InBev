import React from 'react'
import {TouchableOpacity,View, Text} from 'react-native'

export default function Article ({item}) {

    console.log(item);

    return(
        <TouchableOpacity>
            <View>
                <Text>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
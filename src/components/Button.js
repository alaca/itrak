import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Button = ( { onPress, style, children } ) => {

    const { buttonStyle, textStyle, containerStyle } = styles

    return (

        <View style={ [ containerStyle, style ] }>
            <TouchableOpacity 
                style={ buttonStyle } 
                onPress={ onPress }
            >
                <Text style={ textStyle }>
                    { children }
                </Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#fcd303',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 40,
        height: 50
    },
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 20
    },
    containerStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
}


export { Button }
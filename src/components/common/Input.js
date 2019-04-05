import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, textAlign }) => {

    const { inputStyle, labelStyle, containerStyle } = styles

    return(

        <View style={ containerStyle }>

            { label && ( <Text style={ labelStyle }>{ label }</Text> ) }

            <TextInput
                textAlign={ textAlign || 'left' } 
                secureTextEntry={ secureTextEntry }
                autoCorrect={ false }
                placeholder={ placeholder }
                onChangeText={ onChangeText } 
                style={ inputStyle }
                value={ value }
            />
        </View>

    )
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 40,
        backgroundColor: 'white',
        fontSize: 18,
        lineHeight: 30,
        height: 50,
        flex: 1,
    },
    labelStyle: {
        fontSize: 18,
        paddingBottom: 5,
    },
    containerStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input }
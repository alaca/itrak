import React from 'react'
import { 
    Text, 
    View,
    TouchableOpacity, 
    Image 
} from 'react-native'

const User = user => {

    const { buttonStyle, containerStyle } = styles

    return (

        <View style={ [ containerStyle, style ] }>
            <TouchableOpacity 
                style={ buttonStyle } 
                onPress={ onPress }
            >
                <Image 
                    source={ require('../../../assets/icon.png') }
                    style={{width: 220, height: 220 }}
                />

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


export { User }
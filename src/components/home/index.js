import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    Image, 
    ActivityIndicator 
} from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, registerUser, clearError } from '../../actions'
import { Button } from '../common' 

class Home extends Component {

    static navigationOptions = {
        title: 'iTrak',
        headerTransparent: true,
        headerTintColor: 'white',
        headerLeft: null,
        gesturesEnabled: false,
        headerTitleStyle: {
            fontSize: 26
        }
    }

    render() {

        return (
            <View>
                <Text>
                    Home
                </Text>
            </View>
        )
    }

}

export default Home
import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    Image, 
    ActivityIndicator,
    Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { 
    emailChanged, 
    passwordChanged, 
    registerUser, 
    clearError, 
    clearProps 
} from '../../actions'
import { Button } from '../common' 
import styles from './styles'

class Register extends Component {

    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: 'white'
    }

    renderRegisterButton = () => {

        if ( this.props.registered ) return;

        if ( this.props.loading ) {

            return (                     
                <ActivityIndicator size="large" />
            )

        } else {

            return (                     
                <Button onPress={ () => {
                    Keyboard.dismiss() 
                    this.attemptRegistration()
                }}>
                    Register
                </Button>
            )
        }


    }

    goToScreen = screen => {
        this.props.clearProps()
        this.props.navigation.navigate( screen )
    }


    attemptRegistration = () => {

        this.props.registerUser({ 
            email: this.props.email, 
            password: this.props.password,
            navigation: this.props.navigation
        })
    }

    showError = ( error ) => {

        if ( error ) {
            return (
                <View>
                    <Text style={ styles.errorText }>
                        { error }
                    </Text>
                </View>
            )
        }

    }
    

    render() {

        const {
            email, 
            password, 
            registered,
            registerError,
            emailError,
            passwordError,
            emailChanged,
            passwordChanged,
            clearError
        } = this.props


        return (
            <ImageBackground source={ require('./assets/register.png') } style={{width: '100%', height: '100%'}}>

                <View style={ custom.containerStyle }>

                    <Image 
                        source={ require('../../../assets/icon.png') }
                        style={{width: 220, height: 220, marginTop: 50}}
                    />


                    { registered && (

                        <View>
                            <Text style={ styles.registeredInfoText }>
                                Thank you for registering
                            </Text>
                        </View>

                    ) }


                    { ! registered && (

                        <View style={ styles.inputContainerStyle }>

                            <TextInput
                                textAlign="center" 
                                autoCorrect={ false }
                                placeholder="email"
                                onChangeText={ emailChanged } 
                                onFocus={ () => clearError( 'emailError' ) } 
                                style={ styles.inputStyle }
                                value={ email }
                            />

                        </View>

                    ) }

                    { this.showError( emailError ) }


                    { ! registered && (

                        <View style={ styles.inputContainerStyle }>

                            <TextInput
                                textAlign="center" 
                                secureTextEntry
                                autoCorrect={ false }
                                placeholder="password"
                                onChangeText={ passwordChanged } 
                                onFocus={ () => clearError( 'passwordError' ) } 
                                style={ styles.inputStyle }
                                value={ password }
                            />

                        </View>

                    ) }

                    { this.showError( passwordError ) }
                   
                    { this.renderRegisterButton() }

                    { this.showError( registerError ) }

                    <View style={{ height: 40 }}></View>

                    <Button onPress={ () => this.goToScreen( 'Login' ) }>
                        Login
                    </Button>

                </View>

            </ImageBackground>
        )
    }

}


const custom = {
    containerStyle: {
        flex: 1,
        justifyContent: null,
        alignItems: 'center',
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 20
    } 
}

const mapStateToProps = state => {

    const { 
        email, 
        password, 
        registered,
        registerError,
        loading,
        emailError,
        passwordError,
        clearError,
        clearProps
    } = state.auth

    return { 
        email, 
        password, 
        registered,
        registerError,
        loading,
        emailError,
        passwordError,
        clearError,
        clearProps
    }
}

export default connect( mapStateToProps, { 
    emailChanged, 
    passwordChanged, 
    registerUser, 
    clearError,
    clearProps
} )( Register )
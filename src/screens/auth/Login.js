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
    authUser, 
    clearProp, 
    clearProps 
} from '../../actions'
import { Button } from '../../components' 
import styles from './styles' 

class Login extends Component {

    static navigationOptions = {
        header: null
    }

    renderLoginButton = () => {

        if ( this.props.loading ) {

            return (                     
                <ActivityIndicator size="large" />
            )

        } else {

            return (          
                <Button onPress={ () => this.attemptLogin() }>
                    Log In
                </Button>           
            )
        }

    }

    attemptLogin = () => {

        Keyboard.dismiss() 

        this.props.authUser({ 
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

    goToScreen = screen => {
        this.props.clearProps()
        this.props.navigation.navigate( screen )
    }


    render() {

        const {
            email, 
            password,  
            loginError,
            emailError,
            passwordError,
            emailChanged,
            passwordChanged,
            clearProp
        } = this.props

        return (
            <ImageBackground source={ require('./assets/login.png') } style={{width: '100%', height: '100%'}}>

                <View style={ styles.containerStyle }>

                    <Image 
                        source={ require('../../../assets/icon.png') }
                        style={{width: 220, height: 220 }}
                    />

                    <View style={ styles.inputContainerStyle }>

                        <TextInput
                            textAlign="center" 
                            autoCorrect={ false }
                            placeholder="email"
                            onChangeText={ emailChanged } 
                            onFocus={ () => clearProp( 'emailError' ) } 
                            style={ styles.inputStyle }
                            value={ email }
                        />

                    </View>

                    { this.showError( emailError ) }

                    <View style={ styles.inputContainerStyle }>

                        <TextInput
                            textAlign="center" 
                            secureTextEntry
                            autoCorrect={ false }
                            placeholder="password"
                            onChangeText={ passwordChanged } 
                            onFocus={ () => clearProp( 'passwordError' ) } 
                            style={ styles.inputStyle }
                            value={ password }
                        />

                    </View>

                    { this.showError( passwordError ) }

                    { this.renderLoginButton() }

                    { this.showError( loginError ) }

                    <View style={{ height: 40 }}></View>

                    <Button onPress={ () => this.goToScreen( 'Register' ) }>
                        Register
                    </Button>

                    <Text style={ styles.textDescription }>
                        To register you don't {"\n"} need the invite code
                    </Text>



                </View>

            </ImageBackground>
        )
    }

}

const mapStateToProps = state => {

    const { 
        user,
        email, 
        password, 
        loginError,
        loading,
        emailError,
        passwordError,
        clearProp,
        clearProps
    } = state.auth

    return { 
        user,
        email, 
        password, 
        loginError,
        loading,
        emailError,
        passwordError,
        clearProp,
        clearProps
    }
}

export default connect( mapStateToProps, { 
    emailChanged, 
    passwordChanged, 
    authUser, 
    clearProp,
    clearProps
} )( Login )
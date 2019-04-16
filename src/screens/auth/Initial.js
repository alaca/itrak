import React, { Component } from 'react'
import { 
    View, 
    ActivityIndicator
} from 'react-native'
import styles from './styles' 
import { checkLogin } from '../../actions/AuthActions'

class Initial extends Component {

    constructor( props ) {

        super( props )

        checkLogin()
            .then( status => {

                console.log( status )

                this.props.navigation.navigate({
                    routeName: status ? 'Home' : 'Login'
                })  

            } )
    }


    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    }
}

export default Initial
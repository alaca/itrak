import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { logoutUser } from '../actions'

class LogoutButton extends Component {

    constructor( props ) {
        super( props )
    }

    render(){

        return(
            <View>
                <TouchableOpacity 
                    onPress={ ( ) => this.props.logoutUser( ) }
                >
                    <Text style={{ color: 'white' }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default connect( null, { 
    logoutUser
} )( LogoutButton )
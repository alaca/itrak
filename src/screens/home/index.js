import React, { Component } from 'react'
import { 
    View, 
    ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { usersFetched, logoutUser } from '../../actions'
import tmbd from '../../apis/tmdb'
import { UserListItem } from '../../components'
import LogoutButton from '../../components/LogoutButton'


class Home extends Component {

    static navigationOptions = {
        title: 'iTrak',
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        gesturesEnabled: false,
        headerTitleStyle: {
            fontSize: 24
        },
        headerRight: <LogoutButton />,

    }


    constructor( props ) {

        super( props )

        tmbd.get( '/person/popular' )
            .then(  result => this.props.usersFetched( result.data.results ) )
            .catch( error => console.log( error ) )

    }



    loadUsers = () => {
      
        if ( this.props.users ) {

            return <UserListItem users={ this.props.users } />

        }

        return <ActivityIndicator size="large" />

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                { this.loadUsers() }
            </View>
        )
    }

}


const mapStateToProps = state => {

    const { users } = state.api

    return { users }
}

export default connect( mapStateToProps, { 
    usersFetched,
    logoutUser
} )( Home )
import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { usersFetched } from '../../actions'

import tmbd from '../../apis/tmdb'

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

    componentDidMount() {

        tmbd.get( '/person/popular' )
        .then( ( res ) => {
            //http://image.tmdb.org/t/p/
            this.props.usersFetched( res.data.results )

        } )
        .catch( err => {
            console.log( err )
        })

    }


    loadUsers() {

        if ( this.props.users ) {

            const usersList = this.props.users.map( user => {
                return (
                    <View key={ user.id }>
                        <Text>{ user.name }</Text>                    
                    </View>
                )
            })
        
            return <View>{ usersList }</View>
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
    usersFetched
} )( Home )
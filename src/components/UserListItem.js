import React, { Component } from 'react'
import { 
    View, 
    Text, 
    Image,
    FlatList
} from 'react-native'

class UserListItem extends Component {

    renderUserItem = ({ item }) => {

        return(

            <View style={ styles.userItemStyle }>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${item.profile_path}` }}
                    style={{width: '100%', height: 200, borderRadius: 30}} 
                />
                <Text style={ styles.usersListText }>{ item.name }</Text>
            </View>
        )

    }



    render() {

        return (
            <FlatList
                data={ this.props.users }
                keyExtractor={ item => item.id.toString() }
                renderItem={ this.renderUserItem }
                numColumns={2}
                initialNumToRender={4}
                maxToRenderPerBatch={1}
                windowSize={6}
                removeClippedSubviews={ true }
            />
        )


    }

}


const styles =  {
    userItemStyle: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff00',
        borderRadius: 30,
        margin: 5
    },
    usersListText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        paddingBottom: 4
    }
}


export { UserListItem }
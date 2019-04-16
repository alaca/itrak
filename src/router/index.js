import React from 'react'
import { 
    createAppContainer, 
    createStackNavigator 
} from 'react-navigation'


import Home from '../screens/home'
import Initial from '../screens/auth/Initial'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'

/*
const AppStack = createStackNavigator({ 
    Home: Home 
});

const AuthStack = createStackNavigator({ 
    Login: Login,
    Register: Register
});

*/

export default createAppContainer(createStackNavigator(
    {
        Initial: Initial,
        Home: Home,
        Login: Login,
        Register: Register
    },
    {
        initialRouteName: 'Initial',
        headerMode: 'screen',
        headerLayoutPreset: 'center',
        cardStyle: {
            backgroundColor: '#000',
        }
    }
));


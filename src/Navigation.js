import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home'


const Navigation = createStackNavigator(
    {
        Login: Login,
        Register: Register,
        Home: Home
    },
    {
        initialRouteName: 'Login',
        headerMode: 'screen',
        headerLayoutPreset: 'center',
        cardStyle: {
            backgroundColor: '#000',
        }
    }
)

export default createAppContainer( Navigation );
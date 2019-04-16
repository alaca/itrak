import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { createAppContainer } from 'react-navigation'
import firebase from 'firebase'
import firebaseConfig from './src/config/firebase'

import reducers from './src/reducers'
import Navigation from './src/router'


class App extends Component {

    componentDidMount() {
        firebase.initializeApp( firebaseConfig )    
    }

    render() {

        const store = createStore( reducers, {}, applyMiddleware( ReduxThunk ) )
        
        return (
            <Provider store={ store }>
                <Navigation />
            </Provider>
        )
    }
}

export default App

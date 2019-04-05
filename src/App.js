import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebaseConfig from './config/firebase'
import Navigation from './Navigation';

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

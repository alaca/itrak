import firebase from 'firebase'
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_EMAIL_ERROR,
    LOGIN_PASSWORD_ERROR,
    CLEAR_FIELD_ERROR,
    REGISTER_USER,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    CLEAR_PROPS
} from './types'


export const emailChanged = ( text ) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}


export const passwordChanged = ( text ) => {

    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const clearError = ( prop ) => {

    return {
        type: CLEAR_FIELD_ERROR,
        payload: prop
    }

}

export const clearProps = () => {

    return {
        type: CLEAR_PROPS
    }

}

export const authUser = ({ email, password, navigation }) => {

    return ( dispatch ) => {

        dispatch({ type: LOGIN_USER })

        if ( ! email ) {
            dispatch({ type: LOGIN_EMAIL_ERROR })
        }  
        
        if ( ! password ) {
            dispatch({ type: LOGIN_PASSWORD_ERROR })
        } 

        if ( email && password ) {
            firebase.auth().signInWithEmailAndPassword(email, password )
                .then( user => loginUserSuccess( dispatch, user, navigation ) )
                .catch( error => loginUserFail( dispatch, error ) )
        }


    }

}


export const registerUser = ({ email, password, navigation }) => {

    return ( dispatch ) => {

        dispatch({ type: REGISTER_USER })

        if ( ! email ) {
            dispatch({ type: LOGIN_EMAIL_ERROR })
        }  
        
        if ( ! password ) {
            dispatch({ type: LOGIN_PASSWORD_ERROR })
        } 

        if ( email && password ) {
            firebase.auth().createUserWithEmailAndPassword( email, password )
                .then( () => registerUserSuccess( dispatch, navigation ) )
                .catch( error => registerUserFail( dispatch, error ) )
        }


    }


}


const loginUserSuccess = ( dispatch, user, navigation ) => {

    dispatch({ 
        type: LOGIN_USER_SUCCESS, 
        payload: user 
    })

    navigation.navigate( 'Home' )

}

const registerUserSuccess = ( dispatch ) => {

    dispatch({ type: REGISTER_USER_SUCCESS })

}

const loginUserFail = ( dispatch, error ) => {

    dispatch({ 
        type: LOGIN_USER_FAIL,
        payload: `${error}`
    })
}

const registerUserFail = ( dispatch, error ) => {
 
    dispatch({ 
        type: REGISTER_USER_FAIL,
        payload: `${error}`
    })
}
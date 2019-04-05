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
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    registered: false,
    loginError: '',
    registerError: '',
    emailError: '',
    passwordError: '',
    loading: false
}

export default ( state = INITIAL_STATE, action ) => {

    switch( action.type ) {

        case EMAIL_CHANGED:
            return { ...state, emailError: '', email: action.payload }

        case PASSWORD_CHANGED:
            return { ...state, passwordError: '', password: action.payload }

        case CLEAR_FIELD_ERROR:

            return { ...state, [action.payload]: ''}

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload }

        case LOGIN_USER_FAIL:
            return { ...state, loginError: action.payload, loading: false }

        case LOGIN_EMAIL_ERROR:
            return { ...state, emailError: 'Enter email', loading: false, loginError: ''  }

        case LOGIN_PASSWORD_ERROR:
            return { ...state, passwordError: 'Enter password', loading: false, loginError: ''  }

        case LOGIN_USER:
            return { ...state, loading: true, loginError: '',  emailError: '', passwordError: '' }

        case REGISTER_USER:
            return { ...state, loading: true, registerError: '',  emailError: '', passwordError: '' }
            
        case REGISTER_USER_FAIL:
            return { ...state, registerError: action.payload, loading: false }
            
        case REGISTER_USER_SUCCESS:
            return {  ...state, ...INITIAL_STATE, registered: true }

        case CLEAR_PROPS:
            return {  ...state, ...INITIAL_STATE }

        default: 
            return state
    }


}
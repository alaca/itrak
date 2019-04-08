import {
    USERS_FETCHED,
} from '../actions/types'

const INITIAL_STATE = {
    users: []
}

export default ( state = INITIAL_STATE, action ) => {

    switch( action.type ) {

        case USERS_FETCHED:
            return { ...state, users: action.payload }

        default: 
            return state
    }


}
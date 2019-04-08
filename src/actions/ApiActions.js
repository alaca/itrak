import { USERS_FETCHED } from './types'

export const usersFetched = users => {
    return {
        type: USERS_FETCHED,
        payload: users
    }
}

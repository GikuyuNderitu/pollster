import {AUTH_ATTEMPT, AUTH_FAILURE, AUTH_SUCCESS} from '../actions/types'
const initialState = {
    authAttempt: false,
    isAuthenticated: false,
    user: null,
    authError: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case AUTH_ATTEMPT:
            return {...state, authAttempt: true}
        case AUTH_SUCCESS:
            return {...state, authAttempt: false, isAuthenticated: true, user: action.payload}
        case AUTH_FAILURE:
            return {...state, authError: action.payload}
        default:
            return state
    }
    return state
}
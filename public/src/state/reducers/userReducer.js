import {
    AUTH_ATTEMPT, 
    AUTH_FAILURE, 
    AUTH_SUCCESS,

    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    REGISTER_ATTEMPT,
    REGISTER_FAILURE,
    REGISTER_SUCCESS } from '../actions/types'
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
            return {...state, authAttempt: false, authError: action.payload}
        case LOGIN_ATTEMPT:
            return {...state, authAttempt: true}
        case LOGIN_SUCCESS:
            return {...state, authAttempt: false, isAuthenticated: true, user: action.payload}
        case LOGIN_FAILURE:
            return {...state, authAttempt: false, authError: action.payload}
        case REGISTER_ATTEMPT:
            return {...state, authAttempt: true}
        case REGISTER_SUCCESS:
            return {...state, authAttempt: false, isAuthenticated: true, user: action.payload}
        case REGISTER_FAILURE:
            return {...state, authAttempt: false, authError: action.payload}    
        default:
            return state
    }
}
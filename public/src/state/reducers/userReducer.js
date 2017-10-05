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
            console.log('auth attempt occurred');
            return {...state, authAttempt: true}
        case AUTH_SUCCESS:
            // console.log('auth error occurred');
            return {...state, authAttempt: false, isAuthenticated: true, user: action.payload}
        case AUTH_FAILURE:
            console.log('auth error occurred');    
            return {...state, authError: action.payload}
        default:
            return state
    }
}
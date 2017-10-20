import {
    USER_GET_ATTEMPT,
    USER_GET_SUCCESS,
    USER_GET_FAILURE,
} from '../actions/types'
const initialState = {
    user: undefined,
    loadingUser: false,
    getUserError: undefined
}

export default (state=initialState, action) => {
    switch(action.type) {
        case USER_GET_ATTEMPT:
            return {...state, loadingUser: true, user: undefined}
        case USER_GET_SUCCESS:
            return {...state, loadingUser: false, user: action.payload, getUserError: undefined}
        case USER_GET_FAILURE:
            return {...state, loadingUser: false, getUserError: action.payload}
        default:
            return state
    }
}
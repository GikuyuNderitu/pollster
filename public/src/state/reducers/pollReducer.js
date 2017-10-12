import {
    POLL_CREATE_ATTEMPT,
    POLL_CREATE_SUCCESS,
    POLL_CREATE_FAILURE,
} from '../actions/types'

const initialState = {
    sendingPoll: false,
    pollError: undefined,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case POLL_CREATE_ATTEMPT:
            return {...state, sendingPoll: true}
        case POLL_CREATE_SUCCESS:
            return {...initialState}
        case POLL_CREATE_FAILURE:
            return {...state, sendingPoll: false, pollError: action.payload}
        default:
            return state
    }
}
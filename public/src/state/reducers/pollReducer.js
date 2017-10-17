import {
    POLL_CREATE_ATTEMPT,
    POLL_CREATE_SUCCESS,
    POLL_CREATE_FAILURE,

    POLL_GET_ATTEMPT,
    POLL_GET_FAILURE,
    POLL_GET_SUCCESS,

    OPTION_CREATE_ATTEMPT,
    OPTION_CREATE_SUCCESS,
    OPTION_CREATE_FAILURE,
} from '../actions/types'

const initialState = {
    sendingPoll: false,
    pollError: undefined,
    gettingPolls: false,
    polls: [],
    sendingOption: false,
    optionError: undefined
}

export default (state=initialState, action) => {
    switch(action.type) {
        case POLL_CREATE_ATTEMPT:
            return {...state, sendingPoll: true}
        case POLL_CREATE_SUCCESS:
            return {...state, sendingPoll: false, pollError: undefined}
        case POLL_CREATE_FAILURE:
            return {...state, sendingPoll: false, pollError: action.payload}
        case POLL_GET_ATTEMPT:
            return {...state, gettingPolls: true}
        case POLL_GET_SUCCESS:
            return {...state, gettingPolls: false, polls: action.payload, pollError: undefined}
        case POLL_GET_FAILURE:
            return {...state, gettingPolls: false, pollError: action.payload}
        case OPTION_CREATE_ATTEMPT:
            return {...state, sendingOption: true}
        case OPTION_CREATE_SUCCESS:
            return {...state, sendingOption: false, optionError: undefined}
        case OPTION_CREATE_FAILURE:
            return {...state, sendingOption: false, optionError: action.payload}
        default:
            return state
    }
}
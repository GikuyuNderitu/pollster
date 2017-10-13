import {
    POLL_CREATE_ATTEMPT,
    POLL_CREATE_SUCCESS,
    POLL_CREATE_FAILURE,

    POLL_GET_ATTEMPT,
    POLL_GET_SUCCESS,
    POLL_GET_FAILURE,
} from './types'

export const handlePollCreateAttempt = payload => ({type: POLL_CREATE_ATTEMPT, payload})
export const handlePollCreateSuccess = () => ({type: POLL_CREATE_SUCCESS})
export const handlePollCreateFailure = payload => ({type: POLL_CREATE_FAILURE, payload})

export const handlePollGetAttempt = () => ({type: POLL_GET_ATTEMPT})
export const handlePollGetSuccess = payload => ({type: POLL_GET_SUCCESS, payload})
export const handlePollGetFailure = payload => ({type: POLL_GET_FAILURE, payload})
import {
    POLL_CREATE_ATTEMPT,
    POLL_CREATE_SUCCESS,
    POLL_CREATE_FAILURE,
} from './types'

export const handlePollCreateAttempt = payload => ({type: POLL_CREATE_ATTEMPT, payload})
export const handlePollCreateSuccess = () => ({type: POLL_CREATE_SUCCESS})
export const handlePollCreateFailure = payload => ({type: POLL_CREATE_FAILURE, payload})
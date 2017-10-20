import {
    USER_GET_ATTEMPT,
    USER_GET_SUCCESS,
    USER_GET_FAILURE
} from './types'

export const handleUserGetAttempt = payload => ({type: USER_GET_ATTEMPT, payload})
export const handleUserGetSuccess = payload => ({type: USER_GET_SUCCESS, payload})
export const handleUserGetFailure = payload => ({type: USER_GET_FAILURE, payload})
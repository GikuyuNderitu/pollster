import {AUTH_SUCCESS, AUTH_ATTEMPT, AUTH_FAILURE} from './types';

export const handleAuthSuccess = payload => ({type: AUTH_SUCCESS, payload});
export const handleAuthFailure = payload => ({type: AUTH_FAILURE, payload});
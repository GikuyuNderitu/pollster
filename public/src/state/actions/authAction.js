import { 
    AUTH_SUCCESS,
    AUTH_ATTEMPT,
    AUTH_FAILURE, 

    REGISTER_ATTEMPT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './types';

export const handleAuthAttempt = payload => ({type: AUTH_ATTEMPT, payload});
export const handleAuthSuccess = payload => ({type: AUTH_SUCCESS, payload});
export const handleAuthFailure = payload => ({type: AUTH_FAILURE, payload});

export const handleRegisterAttempt = payload => ({type: REGISTER_ATTEMPT, payload});
export const handleRegisterSuccess = payload => ({type: REGISTER_SUCCESS, payload});
export const handleRegisterFailure = payload => ({type: REGISTER_FAILURE, payload});
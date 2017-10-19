import { 
    AUTH_SUCCESS,
    AUTH_ATTEMPT,
    AUTH_FAILURE,

    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    REGISTER_ATTEMPT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    USER_LOGOUT } from './types';

export const handleAuthAttempt = () => ({type: AUTH_ATTEMPT});
export const handleAuthSuccess = payload => ({type: AUTH_SUCCESS, payload});
export const handleAuthFailure = payload => ({type: AUTH_FAILURE, payload});

export const handleLoginAttempt = payload => ({type: LOGIN_ATTEMPT, payload});
export const handleLoginSuccess = payload => ({type: LOGIN_SUCCESS, payload});
export const handleLoginFailure = payload => ({type: LOGIN_FAILURE, payload});

export const handleRegisterAttempt = payload => ({type: REGISTER_ATTEMPT, payload});
export const handleRegisterSuccess = payload => ({type: REGISTER_SUCCESS, payload});
export const handleRegisterFailure = payload => ({type: REGISTER_FAILURE, payload});

export const handleLogout = payload => ({type: USER_LOGOUT})
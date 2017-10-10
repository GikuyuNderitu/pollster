import {combineEpics} from 'redux-observable'
import {
    userAuthenticateEpic,
    userRegisterEpic,
    userLoginEpic,
} from './authEpic';

export default combineEpics(
    userAuthenticateEpic,
    userRegisterEpic,
    userLoginEpic
)
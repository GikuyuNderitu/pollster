import {combineEpics} from 'redux-observable'
import {
    userAuthenticateEpic,
    userRegisterEpic,
    userLoginEpic,
} from './authEpic';

import {
    pollCreateEpic,
    pollGetAllEpic,
    pollSuccessfulCreateEpic
} from './pollEpic'

export default combineEpics(
    userAuthenticateEpic,
    userRegisterEpic,
    userLoginEpic,

    pollCreateEpic,
    pollGetAllEpic,
    pollSuccessfulCreateEpic
)
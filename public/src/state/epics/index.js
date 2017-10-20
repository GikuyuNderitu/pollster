import {combineEpics} from 'redux-observable'
import {
    userAuthenticateEpic,
    userRegisterEpic,
    userLoginEpic,
} from './authEpic';

import {
    pollCreateEpic,
    pollGetAllEpic,
    pollSuccessfulCreateEpic,

    optionCreateEpic,
    optionSuccessfulCreateEpic
} from './pollEpic'

import {
    getUserEpic
} from './userEpic'

export default combineEpics(
    userAuthenticateEpic,
    userRegisterEpic,
    userLoginEpic,

    pollCreateEpic,
    pollGetAllEpic,
    pollSuccessfulCreateEpic,

    optionCreateEpic,
    optionSuccessfulCreateEpic,

    getUserEpic
)
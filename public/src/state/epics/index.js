import {combineEpics} from 'redux-observable'
import {
    userRegisterEpic,
    userLoginEpic,
} from './authEpic';

export default combineEpics(
    userRegisterEpic,
    userLoginEpic
)
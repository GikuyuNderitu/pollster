import {combineReducers} from 'redux';

import auth from './authReducer'
import poll from './pollReducer'
import user from './userReducer'

export default combineReducers({
    auth,
    poll,
    user,
})
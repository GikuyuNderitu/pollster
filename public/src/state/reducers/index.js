import {combineReducers} from 'redux';

import auth from './userReducer'
import poll from './pollReducer'

export default combineReducers({
    auth,
    poll,
})
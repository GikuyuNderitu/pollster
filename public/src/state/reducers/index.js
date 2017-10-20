import {combineReducers} from 'redux';

import auth from './authReducer'
import poll from './pollReducer'

export default combineReducers({
    auth,
    poll,
})
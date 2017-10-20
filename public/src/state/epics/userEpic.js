import {
    USER_GET_ATTEMPT,
} from '../actions/types'

import {
    handleUserGetSuccess,
    handleUserGetFailure
} from '../actions/userActions'

import {
    fetchGet
} from '../../utils'

import 'rxjs'

import { Observable } from 'rxjs/Observable'

export const getUserEpic = (action$, state) => 
    action$.ofType(USER_GET_ATTEMPT)
        .mergeMap(({payload}) => 
            Observable.fromPromise(fetchGet(`/api/users/${payload}`))
            .map(response => handleUserGetSuccess(response))
            .catch(err => Observable.of(handleUserGetFailure(err)))
        )
import {
    REGISTER_ATTEMPT,
    AUTH_ATTEMPT } from '../actions/types';
import {handleAuthFailure, handleAuthSuccess} from '../actions/authAction';

import {Observable} from 'rxjs/Observable'

import {fetchPost} from '../../utils';

import 'rxjs'
import 'rxjs/add/operator/map'

export const userRegisterEpic = (action$_, store) =>
    action$_.ofType(REGISTER_ATTEMPT)
        .mergeMap(({payload}) => 
            Observable.fromPromise(fetchPost(`/api/users`, payload))
            .map(response => handleAuthSuccess(response))
            .catch(err => Observable.of(handleAuthFailure(err)))
        )

export const userLoginEpic = (action$_, store) =>
    action$_.ofType(AUTH_ATTEMPT)
        .mergeMap(({payload}) =>
            Observable.fromPromise(fetchPost(`/api/users/login`, payload))
            .map(response => handleAuthSuccess(response))
            .catch(err => Observable.of(handleAuthFailure(err)))
        )
import {
    LOGIN_ATTEMPT,
    REGISTER_ATTEMPT,
    AUTH_ATTEMPT } from '../actions/types';
import {
    handleAuthFailure, 
    handleAuthSuccess,

    handleLoginSuccess,
    handleLoginFailure,

    handleRegisterSuccess, 
    handleRegisterFailure} from '../actions/authAction';

import {Observable} from 'rxjs/Observable'

import { 
    fetchPost,
    fetchGet } from '../../utils';

import 'rxjs'
import 'rxjs/add/operator/map'

export const userAuthenticateEpic = (action$_, store) =>
    action$_.ofType(AUTH_ATTEMPT)
        .mergeMap(() =>
            Observable.fromPromise(fetchGet(`/api/authenticate`))
            .map(response => handleAuthSuccess(response))
            .catch(err => Observable.of(handleAuthFailure(err)))
        )

export const userRegisterEpic = (action$_, store) =>
    action$_.ofType(REGISTER_ATTEMPT)
        .mergeMap(({payload}) => 
            Observable.fromPromise(fetchPost(`/api/users`, payload))
            .map(response => handleRegisterSuccess(response))
            .catch(err => Observable.of(handleRegisterFailure(err)))
        )

export const userLoginEpic = (action$_, store) =>
    action$_.ofType(LOGIN_ATTEMPT)
        .mergeMap(({payload}) =>
            Observable.fromPromise(fetchPost(`/api/users/login`, payload))
            .map(response => handleLoginSuccess(response))
            .catch(err => Observable.of(handleLoginFailure(err)))
        )
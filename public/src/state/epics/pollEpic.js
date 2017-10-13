import {
    POLL_CREATE_ATTEMPT,
    POLL_GET_ATTEMPT,
    POLL_CREATE_FAILURE,
    POLL_CREATE_SUCCESS
} from '../actions/types'

import {
    handlePollCreateSuccess,
    handlePollCreateFailure,

    handlePollGetAttempt,
    handlePollGetSuccess,
    handlePollGetFailure
} from '../actions/pollAction'

import {Observable} from 'rxjs/Observable'

import {fetchPost, fetchGet} from '../../utils'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

export const pollCreateEpic = (action$_, store) =>
    action$_.ofType(POLL_CREATE_ATTEMPT)
        .mergeMap(({payload}) => 
            Observable.fromPromise(fetchPost('/api/polls', payload))
                .map(response => handlePollCreateSuccess())
                .catch(err => Observable.of(handlePollCreateFailure(err)))
        )

export const pollGetAllEpic = (action$_, store) =>
    action$_.ofType(POLL_GET_ATTEMPT)
        .mergeMap(() => 
            Observable.fromPromise(fetchGet('/api/polls'))
                .map(response => handlePollGetSuccess(response))
                .catch(err => Observable.of(handlePollGetFailure(err)))
        )

export const pollSuccessfulCreateEpic = (action$_, store) =>
    action$_.ofType(POLL_CREATE_SUCCESS)
        .map(() => handlePollGetAttempt())
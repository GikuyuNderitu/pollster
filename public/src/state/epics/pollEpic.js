import {
    POLL_CREATE_ATTEMPT,
} from '../actions/types'

import {
    handlePollCreateSuccess,
    handlePollCreateFailure,
} from '../actions/pollAction'

import {Observable} from 'rxjs/Observable'

import {fetchPost} from '../../utils'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

export const pollCreateEpic = (action$_, store) =>
    action$_.ofType(POLL_CREATE_ATTEMPT)
        .mergeMap(({payload}) => 
            Observable.fromPromise(fetchPost('/api/polls', payload))
                .map(response => handlePollCreateSuccess())
                .catch(err => Observable.of(handlePollCreateFailure(err)))
        )
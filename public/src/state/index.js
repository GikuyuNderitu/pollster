import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable'
import epics from './epics'
import reducer from './reducers'

export default createStore(
    reducer,
    compose(
        applyMiddleware(createEpicMiddleware(epics)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
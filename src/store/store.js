import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import homeReducer from '../pages/home/homeReducer'

const showLogs = true

let middlewares = [] // Not used atm but if needed ready for use

if (showLogs) {
	middlewares.push(createLogger({
		collapsed: true,
		// predicate: (getState, action) => action.type !== 'SOME_STRING'
	}));
}

const reducer = combineReducers({
	home: homeReducer
})

export function getStore(preloadedState) {
	return createStore(reducer, preloadedState, applyMiddleware(...middlewares))
}

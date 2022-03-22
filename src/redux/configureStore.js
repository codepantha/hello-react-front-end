import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingsReducer from './greetings';

const rootReducer = combineReducers({ greetingsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

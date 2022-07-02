import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';

const AllReducers = combineReducers({ countriesReducer });
const store = createStore(AllReducers, applyMiddleware(logger, thunk));

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';

import routing from './model/routing/routingReducer';

const reducers = combineReducers({
    routing,
});

const store = createStore(reducers, applyMiddleware());

export default store;

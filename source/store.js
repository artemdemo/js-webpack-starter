import { createStore, combineReducers, applyMiddleware } from 'redux';

import counter from './model/counter/counterReducer';
import routing from './model/routing/routingReducer';

const reducers = combineReducers({
    counter,
    routing,
});

const store = createStore(reducers, applyMiddleware());

export default store;

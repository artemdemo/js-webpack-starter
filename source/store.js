import { createStore, combineReducers, applyMiddleware } from 'redux';

import counter from './model/counter/counterReducer';
import items from './model/items/itemsReducer';
import routing from './model/routing/routingReducer';

const reducers = combineReducers({
    counter,
    items,
    routing,
});

const store = createStore(reducers, applyMiddleware());

export default store;

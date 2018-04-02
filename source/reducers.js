import { combineReducers } from 'redux';

import cart from './model/cart/cartReducer';
import counter from './model/counter/counterReducer';
import items from './model/items/itemsReducer';
import routing from './model/routing/routingReducer';

const reducers = combineReducers({
    cart,
    counter,
    items,
    routing,
});

export default reducers;

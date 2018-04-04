import { combineReducers } from 'redux';

import cart from './model/cart/cartReducer';
import items from './model/items/itemsReducer';
import routing from './model/routing/routingReducer';

const reducers = combineReducers({
    cart,
    items,
    routing,
});

export default reducers;

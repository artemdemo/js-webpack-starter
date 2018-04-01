import * as routingCons from './routingConstants';

const initialState = {};

export default function routingReducer(state = initialState, action) {
    switch(action.type) {
        case routingCons.SET_ROUTING_CTX:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

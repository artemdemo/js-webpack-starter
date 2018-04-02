import * as routingConst from './routingConstants';

const initialState = {};

export default function routingReducer(state = initialState, action) {
    switch(action.type) {
        case routingConst.SET_ROUTING_CTX:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

import * as routingCons from './routingConstants';

export function setRoutingCtx(data) {
    return {
        type: routingCons.SET_ROUTING_CTX,
        data,
    };
}

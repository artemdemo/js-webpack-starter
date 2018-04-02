import * as routingConst from './routingConstants';

export function setRoutingCtx(data) {
    return {
        type: routingConst.SET_ROUTING_CTX,
        data,
    };
}

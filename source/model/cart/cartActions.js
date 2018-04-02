import * as cartConst from './cartConstants';

export function addToCart(item) {
    return {
        type: cartConst.ADD_TO_CART,
        item,
    };
}

export function removeFromCart(id) {
    return {
        type: cartConst.REMOVE_FROM_CART,
        id,
    };
}

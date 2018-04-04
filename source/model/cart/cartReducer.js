import * as cartConst from './cartConstants';
import * as $ from '../../services/$';

const initialState = {
    data: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartConst.ADD_TO_CART:
            return Object.assign({}, state, {
                data: [
                    ...state.data,
                    Object.assign({}, action.item, {
                        cartId: $.guid(),
                    }),
                ],
            });
        case cartConst.REMOVE_FROM_CART:
            return Object.assign({}, state, {
                data: state.data.filter(item => item.cartId !== action.id),
            });
        default:
            return state;
    }
};

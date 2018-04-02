import * as cartConst from './cartConstants';

const initialState = {
    data: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartConst.ADD_TO_CART:
            return Object.assign({}, state, {
                data: [
                    ...state.data,
                    action.item,
                ],
            });
        case cartConst.REMOVE_FROM_CART:
            return Object.assign({}, state, {
                data: state.data.filter(item => item.id !== action.id),
            });
        default:
            return state;
    }
};

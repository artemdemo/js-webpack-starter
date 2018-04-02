import * as counterCons from './counterConstants';

const initialState = {
    value: 0,
};

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case counterCons.COUNTER_ADD:
            return Object.assign({}, state, {
                value: state.value + 1,
            });
        case counterCons.COUNTER_SUBTRACT:
            return Object.assign({}, state, {
                value: state.value - 1,
            });
        default:
            return state;
    }
}

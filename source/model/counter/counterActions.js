import * as counterConst from './counterConstants';

export function counterAdd() {
    return {
        type: counterConst.COUNTER_ADD,
    };
}

export function counterSubtract() {
    return {
        type: counterConst.COUNTER_SUBTRACT,
    };
}

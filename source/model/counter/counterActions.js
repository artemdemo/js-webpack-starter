import * as counterCons from './counterConstants';

export function counterAdd() {
    return {
        type: counterCons.COUNTER_ADD,
    };
}

export function counterSubtract() {
    return {
        type: counterCons.COUNTER_SUBTRACT,
    };
}

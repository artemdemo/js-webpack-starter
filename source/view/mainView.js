import { html } from 'lit-html/lib/lit-extended';
import store from '../store';
import { counterAdd, counterSubtract } from '../model/counter/counterActions';

const mainView = (countValue) => {
    const sub = () => {
        store.dispatch(counterSubtract());
    };

    const add = () => {
        store.dispatch(counterAdd());
    };

    return html`
        <h4>Main View</h4>
        <button
            type='button'
            class='btn btn-dark'
            on-click=${sub}
        >
            -
        </button>
        <span>${countValue}</span>
        <button
            type='button'
            class='btn btn-dark'
            on-click=${add}
        >
            +
        </button>
    `;
};

export default mainView;

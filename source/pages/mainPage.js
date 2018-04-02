import { html } from 'lit-html/lib/lit-extended';
import store from '../store';
import { counterAdd, counterSubtract } from '../model/counter/counterActions';

const countView = (value) => html`<span>${value}</span>`;

const mainPage = (countValue) => {
    const sub = () => {
        store.dispatch(counterSubtract());
    };

    const add = () => {
        store.dispatch(counterAdd());
    };

    return html`
        <h4>Main Page</h4>
        <button
            type='button'
            class='btn btn-dark'
            on-click=${sub}
        >
            -
        </button>
        ${countView(countValue)}
        <button
            type='button'
            class='btn btn-dark'
            on-click=${add}
        >
            +
        </button>
    `;
};

export default mainPage;

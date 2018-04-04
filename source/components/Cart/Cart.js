import { html, render } from 'lit-html/lib/lit-extended';
import page from 'page';
import classnames from 'classnames';
import * as nodes from '../../services/nodes';
import store from '../../store';
import icon from '../../views/icon/icon';

import './Cart.pcss';

const cartView = (amount = 0) => {
    const amountClass = classnames({
        'cart-amount': true,
        'cart-amount_visible': amount > 0,
    });
    const openCartPage = () => page('/cart');
    return html`
        <div class='cart' on-click=${openCartPage}>
            <div class$=${amountClass}>
                <div class='cart-amount__number'>${amount}</div>
            </div>
            ${icon({name: 'shopping-cart', className: 'cart__icon'})}
        </div>
    `;
};

class Cart extends HTMLElement {
    constructor() {
        super();
        this.storeUnsubscribe = null;
    }

    renderView() {
        const { cart } = store.getState();
        render(cartView(cart.data.length), this);
    }

    onStoreChange = () => {
        this.renderView();
    };

    disconnectedCallback() {
        this.storeUnsubscribe();
    }

    connectedCallback() {
        nodes.noChildren(this, 'Cart');
        this.storeUnsubscribe = store.subscribe(this.onStoreChange);
        this.renderView();
    }
}
window.customElements.define('app-cart', Cart);

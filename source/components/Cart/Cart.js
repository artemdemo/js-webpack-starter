import { html, render } from 'lit-html/lib/lit-extended';
import * as nodes from '../../services/nodes';
import icon from '../../views/icon/icon';

import './Cart.pcss';

const cartView = () => html`
    ${icon({name: 'shopping-cart', className: 'cart'})}
`;

class Cart extends HTMLElement {
    connectedCallback() {
        nodes.noChildren(this, 'Cart');
        render(cartView(), this);
    }
}
window.customElements.define('app-cart', Cart);

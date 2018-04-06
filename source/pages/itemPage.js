import { html } from 'lit-html/lib/lit-extended';
import store from '../store';
import { addToCart } from '../model/cart/cartActions';

const itemPage = (itemId) => {
    const { items } = store.getState();
    const item = items.data.find(_item => _item.id === itemId);
    console.log(items.data);
    console.log(item);
    return html`
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button
            type='button'
            class='btn btn-primary'
            on-click=${() => store.dispatch(addToCart(item))}
        >
            Add to cart
        </button>
    `;
};

export default itemPage;

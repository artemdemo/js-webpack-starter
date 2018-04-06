import { html } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';
import store from '../store';
import { addToCart } from '../model/cart/cartActions';

const singleItemView = (item) => {
    const addItemToCart = (selectedItem) => {
        store.dispatch(addToCart(selectedItem));
    };
    return html`
        <div class='col-md-4'>
            <div class='card'>    
                <div class='card-body'>
                    <h5 class='card-title'>
                        <a href='/shop/${item.id}'>${item.name}</a>
                    </h5>
                    <p class='card-text'>
                        ${item.description}
                    </p>
                    <button
                        type='button'
                        class='btn btn-primary'
                        on-click=${() => addItemToCart(item)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    `;
};

const shopPage = (items) => html`
    <h4>Shop</h4>
    <div class='row'>
        ${repeat(
            items,
            i => i.id,
            singleItemView
        )}
    </div>
`;

export default shopPage;

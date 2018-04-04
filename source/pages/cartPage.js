import { html } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';

const cartItemView = item => html`
    <li class='list-group-item'>
        <strong>${item.name}</strong>
        $${item.price}
    </li>
`;

const cartItemsView = cartItems => html`
<ul class='list-group'>
    ${repeat(
        cartItems,
        item => item.cartId,
        cartItemView
    )}
</ul>
`;

const cartPage = (cartItems) => {
    const contentView = (() => {
        if (cartItems.length === 0) {
            return html`
                <p>There is no items in the cart, go to <route-link href='/shop'>shop</route-link></p>
            `;
        }
        return cartItemsView(cartItems);
    })();
    return html`
        <h4>Cart</h4>
        ${contentView}
    `;
};

export default cartPage;

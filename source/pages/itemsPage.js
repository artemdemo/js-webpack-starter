import { html } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';

const singleItem = (item) => {
    const addItemToCart = (selectedItem) => {
        console.log('add to cart', selectedItem);
    };
    return html`
        <div class='col-md-4'>
            <div class='card'>    
                <div class='card-body'>
                    <h5 class='card-title'>
                        <a href='/items/${item.id}'>${item.name}</a>
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

const itemsView = (items) => html`
    <h4>Items</h4>
    <div class='row'>
        ${repeat(
            items,
            i => i.id,
            singleItem
        )}
    </div>
`;

export default itemsView;

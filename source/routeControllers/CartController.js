import { render } from 'lit-html/lib/lit-extended';
import cartPage from '../pages/cartPage';
import BaseController from './BaseController';
import store from '../store';

class CartController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        const { cart } = store.getState();
        render(cartPage(cart.data), this.routeEl);
    };
}

export default CartController;

import { render } from 'lit-html/lib/lit-extended';
import cartPage from '../pages/cartPage';
import BaseController from './BaseController';

class CartController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        render(cartPage(), this.routeEl);
    };
}

export default CartController;

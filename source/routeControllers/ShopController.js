import { render } from 'lit-html/lib/lit-extended';
import itemsView from '../pages/shopPage';
import BaseController from './BaseController';
import store from '../store';

class ShopController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        const { items } = store.getState();
        render(itemsView(items.data), this.routeEl);
    };
}

export default ShopController;

import { render } from 'lit-html';
import itemsView from '../pages/itemsPage';
import BaseController from './BaseController';
import store from '../store';

class ItemsController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        const { items } = store.getState();
        render(itemsView(items.data), this.routeEl);
    };
}

export default ItemsController;

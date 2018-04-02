import { render } from 'lit-html';
import store from '../store';
import itemPage from '../pages/itemPage';
import BaseController from './BaseController';

class ItemController extends BaseController {
    constructor(routeEl) {
        super();
        this.routeEl = routeEl;
        this.storeUnsubscribe = null;
    }

    routeExit(ctx, next) {
        this.storeUnsubscribe();
        next();
    };

    routeEnter() {
        this.storeUnsubscribe = store.subscribe(this.onStoreChange);
        this.renderView();
    };

    onStoreChange = () => {
        this.renderView();
    };

    renderView() {
        const { routing } = store.getState();
        const { params } = routing;
        render(itemPage(params.itemId), this.routeEl);
    };
}

export default ItemController;

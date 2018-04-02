import { render } from 'lit-html';
import store from '../store';
import mainPage from '../pages/mainPage';
import BaseController from './BaseController';

class MainController extends BaseController {
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
        const { counter } = store.getState();
        render(mainPage(counter.value), this.routeEl);
    };
}

export default MainController;

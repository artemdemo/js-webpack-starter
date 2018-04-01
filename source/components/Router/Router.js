import page from 'page';
import * as nodes from '../../services/nodes';

import { setRoutingCtx } from '../../model/routing/routingActions';
import store from '../../store';

import itemController from '../../controllers/itemController';
import mainController from '../../controllers/mainController';
import secondController from '../../controllers/secondController';

export const routing = (() => {
    return {
        init(routeEl) {

            page('*', (ctx, next) => {
                store.dispatch(setRoutingCtx(ctx));
                next();
            });
            page('/', mainController.bind(null, routeEl));
            page('/second', secondController.bind(null, routeEl));
            page('/items/:itemId', itemController.bind(null, routeEl));
            page();
        },
    }
})();

class Router extends HTMLElement {
    connectedCallback() {
        nodes.noChildren(this, 'Router');
        routing.init(this);
    }
}
window.customElements.define('router-x', Router);

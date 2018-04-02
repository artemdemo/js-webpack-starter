import page from 'page';
import * as nodes from '../../services/nodes';

import { setRoutingCtx } from '../../model/routing/routingActions';
import store from '../../store';

import ItemController from '../../controllers/ItemController';
import MainController from '../../controllers/MainController';
import SecondController from '../../controllers/SecondController';

export const routing = (() => {
    return {
        init(routeEl) {

            page('*', (ctx, next) => {
                store.dispatch(setRoutingCtx(ctx));
                next();
            });

            const mainController = new MainController(routeEl);
            page('/', mainController.routeEnter.bind(mainController));
            page.exit('/', mainController.routeExit.bind(mainController));

            const secondController = new SecondController(routeEl);
            page('/second', secondController.routeEnter.bind(secondController));
            page.exit('/second', secondController.routeExit.bind(mainController));

            const itemController = new ItemController(routeEl);
            page('/items/:itemId', itemController.routeEnter.bind(itemController));
            page.exit('/items/:itemId', itemController.routeExit.bind(itemController));

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

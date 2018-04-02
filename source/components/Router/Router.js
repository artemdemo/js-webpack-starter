import page from 'page';
import * as nodes from '../../services/nodes';

import { setRoutingCtx } from '../../model/routing/routingActions';
import store from '../../store';

import ItemController from '../../controllers/ItemController';
import MainController from '../../controllers/MainController';
import SecondController from '../../controllers/SecondController';

const routesMap = [
    {
        path: '/',
        Controller: MainController,
    },
    {
        path: '/second',
        Controller: SecondController,
    },
    {
        path: '/items/:itemId',
        Controller: ItemController,
    }
];

export const routing = (() => {
    return {
        init(routeEl) {

            page('*', (ctx, next) => {
                store.dispatch(setRoutingCtx(ctx));
                next();
            });

            routesMap.forEach((item) => {
                const controller = new item.Controller(routeEl);
                page(item.path, controller.routeEnter.bind(controller));
                page.exit(item.path, controller.routeExit.bind(controller));
            });

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

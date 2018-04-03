import page from 'page';
import * as nodes from '../../services/nodes';

import { setRoutingCtx } from '../../model/routing/routingActions';
import store from '../../store';

import AboutController from '../../routeControllers/AboutController';
import ItemController from '../../routeControllers/ItemController';
import ItemsController from '../../routeControllers/ItemsController';
import MainController from '../../routeControllers/MainController';

const routesMap = [
    {
        path: '/',
        Controller: MainController,
    },
    {
        path: '/about',
        Controller: AboutController,
    },
    {
        path: '/items',
        Controller: ItemsController,
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
window.customElements.define('app-router', Router);

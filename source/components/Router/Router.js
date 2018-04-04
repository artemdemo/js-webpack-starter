import page from 'page';
import * as nodes from '../../services/nodes';
import * as config from '../../config';

import { setRoutingCtx } from '../../model/routing/routingActions';
import store from '../../store';

import AboutController from '../../routeControllers/AboutController';
import CartController from '../../routeControllers/CartController';
import ItemController from '../../routeControllers/ItemController';
import ItemsController from '../../routeControllers/ItemsController';
import MainController from '../../routeControllers/MainController';
import NotFoundController from '../../routeControllers/NotFoundController';

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
    },
    {
        path: '/cart',
        Controller: CartController,
    },
    {
        path: '*',
        Controller: NotFoundController,
    },
];

export const routing = (() => {
    return {
        init(routeEl) {

            page.base(config.baseUrl);

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

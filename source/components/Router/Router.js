import page from 'page';
import * as nodes from '../../services/nodes';
import * as $ from '../../services/$';

import itemController from '../../controllers/itemController';
import mainController from '../../controllers/mainController';
import secondController from '../../controllers/secondController';

export const routing = (() => {
    let routeEl = null;
    return {
        init(_routeEl) {
            routeEl = _routeEl;

            page('/', () => {
                $.replaceChildren(routeEl, mainController());
            });

            page('/second', () => {
                $.replaceChildren(routeEl, secondController());
            });

            page('/items/:itemId', (ctx) => {
                $.replaceChildren(routeEl, itemController(ctx));
            });

            page();
        },

        getRouteEl() {
            return routeEl;
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

import page from 'page';
import * as nodes from '../../services/nodes';
import MainView from '../../views/MainView/MainView';

const routing = (() => {
    return {
        init() {
            page('/', () => {
                console.log('/');
            });
            
            page('/second', () => {
                console.log('/second');
            });
            
            page();
        }
    }
})();

class Router extends HTMLElement {
    connectedCallback() {
        routing.init();
        nodes.noChildren(this, 'Router');
    }
}
window.customElements.define('router-x', Router);

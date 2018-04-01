import MainMenu from '../MainMenu/MainMenu';
import Router from '../Router/Router';

import './AppRoot.pcss';

class AppRoot extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="mt-3">
                <div class="container">
                    <main-menu></main-menu>
                    <hr />
                    <router-x></router-x>
                </div>
            </div>
        `;
    }
}
window.customElements.define('app-root', AppRoot);

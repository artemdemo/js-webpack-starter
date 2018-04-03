import { html, render } from 'lit-html/lib/lit-extended';
import * as nodes from '../../services/nodes';
import '../MainMenu/MainMenu';
import '../Router/Router';

import './AppRoot.pcss';

const appRootView = () => html`
    <div class='mt-3'>
        <div class='container'>
            <main-menu></main-menu>
            <hr />
            <app-router></app-router>
        </div>
    </div>
`;

class AppRoot extends HTMLElement {
    connectedCallback() {
        nodes.noChildren(this, 'AppRoot');
        render(appRootView(), this);
    }
}
window.customElements.define('app-root', AppRoot);

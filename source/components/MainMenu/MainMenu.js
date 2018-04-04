import { html, render } from 'lit-html/lib/lit-extended';
import * as nodes from '../../services/nodes';

const mainMenuView = () => html`
    <div class="clearfix">
        <div class="float-left">
            <ul>
                <li><a href='/'>Main</a></li>
                <li><a href='/items'>Items</a>
                <li><a href='/about'>About</a></li>
            </ul>
        </div>
        <div class="float-right">
            <app-cart></app-cart>
        </div>
    </div>
`;

class MainMenu extends HTMLElement {
    connectedCallback() {
        nodes.noChildren(this, 'MainMenu');
        render(mainMenuView(), this);
    }
}
window.customElements.define('main-menu', MainMenu);

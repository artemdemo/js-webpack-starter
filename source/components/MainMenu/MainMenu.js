import { html, render } from 'lit-html/lib/lit-extended';
import * as nodes from '../../services/nodes';

const mainMenuView = () => html`
    <ul>
        <li><a href='/'>Main view</a></li>
        <li><a href='/about'>About view</a></li>
        <li><a href='/items'>Items</a>
    </ul>
`;

class MainMenu extends HTMLElement {
    connectedCallback() {
        nodes.noChildren(this, 'MainMenu');
        render(mainMenuView(), this);
    }
}
window.customElements.define('main-menu', MainMenu);

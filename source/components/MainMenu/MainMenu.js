import { html, render } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';
import * as nodes from '../../services/nodes';
import * as $ from '../../services/$';
import * as url from '../../services/url';

const menuMap = [
    {
        id: $.guid(),
        href: url.format('/'),
        name: 'Main',
    },
    {
        id: $.guid(),
        href: url.format('/items'),
        name: 'Items',
    },
    {
        id: $.guid(),
        href: url.format('/about'),
        name: 'About',
    },
];

const menuItemView = item => html`
    <li>
        <route-link href$=${item.href}>${item.name}</route-link>
    </li>
`;

const mainMenuView = () => html`
    <div class="clearfix">
        <div class="float-left">
            <ul>
                ${repeat(
                    menuMap,
                    i => i.id,
                    menuItemView
                )}
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

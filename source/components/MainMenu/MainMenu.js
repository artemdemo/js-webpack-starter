import * as nodes from '../../services/nodes';
import * as $ from '../../services/$';

class MainMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href="./">Main view</a></li>
                <li><a href="./second">Second view</a></li>
                <li>
                    Items view
                    <ul>
                        <li><a href="./items/item-01">Item 01</a></li>
                        <li><a href="./items/item-02">Item 02</a></li>
                    </ul>
            </ul>
        `;
    }
}
window.customElements.define('main-menu', MainMenu);

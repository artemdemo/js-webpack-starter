
class MainMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href='/'>Main view</a></li>
                <li><a href='/about'>About view</a></li>
                <li><a href='/items'>Items</a>
            </ul>
        `;
    }
}
window.customElements.define('main-menu', MainMenu);

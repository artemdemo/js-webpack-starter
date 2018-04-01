class MainView extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                Main View
            </div>
        `;
    }
}
window.customElements.define('main-view', MainView);

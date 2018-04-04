import classnames from 'classnames';
import * as $ from '../../services/$';
import store from '../../store';

import './RouteLink.pcss';

class RouteLink extends HTMLElement {
    static get observedAttributes() {
        return ['href'];
    }

    constructor() {
        super();
        this.storeUnsubscribe = null;
        this.aEl = null;
    }

    updateClassName(href) {
        const { routing } = store.getState();
        const newHref = href || this.getAttribute('href');
        this.aEl.setAttribute('class', classnames(
            {
                'route-link_active': routing.pathname === newHref,
            }
        ));
    }

    onStoreChange = () => {
        this.updateClassName();
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.aEl) {
            switch (name) {
                case 'href':
                    this.aEl.setAttribute('href', newValue);
                    this.updateClassName(newValue);
                    break;
            }
        }
    }

    disconnectedCallback() {
        this.storeUnsubscribe();
    }

    connectedCallback() {
        this.storeUnsubscribe = store.subscribe(this.onStoreChange);
        this.aEl = document.createElement('a');
        this.aEl.setAttribute('href', this.getAttribute('href'));
        this.updateClassName();
        this.aEl.innerHTML = this.innerHTML;
        $.replaceChildren(this, this.aEl);
    }
}
window.customElements.define('route-link', RouteLink);

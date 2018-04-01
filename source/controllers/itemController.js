import * as $ from '../services/$';
import store from '../store';

const itemController = (routeEl) => {
    const { routing } = store.getState();
    const { params } = routing;
    const divEl = document.createElement('div');
    divEl.innerText = `item:: ${params.itemId}`;
    $.replaceChildren(routeEl, divEl);
};

export default itemController;

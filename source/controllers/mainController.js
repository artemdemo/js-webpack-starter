import * as $ from '../services/$';

const mainController = (routeEl) => {
    const divEl = document.createElement('div');
    divEl.innerText = 'Main View';
    $.replaceChildren(routeEl, divEl);
};

export default mainController;

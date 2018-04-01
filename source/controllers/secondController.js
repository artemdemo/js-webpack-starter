import * as $ from '../services/$';

const secondController = (routeEl) => {
    const divEl = document.createElement('div');
    divEl.innerText = 'Second View';
    $.replaceChildren(routeEl, divEl);
};

export default secondController;

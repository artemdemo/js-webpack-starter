import { render } from 'lit-html';
import mainView from '../view/mainView';

const mainController = (routeEl) => {
    render(mainView(), routeEl);
};

export default mainController;

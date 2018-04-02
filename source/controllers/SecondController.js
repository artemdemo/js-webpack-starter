import { render } from 'lit-html';
import secondView from '../view/secondView';
import BaseController from './BaseController';

class SecondController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        render(secondView(), this.routeEl);
    };
}

export default SecondController;

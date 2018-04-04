import { render } from 'lit-html/lib/lit-extended';
import mainPage from '../pages/mainPage';
import BaseController from './BaseController';

class MainController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        render(mainPage(), this.routeEl);
    };
}

export default MainController;

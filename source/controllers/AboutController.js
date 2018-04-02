import { render } from 'lit-html';
import aboutView from '../view/aboutView';
import BaseController from './BaseController';

class AboutController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        render(aboutView(), this.routeEl);
    };
}

export default AboutController;

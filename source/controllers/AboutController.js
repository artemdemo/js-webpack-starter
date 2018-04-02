import { render } from 'lit-html';
import aboutPage from '../pages/aboutPage';
import BaseController from './BaseController';

class AboutController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        render(aboutPage(), this.routeEl);
    };
}

export default AboutController;

import { render } from 'lit-html/lib/lit-extended';
import notFoundPage from '../pages/notFoundPage';
import BaseController from './BaseController';

class NotFoundController extends BaseController {
    routeEnter() {
        this.renderView();
    };

    renderView() {
        render(notFoundPage(), this.routeEl);
    };
}

export default NotFoundController;

import { render } from 'lit-html';
import secondView from '../view/secondView';

const secondController = (routeEl) => {
    render(secondView(), routeEl)
};

export default secondController;

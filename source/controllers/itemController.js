import { render } from 'lit-html';
import itemView from '../view/itemView';
import store from '../store';

const itemController = (routeEl) => {
    const { routing } = store.getState();
    const { params } = routing;
    render(itemView(params.itemId), routeEl);
};

export default itemController;

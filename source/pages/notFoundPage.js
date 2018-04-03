import { html } from 'lit-html/lib/lit-extended';
import icon from '../views/icon/icon';

const notFoundPage = () => html`
    <h4>${icon({name: 'exclamation-triangle'})} Wrong route :(</h4>
`;

export default notFoundPage;

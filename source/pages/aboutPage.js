import { html } from 'lit-html/lib/lit-extended';
import icon from '../views/icon/icon';

const aboutPage = () => html`
    <h4>${icon({name: 'info-circle'})} About</h4>
`;

export default aboutPage;

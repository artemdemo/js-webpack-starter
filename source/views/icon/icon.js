import { html } from 'lit-html/lib/lit-extended';
import classnames from 'classnames';

import './icon.pcss';

/**
 * Based on font-awesome v.4
 * @link https://fontawesome.com/v4.7.0/icons/
 * @param props
 * @return {*}
 */
const icon = (props) => {
    const { name, className } = props;
    const iconClass = classnames(className, `fa fa-${name}`);
    if (name) {
        console.log(iconClass);
        return html`
            <span class$=${iconClass} />
        `;
    }
    return null;
};

export default icon;

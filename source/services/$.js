/**
 * Wrap an HTML structure around an element
 *
 * @source https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/
 * @param {Element} el
 * @param {Element} wrapperEl
 * @example
 * ```
 * wrap(document.querySelector('a.wrap_me'), document.createElement('div'));
 * ```
 */
export const wrap = (el, wrapperEl) => {
    el.parentNode.insertBefore(wrapperEl, el);
    wrapperEl.appendChild(el);
};

/**
 * Remove all child elements from the given parent element and add new child.
 * If childEl is empty, then will only remove child elements.
 *
 * @param {Element} parentEl
 * @param {Element} childEl
 */
export const replaceChildren = (parentEl, childEl = null) => {
    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }
    if (childEl) {
        parentEl.appendChild(childEl);
    }
};

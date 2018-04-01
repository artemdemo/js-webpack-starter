const itemView = (itemId) => {
    const divEl = document.createElement('div');
    divEl.innerText = `Item id --+ ${itemId}`;
    return divEl;
};

export default itemView;

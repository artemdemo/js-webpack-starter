import itemView from '../view/itemView';

const itemController = (ctx) => {
    return itemView(ctx.params.itemId);
};

export default itemController;

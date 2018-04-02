const initialState = {
    data: [
        {
            id: 'bfsd-3452-1',
            name: 'Some name',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        }
    ],
};

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

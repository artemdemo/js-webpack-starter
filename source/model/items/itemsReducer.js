import * as $ from '../../services/$';

const initialState = {
    data: [
        {
            id: $.guid(),
            name: 'Black candle',
            price: 12,
            description: 'Lighting candles has been a spiritual practice since ancient times and every candle color has its meaning. Burning candles symbolizes the powerful light of faith and the candle you are using, be it black, white or any other color has a meaning and link to the angels.'
        },
        {
            id: $.guid(),
            name: 'Red candle',
            price: 8,
            description: 'The red color is governed by Mars, and is a physical color that gives energy, strength, dynamism, passionate love, physical desire, power of will and athletic abilities (especially competitive).'
        }
    ],
};

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

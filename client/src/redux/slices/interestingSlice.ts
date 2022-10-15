import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TickersItems } from './tickersSlice';


interface InterestingSliceState {
    items: TickersItems[]
}

const initialState: InterestingSliceState = {
    items: [],
};

export const interestingSlice = createSlice({
    name: 'interesting',
    initialState,
    reducers: {
        setTickerItems(state, action: PayloadAction<TickersItems[]>) {
            state.items = action.payload;
        },
        addItem(state, action: PayloadAction<TickersItems>) {
            const findItem = state.items.find((obj) => obj.ticker === action.payload.ticker);

            if (!findItem) {
                state.items.push(action.payload);
            };
        },
        removeItem(state, action) {
            const itemIndex = action.payload;
            state.items.splice(itemIndex, 1);
        }
    },
});


export const { addItem, removeItem, setTickerItems } = interestingSlice.actions;

export default interestingSlice.reducer;
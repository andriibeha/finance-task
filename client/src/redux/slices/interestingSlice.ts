import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TickersItems } from './tickersSlice';


interface InterestingSliceState {
    items: number[]
};

const initialState: InterestingSliceState = {
    items: [],
};

export const interestingSlice = createSlice({
    name: 'interesting',
    initialState,
    reducers: {
        setTickerItems(state, action: PayloadAction<number[]>) {
            state.items = action.payload;
        },
        addItem(state, action: PayloadAction<TickersItems>) {
            const tickerId = action.payload.id;
            const index = state.items.indexOf(tickerId);
            if(index === -1) {
                state.items = [...state.items,tickerId];
            }
        },
        removeItem(state, action) {
            const itemIndex = action.payload;
            state.items.splice(itemIndex, 1);
        }
    },
});


export const { addItem, removeItem, setTickerItems } = interestingSlice.actions;

export default interestingSlice.reducer;
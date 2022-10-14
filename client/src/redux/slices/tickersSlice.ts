import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type TickersItems = Record<string, string>;

interface TickersSlickeState { 
    items: TickersItems[]
};

const initialState: TickersSlickeState = {
    items: [],
};

export const tickersSlice = createSlice({
    name: 'tickers',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TickersItems[]>) {
            state.items = action.payload;
        },
    },
});

export const { setItems } = tickersSlice.actions;

export default tickersSlice.reducer;
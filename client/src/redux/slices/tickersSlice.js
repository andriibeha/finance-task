import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
};

export const tickersSlice = createSlice({
    name: 'tickers',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
});

export const { setItems } = tickersSlice.actions;

export default tickersSlice.reducer;
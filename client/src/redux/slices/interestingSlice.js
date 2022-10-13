import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
};

export const interestingSlice = createSlice({
    name: 'interesting',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj) => obj.ticker === action.payload.ticker);

            if (!findItem) {
                state.items.push(action.payload);
            };
        },
    },
});


export const { addItem } = interestingSlice.actions;

export default interestingSlice.reducer;
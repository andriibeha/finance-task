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
        removeItem(state, action) {
            const itemIndex = action.payload;
            state.items.splice(itemIndex, 1);
        }
    },
});


export const { addItem, removeItem } = interestingSlice.actions;

export default interestingSlice.reducer;
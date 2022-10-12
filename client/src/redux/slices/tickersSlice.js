import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    status: 'loading',
};

export const fetchTickers = (cb) => createAsyncThunk(
    'tickers/fetchTickers',
    cb
);

export const tickersSlice = createSlice({
    name: 'tickers',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchTickers.pending]: (state, action) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchTickers.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchTickers.rejected]: (state, action) => {
            state.status = 'error';
            state.items = [];
        },
    },
});

 export const selectTickerData = ({tickers}) => tickers.items;

export const { setItems } = tickersSlice.actions;

export default tickersSlice.reducer;
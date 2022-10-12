import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    items: [],
    status: 'loading',
};

export const fetchTickers = createAsyncThunk(
    'tickers/fetchTickers',
    async () => {
        const { data } = await axios.get(`http://localhost:4000`);
        return data
    }
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

/* export const selectTickerData = (state) => state.rickers; */

export const { setItems } = tickersSlice.actions;

export default tickersSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Ticker = 'AAPL' | 'GOOGL' | 'MSFT' | 'AMZN' | 'FB' | 'TSLA';

export type TickersItems = {
    id: number,
    ticker: Ticker,
    exchange: string,
    price: string,
    change: string,
    change_percent: string,
    dividend: string,
    yield: string,
    last_trade_time: string,
};

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
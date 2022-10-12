import { configureStore } from '@reduxjs/toolkit';
import tickers from "./slices/tickers Slice"


export const store = configureStore({
    reducer: {
        tickers
    }  
});
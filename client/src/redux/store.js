import { configureStore } from '@reduxjs/toolkit';
import tickers from "./slices/tickersSlice"


export const store = configureStore({
    reducer: {
        tickers
    }  
});
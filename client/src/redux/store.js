import { configureStore } from '@reduxjs/toolkit';
import tickers from "./slices/tickersSlice";
import interesting from "./slices/interestingSlice";


export const store = configureStore({
    reducer: {
        tickers,
        interesting,
    }  
});
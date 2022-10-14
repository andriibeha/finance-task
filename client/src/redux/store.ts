import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tickers from "./slices/tickersSlice";
import interesting from "./slices/interestingSlice";


export const store = configureStore({
    reducer: {
        tickers,
        interesting,
    }  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
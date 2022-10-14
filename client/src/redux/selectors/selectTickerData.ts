import { RootState } from "../store";

export const selectTickerData = (state: RootState) => state.tickers.items;
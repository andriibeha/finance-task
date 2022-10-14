import { RootState } from "../store";

export const selectInterestingData = (state: RootState) => state.interesting.items;

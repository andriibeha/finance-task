import { TickersItems } from "../../redux/slices/tickersSlice"

export type Props = {
    item: TickersItems,
    onAddTicker: (ticker:TickersItems) => void;
    enable:boolean;
    buttonName:string
}
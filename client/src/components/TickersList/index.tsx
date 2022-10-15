import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectInterestingData } from "../../redux/selectors/selectInterestingData";
import { selectTickerData } from "../../redux/selectors/selectTickerData";
import { addItem } from "../../redux/slices/interestingSlice";
import { TickersItems } from "../../redux/slices/tickersSlice";
import { useAppDispatch } from "../../redux/store";
import { Loader } from "../Loader";
import { TickerItem } from "../TickerItem";
import { Props } from "./types";

import s from "./TickersList.module.scss";

const TickersList: FC<Props> = (props) => {
    const {search} = props;
    const dispatch = useAppDispatch();
    const tickers = useSelector(selectTickerData);
    const interestingIds = useSelector(selectInterestingData);

    const onButtonAddClick = useCallback((ticker: TickersItems) => {
        dispatch(addItem(ticker));
    },[dispatch]);

    const filterList = useCallback((list:TickersItems[], filter:string) => 
        list?.filter(item => filter.length ?
            item.ticker.toLowerCase().search(filter.toLowerCase()) >= 0
            : true) || []
    ,[]);

    if (tickers.length === 0) return (<Loader />);  
    
    return (
        <div className={s.root}>
            {filterList(tickers, search).map((item) => <TickerItem
                key={`key_${item.id}`}
                item={item}
                onAddTicker={onButtonAddClick}
                enable={!interestingIds.includes(item.id)}
                buttonName='Add+'
            />)}
        </div>
    );
};

export default TickersList;

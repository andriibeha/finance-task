import {FC} from "react";
import { removeItem } from "../../redux/slices/interestingSlice";
import { TickersItems } from "../../redux/slices/tickersSlice";
import { useAppDispatch } from "../../redux/store";
import { TickerItem } from "../TickerItem";
import { Props } from "./types";
import { EmptyInteresting } from "../EmptyInteresting";

import s from "./InterestingBlock.module.scss";

const InterestingBlock: FC<Props> = (props) => {
    const {tickers} = props;
    const dispatch = useAppDispatch();

    const onButtonAddClick = (item: TickersItems) => {
        dispatch(removeItem(item));
    }

    if (tickers.length === 0) return (<EmptyInteresting/>);  
    
    return (
        <div className={s.root}>
            {tickers.map((item) => (<TickerItem 
                key={`key_${item.id}`}
                item={item}
                onAddTicker={onButtonAddClick}
                enable
                buttonName='Remove'
            />))}
        </div>
    );
};

export default InterestingBlock;

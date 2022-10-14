import { useSelector } from "react-redux";
import { selectTickerData } from "../../redux/selectors/selectTickerData";
import { addItem } from "../../redux/slices/interestingSlice";
import { TickersItems } from "../../redux/slices/tickersSlice";
import { useAppDispatch } from "../../redux/store";

import s from "./TickersList.module.scss";

const TickersList: React.FC = () => {
    const dispatch = useAppDispatch();
    const tickers = useSelector(selectTickerData);

    const onButtonAddClick = (ticker: TickersItems) => {
        dispatch(addItem(ticker));
    };

    if (tickers.length === 0) { 
        return (
            <div className={s.root}>
                <div className={s.center}>
                    <div className={s.loader}></div>
                </div>
            </div>
        );
    };

    return (
        <div className={s.root}>
            {tickers.map((item) => (
                <ul className={s.list} key={item.ticker}>
                    <li className={s.item}>
                        {item.ticker}
                    </li>
                    <li className={s.item}>
                        ${item.price}
                    </li>
                    <li className={s.item}>
                        <div className={Number(item.change) > 0 ? s.item__green : s.item__red}>
                            {item.change}
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={Number(item.change) > 0 ? s.item__green : s.item__red}>
                            {item.change_percent}%
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.wraper}>
                            {item.dividend}
                            <div className={s.container}>
                                <button type="button"
                                    className={s.button}
                                    onClick={() => onButtonAddClick(item)}>
                                    add+
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default TickersList;
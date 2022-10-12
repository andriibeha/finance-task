

import { useEffect } from "react";
import { fetchTickers } from "../../redux/slices/tickers Slice";
import s from "./TickersList.module.scss";

const TickersList = () => {

    useEffect(() => { 
        fetchTickers();
        console.log(fetchTickers())
    }, [] )

    return (
        <div className={s.root}>
            <ul className={s.list}>
                <li className={s.item}>
                    Ticker
                </li>
                <li className={s.item}>
                    Ticker
                </li>
                <li className={s.item}>
                    Ticker
                </li>
                <li className={s.item}>
                    Ticker
                </li>
                <li className={s.item}>
                    Ticker
                </li>
            </ul>
        </div>
    );
};

export default TickersList;

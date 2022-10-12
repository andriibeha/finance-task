import { useSelector } from "react-redux";
import { selectTickerData } from "../../redux/slices/tickersSlice";
import ButtonAdd from "../ButtonAdd";

import s from "./TickersList.module.scss";

const TickersList = () => {
    const tickers = useSelector(selectTickerData);

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
                        <div className={item.change > 0 ? s.item__green : s.item__red}>
                            {item.change}
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={item.change > 0 ? s.item__green : s.item__red}>
                            {item.change_percent}%
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.wraper}>
                            {item.dividend}
                            <div className={s.container}>
                                <ButtonAdd />
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default TickersList

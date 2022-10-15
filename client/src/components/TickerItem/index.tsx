import { FC } from "react";
import { Props } from "./types";
import s from "./TickerItem.module.scss";

export const TickerItem: FC<Props> = (props) => {
    const { item, enable, buttonName = 'add+', onAddTicker } = props;

    return (
        <ul className={s.list}>
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
                    {enable &&
                        <div className={s.container}>
                            <button type="button"
                                className={s.button}
                                onClick={() => onAddTicker(item)}>
                                {buttonName}
                            </button>
                        </div>
                    }
                </div>
            </li>
        </ul>
    );
};
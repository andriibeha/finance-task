import { useSelector } from "react-redux";
import { selectInterestingData } from "../../redux/selectors/selectInterestingData";

import s from "./InterestingBlock.module.scss";


const InterestingBlock = () => {
    const interestingTickers = useSelector(selectInterestingData);

    const onButtonAddClick = () => {
        console.log("remove")
    }

    if (interestingTickers.length === 0) { 
        return (
            <div className={s.root}>
                <div className={s.center}>
                    You dont add ticker!
                </div>
            </div>
        );
    };

    return (
        <div className={s.root}>
            {interestingTickers.map((item) => (
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

export default InterestingBlock;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { MainScreeenNavigationProps } from "../TypeNavigetaProps/types";
import { selectInterestingData } from "../redux/selectors/selectInterestingData";
import { selectTickerData } from "../redux/selectors/selectTickerData";
import { TickersItems } from "../redux/slices/tickersSlice";
import InterestingBlock from "../components/InterestingBlock";
import TickersListHeader from "../components/TickersListHeader";

const Interesting: React.FC = () => {
    const [interestingTickers, setInterestingTickers] = useState<TickersItems[]>([]);
    const {search} = useOutletContext<MainScreeenNavigationProps>();
    const interestingTickersIDs = useSelector(selectInterestingData);
    const tickers = useSelector(selectTickerData);

    useEffect(() => {
        const filteredTickers = tickers.filter(item =>
            interestingTickersIDs.indexOf(item.id) !== -1 &&
            item.ticker.toLowerCase().search(search.toLowerCase()) >= 0
        );

        setInterestingTickers(filteredTickers);

    }, [tickers, interestingTickersIDs, search]);
    
    return (
        <main className="main">
            <TickersListHeader />
            <InterestingBlock tickers={interestingTickers} />
        </main>
    );
};

export default Interesting;

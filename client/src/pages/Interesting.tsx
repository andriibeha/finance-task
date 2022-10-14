import InterestingBlock from "../components/InterestingBlock";
import TickersListHeader from "../components/TickersListHeader";


const Interesting: React.FC = () => {
    return (
        <main className="main">
            <TickersListHeader />
            <InterestingBlock />
        </main>
    );
};

export default Interesting;
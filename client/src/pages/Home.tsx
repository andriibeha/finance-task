import { useOutletContext } from "react-router-dom";
import { MainScreeenNavigationProps } from "../common/types";
import TickersList from "../components/TickersList";
import TickersListHeader from "../components/TickersListHeader";

const Home: React.FC = () => {
    const { search } = useOutletContext<MainScreeenNavigationProps>();
    
    return (
        <main className="main">
            <TickersListHeader />
            <TickersList search={search} />
        </main>
    );
};

export default Home;

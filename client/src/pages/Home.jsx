import TickersList from "../components/TickersList";
import TickersListHeader from "../components/TickersListHeader";

const Home = () => {
    return (
        <main className="main">
            <TickersListHeader />
            <TickersList />
        </main>
    );
};

export default Home;

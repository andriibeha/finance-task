import { useCallback, useEffect } from "react";
import InterestingBlock from "../components/InterestingBlock";
import TickersListHeader from "../components/TickersListHeader";
import { setTickerItems } from "../redux/slices/interestingSlice";
import { TickersItems } from "../redux/slices/tickersSlice";
import { useAppDispatch } from "../redux/store";
import WebSocketService from '../services/socket'

const SERVER: string = 'http://localhost:4000' ;

const Interesting: React.FC = () => {

    const dispatch = useAppDispatch();

    const handleTicker = useCallback((data: TickersItems[]) => {
        console.log("data", data)
        dispatch(setTickerItems(data));
    }, [dispatch]);


    useEffect(() => {
        WebSocketService.establishConnection(SERVER);
        WebSocketService.emit('start');
        WebSocketService.on('user', handleTicker);
        /* return () => WebSocketService.emit('disconnect'); */
    }, [handleTicker]);

    return (
        <main className="main">
            <TickersListHeader />
            <InterestingBlock />
        </main>
    );
};

export default Interesting;

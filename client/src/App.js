import React,{ useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Interesting from "./pages/Interesting";
import NotFound from "./pages/NotFound";
import WebSocketService from './services/socket'

import "./scss/app.scss"
import { setItems } from "./redux/slices/tickersSlice";
import { useDispatch } from "react-redux";

const SERVER = 'http://localhost:4000/'

const App = () => {
  const dispatch = useDispatch();

  const handleTicker = useCallback((data) => {
    dispatch(setItems(data));
  },[dispatch]);

  useEffect(() => {
    WebSocketService.establishConnection(SERVER);
    WebSocketService.emit('start');
    WebSocketService.on('ticker', handleTicker);
    return () => WebSocketService.emit('disconnect');
  },[])
  
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="interesting" element={<Interesting />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

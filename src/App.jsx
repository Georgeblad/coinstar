import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/coin-detail-page";
import CoinSummaryPage from "./pages/coin-summary-page";
import Header from "./components/header";
import "./App.css";
import CoinList from "./components/coin-list";
import { WatchListContextProvider } from "./context/watchlist-context";

const App = () => {
  return (
    <div>
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <CoinList />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetailPage from "./pages/coin-detail-page";
import CoinSummaryPage from "./pages/coin-summary-page";
import Header from "./components/header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchlist-context";

const App = () => {
  return (
    <div className="max-w-6xl m-auto">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<CoinSummaryPage />} />
            <Route exact path="/coins/:id" element={<CoinDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;

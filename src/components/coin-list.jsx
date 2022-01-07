import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../apis/coingecko";
import { WatchListContext } from "../context/watchlist-context";
import Coin from "./coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data)
      setIsLoading(false)
    };
    fetchData();
  }, []);


  const renderCoins = () => {
      if(isLoading) {
          return <div>Loading...</div>
      }
      return (
          <ul className="coinlist list-group mt-2">
            {coins.map(coin => {
                return <Coin key={coin.id} coin={coin} />
            })}
          </ul>
      )
  }

  return <div>{renderCoins()}</div>;
};

export default CoinList;

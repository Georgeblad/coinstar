import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      console.log("data");
      return (
        <div className="bg-white mt-3 p-2 rounded border flex">

          {/* COLUMN 1:  */}
          <div className="flex flex-col w-1/3 mx-2">
            <div className="flex flex-col py-2">
              <span className="text-gray-700 font-light text-sm coin-data-category">Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="flex flex-col py-2">
              <span className="text-gray-700 font-light text-sm coin-data-category">
                Total Supply
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col w-1/3 mx-2">
            <div className="flex flex-col py-2">
              <span className="text-gray-700 font-light text-sm coin-data-category">Volume (24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="flex flex-col py-2">
              <span className="text-gray-700 font-light text-sm coin-data-category">
                High 24H
              </span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col w-1/3 mx-2">
            <div className="flex flex-col py-2">
              <span className="text-gray-700 font-light text-sm coin-data-category">Circulating Supply</span>
              <span>{data.circulating_supply.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex flex-col py-2">
              <span className="text-gray-700 font-light text-sm coin-data-category">
                Low 24H
              </span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("nodata");
    }
  };
  return <div>{renderData()}</div>;
};

export default CoinData;

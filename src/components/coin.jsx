import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  faSortDown,
  faSortUp,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="my-1 coin">
      <li className="coinlist-item relative py-4 px-8 bg-slate-50 my-px rounded-md shadow-md flex justify-between items-center text-gray-900 hover:bg-slate-200">
        <img className="coinlist-image" alt="asd" src={coin.image} />
        <span>{coin.current_price}</span>
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-red-500 mr-2"
              : "text-green-400 mr-2"
          }
        >
          {coin.price_change_percentage_24h < 0 ? (
            <FontAwesomeIcon icon={faSortDown} className="mr-2" />
          ) : (
            <FontAwesomeIcon icon={faSortUp} className="mr-2" />
          )}
          {coin.price_change_percentage_24h} %
        </span>
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="delete-icon mr-2 text-red-500"
          onClick={(e) => {
            e.preventDefault()
            deleteCoin(coin.id)
          }}
        />
      </li>
    </Link>
  );
};

export default Coin;

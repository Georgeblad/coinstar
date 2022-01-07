import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Coin = ({ coin }) => {
  return (
    <Link to="/coindetail">
      <li className="coinlist-item p-3 bg-slate-100 my-px rounded-md shadow-md flex justify-between items-center text-gray-900">
        <img className="coinlist-image" alt="asd" src={coin.image} />
        <span>{coin.current_price}</span>
        <span className="mr-2 text-green-500">
            <FontAwesomeIcon icon={faSortDown} className="mr-2" />
            {coin.price_change_percentage_24h}
        </span>
        <i className="delete-icon far fa-times-circle text-red-500"></i>
      </li>
    </Link>
  );
};

export default Coin;

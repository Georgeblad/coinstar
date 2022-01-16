import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js/auto";
import { historyOptions } from "../chart_configs/chart-config";
import "chartjs-adapter-moment";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");
  const [isChartRendered, setIsTimeRendered] = useState(false);
  const [chartInstance, setChartInstance] = useState()

  const buttonClass = "border border-slate-300 bg-slate-200 hover:bg-slate-400 w-10 rounded btn-sm mx-1"
  const buttonClassActive = "border border-slate-300 bg-slate-400 hover:bg-slate-400 w-10 rounded btn-sm mx-1"

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };


  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      setChartInstance(new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "blue",
              // borderColor: "rgba(174, 305, 194, 0.4)",
              pointRadius: 0,
              fill: true,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      }))
    }
  }, [timeFormat]);

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">$ {detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0 ? "text-red-500" : "text-green-500"
            }
          >
            {detail.price_change_24h.toFixed(2)} %
          </p>
        </>
      );
    }
  };

  
  return (
    <div className="bg-white border mt-2 p-3 rounded">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={400} height={400}></canvas>
      </div>
      <div className="chart-button mt-1">
        <button
          onClick={() => {
            if (timeFormat !== "24h") chartInstance.destroy()
            setTimeFormat("24h");
          }}
          className={(timeFormat === "24h") ? buttonClassActive : buttonClass}
        >
          24h
        </button>
        <button
          onClick={() => {
            if (timeFormat !== "7d") chartInstance.destroy()
            setTimeFormat("7d");
          }}
          className={(timeFormat === "7d") ? buttonClassActive : buttonClass}
        >
          7d
        </button>
        <button
          onClick={() => {
            if (timeFormat !== "1y") chartInstance.destroy()
            setTimeFormat("1y");
          }}
          className={(timeFormat === "1y") ? buttonClassActive : buttonClass}
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;

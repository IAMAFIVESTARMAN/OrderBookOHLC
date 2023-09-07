import React, { useEffect, useState, useRef } from "react";
import { MouseEventParams, createChart } from "lightweight-charts";
import { IChartApi } from "lightweight-charts";

import { ChartCandle } from "../types/typesAndEnums";
import { useLastCandleData } from "../hooks/useLastData";
type ChartData = {
  chartData: ChartCandle[];
  timeDuration: string;
};

const LightweightChart = ({ chartData, timeDuration }: ChartData) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  // const [candlePrice, setCandlePrice] = useState<any>(null);

  chartData.filter(
    (candle) => candle.time > Math.floor(Date.now() / 1000 - 1693906096)
  );

  const chart = useRef<IChartApi | null>(null);
  const candleSeries = useRef<any>(null);
  const HistogramSeries = useRef<any>(null);

  chartData.sort((a, b) => a.time - b.time);

  const { lastCandle } = useLastCandleData(timeDuration);

  // console.log("candle stick rendered");

  // console.log(lastCandle);

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current!, {
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },

      width: 1600,
      height: 500,
      autoSize: true,
      layout: {
        background: { color: "#121723" },
        textColor: "#8b969f",
      },
      crosshair: {
        mode: 0, // LightweightCharts.CrosshairMode.Normal
      },
      grid: {
        vertLines: { color: "#777", visible: false },
        horzLines: { color: "#777" },
      },
    });

    chart.current.timeScale().applyOptions({});

    chart.current.timeScale().fitContent();

    // chart.current.timeScale().setVisibleLogicalRange({
    //   from: Math.floor(Date.now() / 1000 - 1693906096),
    //   to: Math.floor(Date.now() / 1000),
    // });

    candleSeries.current = chart.current.addCandlestickSeries({
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#ff4976",
      wickUpColor: "#4bffb5",
    });
    // HistogramSeries.current = chart.current.addHistogramSeries({
    //   priceFormat: {
    //     type: "volume",
    //   },
    //   priceScaleId: "",
    // });

    // HistogramSeries.current.priceScale().applyOptions({
    //   // set the positioning of the volume series
    //   scaleMargins: {
    //     top: 0.65, // highest point of the series will be 70% away from the top
    //     bottom: 0, // lowest point will be at the very bottom.
    //   },
    // });

    // HistogramSeries.current.setData(
    //   chartData.map((bar: ChartCandle) => {
    //     return {
    //       time: bar.time,
    //       value: bar.volume,
    //       color: `${bar.open > bar.close ? "#4bffb560" : "#ff497660"}`,
    //     };
    //   })
    // );

    candleSeries.current.setData(chartData);

    if (Object.keys(lastCandle).length !== 0) {
      console.log(lastCandle);
    }

    // chart.current.subscribeCrosshairMove((param: MouseEventParams) => {
    //   if (param.time) {
    //     setCandlePrice({ ...param.seriesData.get(candleSeries.current) });
    //   }
    // });

    return () => {
      chart.current?.remove();
    };
  }, [chartData]);

  const scrollBackInTime = () => {
    if (chart.current) {
      chart.current!.timeScale().setVisibleLogicalRange({
        from: Math.floor((Date.now() - 21600000) / 1000),
        to: Math.floor(Date.now() / 1000),
      });
    }
  };

  return (
    <>
      <div ref={chartContainerRef} className="relative">
        {/* {candlePrice && (
        <div
          className={`absolute  z-10 -top-4 left-4 ${
            candlePrice.open > candlePrice.close
              ? "text-red-700"
              : "text-green-700"
          }`}
        >{`O:${candlePrice.open} H:${candlePrice.high} L:${candlePrice.low} C:${candlePrice.close} V:$ `}</div>
      )} */}
      </div>
      <div className="flex justify-between w-1/6 py-2">
        <button onClick={scrollBackInTime}>1Y</button>
        <button onClick={scrollBackInTime}>3m</button>
        <button onClick={scrollBackInTime}>1m</button>
        <button onClick={scrollBackInTime}>7d</button>
        <button onClick={scrollBackInTime}>3d</button>
        <button onClick={scrollBackInTime}>6h</button>
        <button onClick={scrollBackInTime}>1h</button>
      </div>
    </>
  );
};

export default LightweightChart;

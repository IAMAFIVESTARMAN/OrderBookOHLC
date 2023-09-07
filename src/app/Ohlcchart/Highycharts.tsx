import React, { useEffect, useState, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsExporting from "highcharts/modules/exporting";

import HighchartsReact from "highcharts-react-official";
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}
const Highycharts = ({ timeDuration, highlightChartData }: any) => {
  const chartComponent = useRef<any>(null);

  console.log(highlightChartData);

  const options = {
    title: {
      text: "AAPL stock price by minute",
    },

    rangeSelector: {
      enabled: true,
      buttonPosition: {
        align: "left",
      },
      allButtonsEnabled: true,
      buttons: [
        {
          type: "hour",
          count: 1,
          text: "1h",
          dataGrouping: {
            forced: true,
            units: [["hour", [1]]],
          },
        },
        {
          type: "hour",
          count: 6,
          text: "6h",
          dataGrouping: {
            forced: true,
            units: [["hour", [1]]],
          },
        },
        {
          type: "day",
          count: 1,
          text: "1D",
          dataGrouping: {
            forced: true,
            units: [["hour", [1]]],
          },
        },
        {
          type: "all",
          count: 1,
          text: "All",
        },
      ],
      selected: 4,
      inputEnabled: false,
    },

    xAxis: {
      scrollbar: {
        enabled: true,
      },
      type: "datetime",
    },
    time: {
      timezone: "Asia/Kolkata",
    },

    series: [
      {
        name: "AAPL",
        type: "candlestick",
        data: highlightChartData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <>
      <HighchartsReact
        ref={chartComponent}
        constructorType={"stockChart"}
        highcharts={Highcharts}
        options={options}
      />
    </>
  );
};

export default Highycharts;

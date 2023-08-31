import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ApexData {
  x: Date;
  y: number[];
}

type ChartData = {
  chartData: [number, number, number, number, number, number][];
};

const CandlestickComponent = ({ chartData }: ChartData) => {
  const initialData = chartData.map((el) => {
    return {
      x: new Date(el[0]),
      y: [el[1], el[1], el[1], el[4]],
    };
  });

  const [series, setSeries] = useState([
    {
      data: initialData,
    },
  ]);

  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 350,
    },

    annotations: {
      points: [
        {
          x: new Date("2023-08-01").getTime(),
          y: 50, // Adjust the y-coordinate as needed
          marker: {
            size: 6,
            fillColor: "#F44336", // Adjust the line color
            strokeWidth: 0,
            shape: "circle",
            radius: 2,
          },
          label: {
            borderColor: "#F44336",
            offsetY: -10,
            text: "Line 1",
          },
        },
        // Add more points as needed
      ],
    },
    xaxis: {
      type: "datetime",
      // tickAmount: "",
      categories: [chartData.map((candles) => new Date(candles[0]))],
    },
    yaxis: {
      tickAmount: Math.max(), // Set maximum value based on interval
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CandlestickComponent;

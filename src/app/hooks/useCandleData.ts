import React, { useState, useEffect } from "react";
import { ChartCandle } from "../types/typesAndEnums";
export const useCandleData = (timeDuration: string) => {
  const [chartData, setChartData] = useState<ChartCandle[]>([]);

  // console.log("component rendered");

  useEffect(() => {
    const fetchChartData = async (timeDuration: string) => {
      try {
        const res = await fetch(
          `api/fetchCandle?timeDuration=${timeDuration}&section=hist?`
        );

        const data = await res.json();

        // console.log(data);

        if (data && Array.isArray(data) && data.length > 0) {
          const formattedData = data.map((candle: any) => {
            return {
              time: candle[0] / 1000 + 19800,
              open: candle[1],
              close: candle[2],
              high: candle[3],
              low: candle[4],
              volume: candle[5],
            };
          });

          setChartData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching chart data", error);
      }
    };

    fetchChartData(timeDuration);

    return () => {
      // socket.close();

      console.log("Request cancelled");
    };
  }, [timeDuration]);

  return { chartData };
};

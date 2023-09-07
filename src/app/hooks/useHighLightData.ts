import React, { useState, useEffect } from "react";
import { ChartCandle } from "../types/typesAndEnums";
export const useHighLightData = (timeDuration: string) => {
  const [highlightChartData, setHighlightChartData] = useState<number[][]>([]);

  // console.log("component rendered");

  useEffect(() => {
    const fetchChartData = async (timeDuration: string) => {
      try {
        const res = await fetch(
          `api/fetchCandle?timeDuration=${timeDuration}&section=hist?limit=10000`
        );

        const data = await res.json();

        // console.log(data);

        if (data && Array.isArray(data) && data.length > 0) {
          const formattedData = data.map((candle: any) => {
            return [
              candle[0] + 19800,
              candle[1],
              candle[2],
              candle[3],
              candle[4],
            ];
          });

          setHighlightChartData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching chart data", error);
      }
    };

    fetchChartData(timeDuration);

    return () => {
      // socket.close();

      console.log("request cancelled");
    };
  }, [timeDuration]);

  return { highlightChartData };
};

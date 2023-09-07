import React, { useEffect, useState } from "react";

export const useLastCandleData = (timeDuration: string) => {
  const [lastCandle, setLastCandle] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    const fetchLastChartData = async (timeDuration: string) => {
      try {
        console.log("Fetching data...");
        const res = await fetch(
          `api/fetchCandle?timeDuration=${timeDuration}&section=last`,
          { signal: controller.signal }
        );

        const data = await res.json();

        console.log("Received data:", data);

        if (data && Array.isArray(data) && data.length > 0) {
          let obj = {
            time: data[0] / 1000 + 19800,
            open: data[1],
            close: data[2],
            high: data[3],
            low: data[4],
            volume: data[5],
          };

          console.log("Formatted data:", obj);
          setLastCandle(obj);
        }
      } catch (error) {
        console.error("Error fetching chart data", error);
      }
    };

    const intervalId = setInterval(() => {
      console.log("Interval triggered");
      fetchLastChartData(timeDuration);
    }, 300000);

    return () => {
      // socket.close();
      clearInterval(intervalId);
      controller.abort();
      console.log("Request cancelled");
    };
  }, [timeDuration]);

  // console.log(lastCandle);

  return { lastCandle };
};

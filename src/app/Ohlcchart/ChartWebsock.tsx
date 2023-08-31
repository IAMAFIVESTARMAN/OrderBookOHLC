import React, { useState, useEffect, useRef } from "react";
import LightweightChart from "./lightweightChart";

type duration = {
  timeDuration: string;
};

type ChartData = [number, number, number, number, number, number][];

const ChartWebSocketComponent = ({ timeDuration }: duration) => {
  const [chartData, setChartData] = useState<ChartData>([]);
  const [initial, setInitial] = useState<boolean>(false);

  useEffect(() => {
    console.log("connection rendered");
    console.log(chartData.length);
    const socketUrl = "wss://api-pub.bitfinex.com/ws/2";
    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log("WebSocket connection is open");
      let msg = JSON.stringify({
        event: "subscribe",
        channel: "candles",
        key: `trade:${timeDuration}:tBTCUSD`, //'trade:TIMEFRAME:SYMBOL'
      });

      socket.send(msg);
    };

    socket.onmessage = (event) => {
      const eventdata = JSON.parse(event.data);

      if (Array.isArray(eventdata)) {
        const [_, messageData] = eventdata;

        if (messageData[0] === "hb") {
          return; // Skip heartbeat messages
        } else {
          if (!initial) {
            setChartData(messageData);
            setInitial(true);
          } else {
            // console.log("working");
            // setChartData((prev) => [...prev, messageData]);
          }
        }
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection is closed");
    };

    return () => {
      socket.close();
    };
  }, [initial, timeDuration]);

  const seriesData = [...chartData].map((candle) => {
    return {
      time: candle[0],
      open: candle[1],
      close: candle[2],
      high: candle[2],
      low: candle[4],
    };
  });

  // console.log(seriesData.length);

  const content = initial ? (
    <div className="transition-all duration-400 ease-in">
      <LightweightChart chartData={seriesData}></LightweightChart>
    </div>
  ) : (
    <p>Loading...</p>
  );

  return content;
};

export default ChartWebSocketComponent;

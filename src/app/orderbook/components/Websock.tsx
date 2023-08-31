import { addingNewHelper } from "@/app/helpers/AddingNewHelper";
import { calculateTotalsAsksBids } from "@/app/helpers/AskBidHelper";
import { calculateTotalsDepth } from "@/app/helpers/DepthVisualizer";
import { existingHelper } from "@/app/helpers/existingHelper";

import React, { useState, useEffect } from "react";

type Precision = {
  precision: string;
  widthDivider: number;
};

type OrderBookEntry = [number, number, number]; // [price, count, amount]

type OrderBookState = {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
};
const WebSocketComponent = ({ precision, widthDivider }: Precision) => {
  const [orderBook, setOrderBook] = useState<OrderBookState>({
    bids: [],
    asks: [],
  });
  const [initial, setInitial] = useState<boolean>(false);

  useEffect(() => {
    console.log("rendered");
    const socketUrl = "wss://api-pub.bitfinex.com/ws/2";
    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log("WebSocket connection is open");

      const subscribeMsg = JSON.stringify({
        event: "subscribe",
        channel: "book",

        precision: precision,
        pair: "tBTCUSD",
      });

      socket.send(subscribeMsg);
    };

    socket.onmessage = (event) => {
      const eventdata = JSON.parse(event.data);

      if (Array.isArray(eventdata)) {
        const [_, messageData] = eventdata;

        if (messageData[0] === "hb") {
          return; // Skip heartbeat messages
        } else {
          if (!initial) {
            setOrderBook({
              ...orderBook,
              bids: messageData.filter((el: OrderBookEntry) => el[2] > 0),
              asks: messageData.filter((el: OrderBookEntry) => el[2] < 0),
            });
            setInitial(true);
          } else {
            if (messageData.length === 3) {
              const [price, count, amount] = messageData;

              const existingBid = orderBook.bids.some((el) => el[0] === price);
              const existingAsk = orderBook.asks.some((el) => el[0] === price);

              if (existingBid || existingAsk) {
                const { bids, asks } = existingHelper(price, count, amount, {
                  ...orderBook,
                });
                setOrderBook((prevOrderBook) => {
                  return { ...prevOrderBook, bids: bids, asks: asks };
                });
                // } else if (count !== 0) {
                //   const { bids, asks } = addingNewHelper(
                //     price,
                //     count,
                //     amount,
                //     orderBook
                //   );

                //   setOrderBook((prevOrderBook) => {
                //     return { ...prevOrderBook, bids: bids, asks: asks };
                //   });
              }
            }
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
  }, [precision, initial]);

  const content = initial ? (
    <>
      <div>
        <div>
          <div
            className={`flex relative justify-around py-5 bg-sky-400 rounded-xl items-center text-white`}
          >
            <div className="absolute h-5 w-full -z-10 bg-black "></div>
            <div>Count</div>
            <div>Amount</div>
            <div>Total</div>
            <div>Price</div>
          </div>
        </div>
        {orderBook.bids.map((el: Array<number>, i: number) => (
          <div key={i + calculateTotalsAsksBids(i, orderBook.bids, "bid")}>
            <div className={`flex relative justify-between items-center `}>
              <div
                className={`absolute h-5 -z-10 bg-green-400 xl:right-0 transition-all duration-400 
                  ease-in`}
                style={{
                  width: `${Math.min(
                    100,
                    calculateTotalsAsksBids(i, orderBook.bids, "bid") /
                      calculateTotalsDepth(orderBook.bids, widthDivider)
                  )}%`,
                }}
              ></div>
              <div>{el[1]}</div>
              <div>{`${el[2].toFixed(3)}`}</div>
              <div>{`${calculateTotalsAsksBids(
                i,
                orderBook.bids,
                "bid"
              ).toFixed(3)}`}</div>
              <div className="text-green-950">{el[0]}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <div
            className={`flex relative justify-around py-5 bg-sky-400 rounded-xl items-center text-white`}
          >
            <div className={`absolute h-5 w-full -z-10 bg-black `}></div>
            <div>Count</div>
            <div>Amount</div>
            <div>Total</div>
            <div>Price</div>
          </div>
        </div>
        {orderBook.asks.map((el: Array<number>, i: number) => (
          <div key={i + calculateTotalsAsksBids(i, orderBook.asks, "ask")}>
            <div className={`flex relative justify-between items-center`}>
              <div
                className={`absolute h-5  -z-10 bg-red-400 transition-all duration-400 
                ease-in`}
                style={{
                  width: `${Math.min(
                    100,
                    calculateTotalsAsksBids(i, orderBook.asks, "ask") /
                      calculateTotalsDepth(orderBook.asks, widthDivider)
                  )}%`,
                }}
              ></div>
              <div>{el[1]}</div>
              <div>{`${Math.abs(el[2]).toFixed(3)}`}</div>
              <div>{`${calculateTotalsAsksBids(
                i,
                orderBook.asks,
                "ask"
              ).toFixed(3)}`}</div>
              <div className="text-red-900">{el[0]}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );

  return content;
};

export default WebSocketComponent;

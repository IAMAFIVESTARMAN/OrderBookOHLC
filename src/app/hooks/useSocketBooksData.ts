import { useEffect, useState } from "react";
import {
  OrderBookEntry,
  OrderBookState,
  OrderBookEntries,
} from "@/app/types/typesAndEnums";
import { existingEntryInOrderBookHelper } from "../helpers/existingEntryInOrderbookHelper";
import { addingNewOrderEntryHelper } from "../helpers/AddingNewOrderEntryHelper";

export const useSocketData = (
  orderbookPrecision: string,
  orderbookPair: string
) => {
  const [orderBook, setOrderBook] = useState<OrderBookState>({
    bids: [],
    asks: [],
  });
  const [initialDataLoaded, setInitialDataLoaded] = useState<boolean>(false);
  useEffect(() => {
    console.log("rendered");

    const socket = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL!);

    socket.onopen = () => {
      console.log("WebSocket connection is open");

      const subscribeMsg = JSON.stringify({
        event: "subscribe",
        channel: "book",

        precision: orderbookPrecision,
        pair: orderbookPair,
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
          if (!initialDataLoaded) {
            setOrderBook({
              ...orderBook,
              bids: messageData?.filter(
                (el: OrderBookEntry) => el[OrderBookEntries["amount"]] > 0
              ),
              asks: messageData?.filter(
                (el: OrderBookEntry) => el[OrderBookEntries["amount"]] < 0
              ),
            });
            setInitialDataLoaded(true);
          } else {
            if (messageData.length === 3) {
              const [price, count, amount] = messageData;
              const existingBid = orderBook.bids.some(
                (el) => el[OrderBookEntries["price"]] === price
              );
              const existingAsk = orderBook.asks.some(
                (el) => el[OrderBookEntries["price"]] === price
              );
              if (existingBid || existingAsk) {
                const { newBids, newAsks } = existingEntryInOrderBookHelper(
                  price,
                  count,
                  amount,
                  {
                    ...orderBook,
                  }
                );
                setOrderBook((prevOrderBook) => {
                  return { ...prevOrderBook, bids: newBids, asks: newAsks };
                });
              } else if (count !== 0) {
                const { bids, asks } = addingNewOrderEntryHelper(
                  price,
                  count,
                  amount,
                  orderBook
                );
                setOrderBook((prevOrderBook) => {
                  return { ...prevOrderBook, bids: bids, asks: asks };
                });
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
      if (initialDataLoaded) {
        setInitialDataLoaded(false);
      }
    };
  }, [orderbookPair, orderbookPrecision, initialDataLoaded]);

  return { initialDataLoaded, orderBook };
};

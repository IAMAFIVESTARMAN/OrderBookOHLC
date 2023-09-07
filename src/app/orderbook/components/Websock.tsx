import React from "react";

import { OrderbookParams } from "@/app/types/typesAndEnums";

import Loading from "./Loading";

import OrderBookBidsComponent from "./OrderBookBidsComponent";
import OrderBookAsksComponent from "./OrderBookAsksComponent";
import { useSocketData } from "@/app/hooks/useSocketBooksData";

type T = ReturnType<typeof useSocketData>;

const WebSocketComponent = ({
  orderbookPrecision,
  widthDivider,
  orderbookPair,
}: OrderbookParams) => {
  // const [orderBook, setOrderBook] = useState<OrderBookState>({
  //   bids: [],
  //   asks: [],
  // });
  // const [initialDataLoaded, setInitialDataLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log("rendered");

  //   const socket = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL!);

  //   socket.onopen = () => {
  //     console.log("WebSocket connection is open");

  //     const subscribeMsg = JSON.stringify({
  //       event: "subscribe",
  //       channel: "book",

  //       precision: orderbookPrecision,
  //       pair: orderbookPair,
  //     });

  //     socket.send(subscribeMsg);
  //   };

  //   socket.onmessage = (event) => {
  //     const eventdata = JSON.parse(event.data);

  //     if (Array.isArray(eventdata)) {
  //       const [_, messageData] = eventdata;

  //       if (messageData[0] === "hb") {
  //         return; // Skip heartbeat messages
  //       } else {
  //         if (!initialDataLoaded) {
  //           setOrderBook({
  //             ...orderBook,
  //             bids: messageData?.filter((el: OrderBookEntry) => el[2] > 0),
  //             asks: messageData?.filter((el: OrderBookEntry) => el[2] < 0),
  //           });
  //           setInitialDataLoaded(true);
  //         } else {
  //           if (messageData.length === 3) {
  //             const [price, count, amount] = messageData;
  //             const existingBid = orderBook.bids.some((el) => el[0] === price);
  //             const existingAsk = orderBook.asks.some((el) => el[0] === price);
  //             if (existingBid || existingAsk) {
  //               const { newBids, newAsks } = existingEntryInOrderBookHelper(
  //                 price,
  //                 count,
  //                 amount,
  //                 {
  //                   ...orderBook,
  //                 }
  //               );
  //               setOrderBook((prevOrderBook) => {
  //                 return { ...prevOrderBook, bids: newBids, asks: newAsks };
  //               });
  //             } else if (count !== 0) {
  //               const { bids, asks } = addingNewHelper(
  //                 price,
  //                 count,
  //                 amount,
  //                 orderBook
  //               );
  //               setOrderBook((prevOrderBook) => {
  //                 return { ...prevOrderBook, bids: bids, asks: asks };
  //               });
  //             }
  //           }
  //         }
  //       }
  //     }
  //   };

  //   socket.onclose = () => {
  //     console.log("WebSocket connection is closed");
  //   };

  //   return () => {
  //     socket.close();
  //     if (initialDataLoaded) {
  //       setInitialDataLoaded(false);
  //     }
  //   };
  // }, [orderbookPair, orderbookPrecision, initialDataLoaded]);

  const { initialDataLoaded, orderBook }: T = useSocketData(
    orderbookPrecision,
    orderbookPair
  );

  const content = initialDataLoaded ? (
    <>
      <OrderBookBidsComponent
        data={orderBook.bids}
        type="bid"
        widthDivider={widthDivider}
      ></OrderBookBidsComponent>
      <OrderBookAsksComponent
        data={orderBook.asks}
        type="ask"
        widthDivider={widthDivider}
      ></OrderBookAsksComponent>
    </>
  ) : (
    <Loading></Loading>
  );

  return content;
};

export default WebSocketComponent;

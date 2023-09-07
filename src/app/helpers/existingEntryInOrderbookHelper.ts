import { OrderBookEntries, OrderBookState } from "../types/typesAndEnums";

export const existingEntryInOrderBookHelper = (
  price: number,
  count: number,
  amount: number,
  orderBook: OrderBookState
) => {
  const currentOrderBook = { ...orderBook };

  if (count === 0) {
  } else if (amount > 0) {
    currentOrderBook.bids = currentOrderBook.bids.map((bid) =>
      bid[OrderBookEntries["price"]] === price ? [price, count, amount] : bid
    );
  } else {
    currentOrderBook.asks = currentOrderBook.asks.map((ask) =>
      ask[OrderBookEntries["price"]] === price ? [price, count, amount] : ask
    );
  }

  return { newBids: currentOrderBook.bids, newAsks: currentOrderBook.asks };
};

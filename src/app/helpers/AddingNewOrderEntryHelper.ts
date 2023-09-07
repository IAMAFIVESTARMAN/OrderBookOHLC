import { OrderBookState, OrderBookEntry } from "../types/typesAndEnums";

export const addingNewOrderEntryHelper = (
  price: number,
  count: number,
  amount: number,
  orderBook: OrderBookState
): OrderBookState => {
  const currentOrderBook = { ...orderBook };

  const updatedEntry: OrderBookEntry = [price, count, amount];

  if (amount < 0) {
    currentOrderBook.bids = [...currentOrderBook.bids, updatedEntry];
  } else {
    currentOrderBook.asks = [...currentOrderBook.asks, updatedEntry];
  }

  if (currentOrderBook.bids.length > 25) {
    currentOrderBook.bids = [...currentOrderBook.bids.slice(-25)];
  }
  if (currentOrderBook.asks.length > 25) {
    currentOrderBook.asks.pop;
    currentOrderBook.asks = [...currentOrderBook.asks.slice(-25)];
  }

  return currentOrderBook;
};

type OrderBookEntry = [number, number, number];

type OrderBookState = {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
};

export const addingNewHelper = (
  price: number,
  count: number,
  amount: number,
  orderBook: OrderBookState
) => {
  const currentOrderBook = { ...orderBook };

  const updatedEntry: OrderBookEntry = [price, count, amount];

  if (amount > 0) {
    currentOrderBook.bids = [...currentOrderBook.bids, updatedEntry];
  } else {
    currentOrderBook.asks = [...currentOrderBook.asks, updatedEntry];
  }

  if (currentOrderBook.bids.length > 25) {
    currentOrderBook.bids = [...currentOrderBook.bids.slice(-25)];
  }
  if (currentOrderBook.asks.length > 25) {
    currentOrderBook.asks = [...currentOrderBook.asks.slice(-25)];
  }

  return currentOrderBook;
};

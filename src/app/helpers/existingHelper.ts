type OrderBookEntry = [number, number, number];

type OrderBookState = {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
};

export const existingHelper = (
  price: number,
  count: number,
  amount: number,
  orderBook: OrderBookState
) => {
  const currentOrderBook = { ...orderBook };

  if (count === 0) {
    // currentOrderBook.bids = currentOrderBook.bids.filter(
    //   (bid) => bid[0] !== price
    // );
    // currentOrderBook.asks = currentOrderBook.asks.filter(
    //   (ask) => ask[0] !== price
    // );
  } else if (amount > 0) {
    currentOrderBook.bids = currentOrderBook.bids.map((bid) =>
      bid[0] === price ? [price, count, bid[2] + amount] : bid
    );
  } else if (amount < 0) {
    currentOrderBook.asks = currentOrderBook.asks.map((ask) =>
      ask[0] === price ? [price, count, ask[2] + amount] : ask
    );
  }

  return currentOrderBook;
};

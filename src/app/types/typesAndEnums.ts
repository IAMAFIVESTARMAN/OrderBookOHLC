export type OrderbookParams = {
  orderbookPrecision: string;
  widthDivider: number;
  orderbookPair: string;
};

export type OrderBookEntry = [number, number, number]; // [price, count, amount]

export type OrderBookState = {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
};

export type OrderBookComponent = {
  data: OrderBookEntry[];
  type: string;
  widthDivider: number;
};

export type NavItem = {
  name: string;
  href: string;
};

export type NavItems = NavItem[];

export type ProductImage = {
  src: string;
  label: string;
};

export type Click = {
  onClick: () => void;
  precision: string;
};

export type DropdownProps = {
  onDropDownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  pair: string;
};

export type Duration = {
  timeDuration: string;
};

export type ChartCandle = {
  time: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
};
export enum OrderBookEntries {
  price = 0,
  count,
  amount,
}

export enum TradingPair {
  tBTCUSD = "Bitcoin",
  tLTCUSD = "Litecoin",
  tETHUSD = "Ethereum",
  tTRTUSD = "Terra",
}

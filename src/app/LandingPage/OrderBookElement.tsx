import Link from "next/link";
import React from "react";

const OrderBookElement = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <h1 className="text-4xl">OrderBook</h1>
      <p className="px-4">
        Our platform offers a comprehensive stock market order book graph,
        providing real-time data on buy and sell orders. It empowers traders
        with vital insights into market sentiment and liquidity, aiding informed
        decision-making and enhancing trading strategies.
      </p>

      <Link
        href="/orderbook"
        target="_blank"
        className="rounded-md bg-[#4bffb5] px-3.5 py-2.5 text-sm font-semibold text-gray-900 inline-block focus-visible:outline focus-visible:outline-2 "
      >
        See OrderBook
      </Link>
    </div>
  );
};

export default OrderBookElement;

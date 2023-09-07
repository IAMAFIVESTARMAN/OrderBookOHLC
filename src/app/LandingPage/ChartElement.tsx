import Link from "next/link";
import React from "react";

const ChartElement = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-12 self-start ">
      <h1 className="text-4xl">OHLC Chart</h1>
      <p className="px-4">
        Our OHLC (Open-High-Low-Close) chart is a powerful tool for visualizing
        price movements in the stock market. It displays the opening, closing,
        highest, and lowest prices within a chosen time frame, helping traders
        identify trends, volatility, and potential entry or exit points with
        precision and confidence.
      </p>

      <Link
        href="/Ohlcchart"
        target="_blank"
        className="rounded-md bg-[#4bffb5] px-3.5 py-2.5 text-sm font-semibold text-gray-900 inline-block focus-visible:outline focus-visible:outline-2 "
      >
        See OHLC Chart
      </Link>
    </div>
  );
};

export default ChartElement;

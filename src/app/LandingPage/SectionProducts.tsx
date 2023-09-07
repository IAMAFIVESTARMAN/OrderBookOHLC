import React from "react";
import ChartElement from "./ChartElement";
import OrderBookElement from "./OrderBookElement";
import ProductImage from "./ProductImage";

const SectionProducts = () => {
  return (
    <section className=" container m-auto   py-24 text-white">
      <h1 className="text-6xl font-bold   text-left ">
        Delivering Financial Freedom
      </h1>
      <p className="mt-6    text-left">
        Your assets. Your choices. Our technology
      </p>
      <div className=" grid grid-cols-2  justify-center py-24 gap-y-24 gap-x-12">
        <ChartElement></ChartElement>
        <ProductImage src="/ohlc.jpg" label="ohlc"></ProductImage>

        <ProductImage src="/orderbook.jpg" label="orderbook"></ProductImage>
        <OrderBookElement></OrderBookElement>
      </div>
    </section>
  );
};

export default SectionProducts;

import Image from "next/image";
import React from "react";
import { ProductImage } from "../types/typesAndEnums";

const ProductImage = ({ src, label }: ProductImage) => {
  return (
    <div className={` ${label === "ohlc" && "self-center"} productimage`}>
      <img alt={label} src={src || ""} className="rounded-xl px-10 " />
    </div>
  );
};

export default ProductImage;

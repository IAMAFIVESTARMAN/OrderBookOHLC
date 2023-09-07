import Link from "next/link";
import React from "react";

const HeroElement = () => {
  return (
    <section className="container m-auto h-[80vh] flex items-center justify-center  ">
      <div className="container m-auto h-[80vh] background-hero relative  "></div>
      <div className="flex flex-col items-center gap-10 absolute ">
        <h1 className="text-6xl font-bold  text-white ">
          Welcome to TradingFew: Perfect indeed !
        </h1>
        <p className="mt-6   text-white">
          Need currency exchange rates, trade,the top rates and top of the line
          support and precision based details. We got it all,
        </p>

        <h4 className="text-2xl font-semibold  text-white ">
          Join TradingFew and start trading today
        </h4>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link
            href="#"
            className="rounded-md bg-[#4bffb5] px-10 py-5  text-black text-base font-bold   hover:bg-teal-500 inline-block "
          >
            Get started
          </Link>
          <Link
            href="#"
            className="text-base font-bold  text-gray-900 bg-slate-400 px-10 py-5 rounded-md hover:bg-white"
          >
            Learn more <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroElement;

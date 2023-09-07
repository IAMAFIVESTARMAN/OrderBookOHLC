"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container m-auto h-[80vh] flex items-center justify-center py-24  ">
      <div className="flex flex-col items-center gap-10 ">
        <h1 className="text-6xl font-bold  text-white ">
          Something went wrong!
        </h1>
        <p className="mt-6   text-white">
          Uh Oh!, This should not have happened, Please try again , we think the
          page you are trying to access does not exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link
            href="#"
            className="rounded-md bg-[#4bffb5] px-10 py-5 text-sm text-black font-semibold   hover:bg-teal-500 inline-block "
          >
            Go back to Home
          </Link>
          <Link
            href="https://support.bitfinex.com/hc/en-us"
            className="text-sm font-semibold  text-gray-900 bg-slate-400 px-10 py-5 rounded-md hover:bg-white"
            target="_blank"
          >
            Still facing issues ? Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

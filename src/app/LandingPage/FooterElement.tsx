import Link from "next/link";
import React from "react";

const FooterElement = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-700 rounded-lg shadow m-4 text-center ">
      <div className="w-full mx-auto  p-8 flex justify-center gap-10 text-white ">
        <span className="text-sm text-white "> </span>© {year}
        <Link href="#" className="hover:underline">
          TradingFew
        </Link>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default FooterElement;

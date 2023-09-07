import Link from "next/link";
import React from "react";

import NavItems from "../constants/navigationItems";
import { NavItem } from "../types/typesAndEnums";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-8 gap-2 bg-[#4bffb5]">
      <div>
        <Link href="" className="flex justify-center items-center">
          <img
            src="https://www.bitfinex.com/images/bitfinex-logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <div className="flex justify-between gap-14 basis-full items-center">
          {NavItems.map((item: NavItem) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-semibold hover:text-white "
            >
              <p className=" hover:text-zinc-400 ">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Link
          href="#"
          target="_blank"
          className="text-sm font-semibold  text-gray-900"
        >
          SignUp/Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

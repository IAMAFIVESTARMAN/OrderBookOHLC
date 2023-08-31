"use client";

import { useState } from "react";
import TradingTable from "./components/TradingTable";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import {
  HiOutlineMagnifyingGlassMinus,
  HiOutlineMagnifyingGlassPlus,
} from "react-icons/hi2";
import Button from "./components/ButtonDecPre";
import ButtonDecPre from "./components/ButtonDecPre";
import ButtonIncPre from "./components/ButtonIncPre";

export default function HomePage() {
  const [bookOpen, setBookOpen] = useState<boolean>(false);
  const [apiParams, setAPIParams] = useState<string>("P0");
  const [widthDivider, setWidthDivider] = useState(0.01);

  function precisonDecHandler(precision: string) {
    switch (precision) {
      case "P0":
        setAPIParams("P1");
        break;
      case "P1":
        setAPIParams("P2");
        break;
      case "P2":
        setAPIParams("P3");
        break;
      case "P3":
        setAPIParams("P4");
        break;
      case "P4":
        setAPIParams("P5");
        break;
      case "P5":
        setAPIParams("decdisabled");
        break;
      default:
        console.log("break");
    }
  }

  function precisonIncHandler(precision: string) {
    switch (precision) {
      case "P5":
        setAPIParams("P4");
        break;
      case "P4":
        setAPIParams("P3");
        break;
      case "P3":
        setAPIParams("P2");
        break;
      case "P2":
        setAPIParams("P1");
        break;
      case "P1":
        setAPIParams("P0");
        break;
      case "P0":
        setAPIParams("disbaled");
        break;
      default:
        console.log("break");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="w-full">
        <div className="flex justify-between">
          <h1 className="flex justify-between items-center">
            <p> Orders</p>
            <span onClick={() => setBookOpen((prev) => !prev)}>
              {bookOpen ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowRight size={20} />
              )}
            </span>
            <span> Depth:{widthDivider}</span>
            <span> Precision:{apiParams}</span>
          </h1>
          <nav className="flex justify-between gap-2 ">
            <ButtonDecPre
              onClick={() => precisonDecHandler(apiParams)}
              precision={apiParams}
            ></ButtonDecPre>
            <ButtonIncPre
              onClick={() => precisonIncHandler(apiParams)}
              precision={apiParams}
            ></ButtonIncPre>
            <div>
              <HiOutlineMagnifyingGlassPlus
                onClick={() => setWidthDivider(0.01)}
              ></HiOutlineMagnifyingGlassPlus>
            </div>
            <div>
              <HiOutlineMagnifyingGlassMinus
                onClick={() => setWidthDivider(0.02)}
              ></HiOutlineMagnifyingGlassMinus>
            </div>
          </nav>
        </div>
        {bookOpen && (
          <TradingTable
            precision={apiParams}
            widthDivider={widthDivider}
          ></TradingTable>
        )}
        {/* <TestComponent></TestComponent> */}
      </article>
      {/* <CandlestickChart></CandlestickChart> */}
    </main>
  );
}

"use client";

import { useState } from "react";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import ChartWebSocketComponent from "./ChartWebsock";

export default function HomePage() {
  const [chartOpen, setChartOpen] = useState<boolean>(false);
  const [timeDuration, seTimeDuration] = useState<string>("5m");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#121723] text-white">
      <article className="w-full">
        <div className="flex justify-between">
          <h1 className="flex justify-between items-center">
            <p> Chart</p>
            <span onClick={() => setChartOpen((prev) => !prev)}>
              {chartOpen ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowRight size={20} />
              )}
            </span>
            <p>{`Time Duration : ${timeDuration}`}</p>
          </h1>
          <nav className="flex justify-between gap-2 items-center">
            <button onClick={() => seTimeDuration("1M")}>1M</button>
            <button onClick={() => seTimeDuration("14D")}>14D</button>
            <button onClick={() => seTimeDuration("1W")}>1W</button>
            <button onClick={() => seTimeDuration("1D")}>1D</button>
            <button onClick={() => seTimeDuration("6h")}>6h</button>
            <button onClick={() => seTimeDuration("1h")}>1h</button>
            <button onClick={() => seTimeDuration("30m")}>30m</button>
            <button onClick={() => seTimeDuration("5m")}>5m</button>
            <button onClick={() => seTimeDuration("1m")}>1m</button>
          </nav>
        </div>
        {chartOpen && (
          <ChartWebSocketComponent
            timeDuration={timeDuration}
          ></ChartWebSocketComponent>
        )}
      </article>
    </main>
  );
}

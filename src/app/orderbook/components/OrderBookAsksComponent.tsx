import { calculateTotalsDepth } from "@/app/helpers/DepthVisualizer";
import { calculateNewTotalsAsksBids } from "@/app/helpers/newAskBidTotalHelper";
import {
  OrderBookComponent,
  OrderBookEntries,
} from "@/app/types/typesAndEnums";
calculateTotalsDepth;
import React, { useMemo } from "react";

const OrderBookAsksComponent = ({
  data,
  type,
  widthDivider,
}: OrderBookComponent) => {
  const entryWidth = useMemo(
    () => calculateNewTotalsAsksBids(data, type),
    [data]
  );
  const totalWidth = useMemo(
    () => calculateTotalsDepth(data, widthDivider),
    [data, widthDivider]
  );

  return (
    <div>
      <div>
        <div className={`flex  justify-evenly rounded-xl items-center pb-2 `}>
          <div>Price</div>
          <div>Total</div>
          <div>Amount</div>
          <div>Count</div>
        </div>
      </div>
      {data.map((el: Array<number>, i: number) => (
        <div key={i + entryWidth[i]}>
          <div
            className={`flex relative justify-evenly items-center self-center -mt-1`}
          >
            <div
              className={`absolute h-5 -z-10 bg-[#3d1e28] left-0 transition-all duration-400 ease-in`}
              style={{
                width: `${Math.min(100, entryWidth[i] / totalWidth)}%`,
              }}
            ></div>
            <div>{el[OrderBookEntries["price"]]}</div>
            <div>{`${entryWidth[i].toFixed(3)}`}</div>
            <div>{`${Math.abs(el[OrderBookEntries["amount"]]).toFixed(
              3
            )}`}</div>
            <div>{el[OrderBookEntries["count"]]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderBookAsksComponent;

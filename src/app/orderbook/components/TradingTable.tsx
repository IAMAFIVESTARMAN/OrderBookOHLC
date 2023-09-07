import { OrderbookParams } from "@/app/types/typesAndEnums";
import WebSocketComponent from "./Websock";

const TradingTable = ({
  orderbookPrecision,
  widthDivider,
  orderbookPair,
}: OrderbookParams) => {
  return (
    <div className="h-full transform transition-transform duration-500 py-5">
      <div className="grid xl:grid-cols-2  grid-cols-1 w-full gap-0 border-y-2 py-10 ">
        <WebSocketComponent
          orderbookPrecision={orderbookPrecision}
          widthDivider={widthDivider}
          orderbookPair={orderbookPair}
        ></WebSocketComponent>
      </div>
    </div>
  );
};

export default TradingTable;

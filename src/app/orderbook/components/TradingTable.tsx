import WebSocketComponent from "./Websock";

type Trading = {
  precision: string;
  widthDivider: number;
};

function TradingTable({ precision, widthDivider }: Trading) {
  return (
    <div className="h-full">
      <div className="grid xl:grid-cols-2  grid-cols-1 w-full gap-x-4 ">
        <WebSocketComponent
          precision={precision}
          widthDivider={widthDivider}
        ></WebSocketComponent>
      </div>
    </div>
  );
}

export default TradingTable;

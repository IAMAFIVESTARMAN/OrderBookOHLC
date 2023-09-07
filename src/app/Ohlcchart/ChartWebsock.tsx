import React, { useState, useEffect } from "react";
import LightweightChart from "./lightweightChart";
import { Duration, ChartCandle } from "../types/typesAndEnums";
import { useCandleData } from "../hooks/useCandleData";
import Highycharts from "./Highycharts";
import { useHighLightData } from "../hooks/useHighLightData";

const ChartWebSocketComponent = ({ timeDuration }: Duration) => {
  const { chartData } = useCandleData(timeDuration);
  const { highlightChartData } = useHighLightData(timeDuration);

  const content = (
    <>
      {chartData.length > 0 ? (
        <div className="transition-all duration-400 ease-in p-10">
          <LightweightChart
            chartData={chartData}
            timeDuration={timeDuration}
          ></LightweightChart>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* {highlightChartData.length > 0 ? (
        <Highycharts
          timeDuration={timeDuration}
          highlightChartData={highlightChartData}
        ></Highycharts>
      ) : (
        <p>Loading...</p>
      )} */}
    </>
  );

  return content;
};

export default ChartWebSocketComponent;

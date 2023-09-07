import React from "react";
import dummy from "../../constants/dummyArray";

const Loading = () => {
  return (
    <>
      <div>
        <div>
          <div className={`flex  justify-around rounded-xl items-center `}>
            <div>Count</div>
            <div>Amount</div>
            <div>Total</div>
            <div>Price</div>
          </div>
        </div>
        {dummy.map((el: Array<number>, i: number) => (
          <div key={i}>
            <div className={`flex relative justify-around items-center -mt-1 `}>
              <div
                className={`absolute h-5 -z-10 bg-[#113534] xl:right-0 transition-all duration-400 animate-pulse
                ease-in `}
                style={{
                  width: `${Math.floor(Math.random() * 100)}%`,
                }}
              ></div>
              <div></div>
              <div></div>
              <div></div>

              <div className="opacity-0 ">1</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <div className={`flex  justify-between  rounded-xl items-center `}>
            <div>Count</div>
            <div>Amount</div>
            <div>Total</div>
            <div>Price</div>
          </div>
        </div>
        {dummy.map((el: Array<number>, i: number) => (
          <div key={i}>
            <div className={`flex relative justify-around items-center -mt-1`}>
              <div
                className={`absolute h-5 left-0 -z-10 bg-[#3d1e28] transition duration-400 
                ease-in animate-pulse`}
                style={{
                  width: `${Math.floor(Math.random() * 100)}%`,
                }}
              ></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="opacity-0">1</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loading;

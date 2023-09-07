const getCandleData = async (timeDuration: string, section = "hist") => {
  // console.log(timeDuration);
  try {
    const res = await fetch(
      `https://api-pub.bitfinex.com/v2/candles/trade:${timeDuration}:tBTCUSD/${section}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      }
    );

    // console.log(res.ok);
    if (res.ok) {
      const data = await res.json();

      // console.log(data);
      return data;
    }
  } catch (err) {
    return err;
  }
};

export default getCandleData;

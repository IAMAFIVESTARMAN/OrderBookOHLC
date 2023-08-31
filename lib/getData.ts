async function getData() {
  const res = await fetch(
    "https://api-pub.bitfinex.com/v2/book/tBTCUSD/P0?len=25",
    {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    }
  );
  const data = await res.json();
  return data;
}

export default getData;

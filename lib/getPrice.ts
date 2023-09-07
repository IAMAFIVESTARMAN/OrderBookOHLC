export async function fetchPrice() {
  const response = await fetch(
    "https://api-pub.bitfinex.com/v2/ticker/tBTCUSD",
    {
      method: "GET",
      headers: { accept: "application/json" },
      cache: "no-store",
    }
  );
  const data = await response.json();
  return { bids: data[0], asks: data[2], lastPrice: data[6] }; // Assuming the product value is at index 9 in the response
}

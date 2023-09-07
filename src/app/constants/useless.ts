// const socket = new WebSocket(socketUrl);

// socket.onopen = () => {
//   console.log("WebSocket connection is open");
//   let msg = JSON.stringify({
//     event: "subscribe",
//     channel: "candles",
//     key: `trade:${timeDuration}:tBTCUSD`, //'trade:TIMEFRAME:SYMBOL'
//   });

//   // console.log(`trade:${timeDuration}:tBTCUSD`);

//   socket.send(msg);
// };

// socket.onmessage = (event) => {
//   const eventdata = JSON.parse(event.data);

//   // console.log(initial, eventdata[1]);
//   if (Array.isArray(eventdata)) {
//     const [_, messageData] = eventdata;

//     // console.log(...messageData);

//     if (messageData[0] === "hb") {
//       return; // Skip heartbeat messages
//     } else {
//       if (!initial) {
//         setChartData(
//           messageData?.map((candle: any, i: number) => {
//             return {
//               time: candle[0] / 1000 + 19800,
//               open: candle[1],
//               close: candle[2],
//               high: candle[3],
//               low: candle[4],
//               volume: candle[5],
//             };
//           })
//         );
//         setInitial(true);
//       } else {
//         if (messageData[0] !== "h" && messageData.length == 6) {
//           // setChartData((prev) => [
//           //   ...prev,
//           //   {
//           //     time: messageData[0] / 1000 + 19800,
//           //     open: messageData[2],
//           //     close: messageData[2],
//           //     high: messageData[3],
//           //     low: messageData[4],
//           //     volume: messageData[5],
//           //   },
//           // ]);
//         }
//       }
//     }
//   }
// };

// socket.onclose = () => {
//   console.log("WebSocket connection is closed");
// };

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <article className=" w-full h-3/4">
        <div className="text-center">
          <h1>Welcome to BitFinex</h1>
          <p> Your assets, your choices, our technology</p>
        </div>
        <div className="flex justify-center gap-20 text-5xl p-12 rounded-xl bg-cyan-800">
          <Link
            href={`Ohlcchart`}
            target="_blank"
            className="inline-block px-4 py-8 bg-teal-400 rounded-xl text-cyan-950"
          >
            Ohlc chart
          </Link>
          <Link
            href={`orderbook`}
            target="_blank"
            className="inline-block px-4 py-8 bg-teal-400 rounded-xl text-cyan-950"
          >
            Order Book
          </Link>
          <Link
            href={`https://docs.bitfinex.com/docs`}
            target="_blank"
            className="inline-block px-4 py-8 bg-teal-400 rounded-xl text-cyan-950"
          >
            API documentation
          </Link>
        </div>
      </article>
    </main>
  );
}

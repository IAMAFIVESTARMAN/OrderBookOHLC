import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import { fetchPrice } from "../../lib/getPrice";
import NavBar from "./LandingPage/NavBar";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({}: Props): Promise<Metadata> {
  let price = await fetchPrice();
  const currentPrice = price.bids > price.asks ? price.bids : price.asks;

  return {
    title: ` ${
      currentPrice > price.lastPrice ? "▲" : "▼"
    }  ${currentPrice} BTC/USD | Bitfinex | Trade Crypto | BTC to USD`,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}

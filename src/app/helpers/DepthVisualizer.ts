import { OrderBookEntry } from "../types/typesAndEnums";
export const calculateTotalsDepth = (
  data: OrderBookEntry[],
  widthDivider: number
): number => {
  const sliceData = [...data].reduce((acc, curr) => acc + Math.abs(curr[2]), 0);

  return sliceData * widthDivider;
};

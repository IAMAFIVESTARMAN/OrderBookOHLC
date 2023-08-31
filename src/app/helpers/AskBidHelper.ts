export const calculateTotalsAsksBids = (
  index: number,
  data: Array<Array<number>>,
  type: string
) => {
  const sliceData = [...data]
    .filter((el: Array<number>, i: number) =>
      type === "bid" ? el[2] > 0 && i <= index : el[2] < 0 && i <= index
    )

    .reduce((acc, curr) => acc + Math.abs(curr[2]), 0);

  return sliceData;
};

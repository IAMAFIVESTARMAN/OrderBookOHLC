export const calculateTotalsDepth = (
  data: Array<Array<number>>,
  widthDivider: number
) => {
  const sliceData = [...data].reduce((acc, curr) => acc + Math.abs(curr[2]), 0);

  return sliceData * widthDivider;
};

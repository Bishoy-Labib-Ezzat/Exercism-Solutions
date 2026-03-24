export const saddlePoints = (matrix) => {
  const flatMatrix = matrix.flatMap((row, rowIndex) =>
    row.map((value, colIndex) => [value, colIndex, rowIndex])
  );

  const [rowMaxes, columnMins] = flatMatrix.reduce(
    ([rowMaxesAcc, colMinsAcc], [value, colIndex, rowIndex]) => {
      if (value > (rowMaxesAcc[rowIndex] ?? -1 / 0)) rowMaxesAcc[rowIndex] = value;
      if (value < (colMinsAcc[colIndex] ?? 1 / 0)) colMinsAcc[colIndex] = value;
      return [rowMaxesAcc, colMinsAcc];
    },
    [[], []]
  );

  return flatMatrix.reduce((saddlePoints, [value, colIndex, rowIndex]) => {
    if (value === rowMaxes[rowIndex] && value === columnMins[colIndex]) {
      saddlePoints.push({ row: rowIndex + 1, column: colIndex + 1 });
    }
    return saddlePoints;
  }, []);
};
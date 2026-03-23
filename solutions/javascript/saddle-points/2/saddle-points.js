export const saddlePoints = (matrix) => {
  const rowMaxes = matrix.map((row) => Math.max(...row)); // n

  const columnMins = matrix[0].map((_, col) => Math.min(...matrix.map((row) => row[col])));  // m * n

  return matrix.flatMap((row, rowIndex) =>
    row.reduce((saddlePoints, value, colIndex) => {
      if ( value === rowMaxes[rowIndex] && value === columnMins[colIndex]) {
        saddlePoints.push({row: rowIndex + 1, column: colIndex + 1});
      }
      return saddlePoints;
    }, [])
  );
  // Overall complexity: O(m * n) -> m = number of rows , n = number of columns
};
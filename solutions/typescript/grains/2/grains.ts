const validate = (n: number): void => {
  if (n < 1 || n > 64) throw new Error("Square must be between 1 and 64");
};

export const square = (n: number): bigint => {
  validate(n);
  return 1n << BigInt(n - 1); // 2^(n - 1)
};

export const total = (): bigint => {
  return (1n << 64n) - 1n; // (2^64) - 1
};

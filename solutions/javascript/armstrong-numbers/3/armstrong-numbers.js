export const isArmstrongNumber = (input) => {
  const number = BigInt(input);
  const digits = [...number.toString()];
  const power = BigInt(digits.length);
  return (
    number ===
    digits.reduce((result, char) => result + BigInt(char) ** power, 0n)
  );
};
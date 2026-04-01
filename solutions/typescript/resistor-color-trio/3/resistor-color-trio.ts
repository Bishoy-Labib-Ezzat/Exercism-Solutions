const COLORS_MAP = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;

type Color = keyof typeof COLORS_MAP;

const UNITS = [
  { name: "gigaohms", value: 10 ** 9 },
  { name: "megaohms", value: 10 ** 6 },
  { name: "kiloohms", value: 10 ** 3 },
] as const;

export function decodedResistorValue([
  firstColor,
  secondColor,
  multiplierColor,
]: Color[]): string {
  const firstDigit = COLORS_MAP[firstColor];
  const secondDigit = COLORS_MAP[secondColor];
  const multiplier = COLORS_MAP[multiplierColor];

  let totalValue = (firstDigit * 10 + secondDigit) * 10 ** multiplier;
  const unit = UNITS.find((unit) => totalValue >= unit.value);

  return unit
    ? `${totalValue / unit.value} ${unit.name}`
    : `${totalValue} ohms`;
}

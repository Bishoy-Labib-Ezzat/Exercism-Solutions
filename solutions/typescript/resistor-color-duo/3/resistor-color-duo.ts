enum COLORS {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

export function decodedValue(colors: (keyof typeof COLORS)[]): number {
  const [firstColor, secondColor] = colors;
  return COLORS[firstColor] * 10 + COLORS[secondColor];
}
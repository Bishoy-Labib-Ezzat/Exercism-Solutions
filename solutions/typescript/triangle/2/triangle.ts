export class Triangle {
  private readonly isValid: boolean;
  private readonly uniqueSides: number;

  constructor(...sides: [number, number, number]) {
    const [a, b, c] = [...sides].sort((x, y) => x - y);
    this.isValid = a > 0 && a + b >= c;
    this.uniqueSides = new Set(sides).size;
  }

  get isEquilateral() { return this.isValid && this.uniqueSides === 1; }
  get isIsosceles()   { return this.isValid && this.uniqueSides <= 2; }
  get isScalene()     { return this.isValid && this.uniqueSides === 3; }
}
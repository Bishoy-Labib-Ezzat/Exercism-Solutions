export class Matrix {
  private readonly data: number[][];

  constructor(text: string) {
    this.data = text
      .split("\n")
      .map((row) => row.trim().split(/\s+/).map(Number));
  }

  get rows(): number[][] {
    return this.data.map((row) => [...row]);
  }

  get columns(): number[][] {
    return this.data[0].map((_, i) => this.data.map((row) => row[i]));
  }
}
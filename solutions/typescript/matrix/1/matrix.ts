export class Matrix {
  private data: number[][];

  constructor(data: string) {
    this.data = data
      .split("\n")
      .map((numbers) => numbers.split(" ").map(Number));
  }

  get rows(): number[][] {
    return this.data;
  }

  get columns(): number[][] {
    return this.data[0].map((_, i) => this.data.map((row) => row[i]));
  }
}

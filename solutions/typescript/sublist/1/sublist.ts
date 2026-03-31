export enum ListComparison {
  Equal = "equal",
  Sublist = "sublist",
  Superlist = "superlist",
  Unequal = "unequal",
}

export class List {
  private readonly items: number[];
  constructor(...items: number[]) {
    this.items = items;
  }

  private isSubList(big: number[], small: number[]): boolean {
    if (small.length === 0) return true;

    for (let i = 0; i <= big.length - small.length; i++) {
      let match = true;

      for (let j = 0; j < small.length; j++) {
        if (big[i + j] !== small[j]) {
          match = false;
          break;
        }
      }

      if (match) return true;
    }

    return false;
  }

  compare(other: List): ListComparison {
    const a = this.items;
    const b = other.items;

    const aContainsB = this.isSubList(a, b);
    const bContainsA = this.isSubList(b, a);

    if (aContainsB && bContainsA) {
      return ListComparison.Equal;
    }

    if (aContainsB) {
      return ListComparison.Superlist;
    }

    if (bContainsA) {
      return ListComparison.Sublist;
    }

    return ListComparison.Unequal;
  }
}

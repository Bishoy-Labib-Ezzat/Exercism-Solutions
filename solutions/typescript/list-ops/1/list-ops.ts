export class List<T> {
  private values: T[];

  constructor(...values: T[]) {
    this.values = values;
  }

  public static create<T>(...values: T[]): List<T> {
    return new List(...values);
  }

  public forEach(callback: (value: T) => void): void {
    for (let i = 0; i < this.values.length; i++) {
      callback(this.values[i]);
    }
  }

  public append(list: List<T>): List<T> {
    const result: T[] = [];

    for (let i = 0; i < this.values.length; i++) {
      result[result.length] = this.values[i];
    }

    list.forEach((item) => {
      result[result.length] = item;
    });

    return new List(...result);
  }

  public concatenate(list: List<List<T>>): List<T> {
    let result = this.append(List.create());

    list.forEach((innerList) => {
      result = result.append(innerList);
    });

    return result;
  }

  public filter(predicate: (value: T) => boolean): List<T> {
    const result: T[] = [];

    for (let i = 0; i < this.values.length; i++) {
      const item = this.values[i];

      if (predicate(item)) {
        result[result.length] = item;
      }
    }

    return new List(...result);
  }

  public length(): number {
    let count = 0;

    for (const _ of this.values) {
      count++;
    }

    return count;
  }

  public map<U>(predicate: (value: T) => U): List<U> {
    const result: U[] = [];

    for (let i = 0; i < this.values.length; i++) {
      result[result.length] = predicate(this.values[i]);
    }

    return new List(...result);
  }

  public foldl<U>(
    predicate: (accumulator: U, value: T) => U,
    initial: U,
  ): U {
    let accumulator = initial;

    for (let i = 0; i < this.values.length; i++) {
      accumulator = predicate(accumulator, this.values[i]);
    }

    return accumulator;
  }

  public foldr<U>(
    predicate: (accumulator: U, value: T) => U,
    initial: U,
  ): U {
    let accumulator = initial;

    for (let i = this.values.length - 1; i >= 0; i--) {
      accumulator = predicate(accumulator, this.values[i]);
    }

    return accumulator;
  }

  public reverse(): List<T> {
    const result: T[] = [];

    for (let i = this.values.length - 1; i >= 0; i--) {
      result[result.length] = this.values[i];
    }

    return new List(...result);
  }
}
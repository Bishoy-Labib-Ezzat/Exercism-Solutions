export class List<T> {
  private readonly values: T[];

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
    const result: T[] = [];

    this.forEach((value) => {
      result[result.length] = value;
    });

    list.forEach((innerList) => {
      innerList.forEach((value) => {
        result[result.length] = value;
      });
    });

    return new List(...result);
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

  public map(mapper: (value: T) => unknown): List<unknown> {
    const result: unknown[] = [];

    for (let i = 0; i < this.values.length; i++) {
      result[result.length] = mapper(this.values[i]);
    }

    return new List(...result);
  }

  public foldl<U>(
    reducer: (accumulator: U, value: T) => U,
    initial: U,
  ): U {
    let accumulator = initial;

    for (let i = 0; i < this.values.length; i++) {
      accumulator = reducer(accumulator, this.values[i]);
    }

    return accumulator;
  }

  public foldr<U>(
    reducer: (accumulator: U, value: T) => U,
    initial: U,
  ): U {
    let accumulator = initial;

    for (let i = this.values.length - 1; i >= 0; i--) {
      accumulator = reducer(accumulator, this.values[i]);
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
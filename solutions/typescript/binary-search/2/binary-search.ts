// Generic Binary Search implementation in TypeScript

type Comparator<T> = (a: T, b: T) => number;

function binarySearch<T>(arr: T[], needle: T, compare: Comparator<T>): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const midValue = arr[mid];
    const cmp = compare(midValue, needle);

    if (cmp === 0) return mid;
    if (cmp < 0) left = mid + 1;
    else right = mid - 1;
  }

 throw new Error("Value not in array");
}

function defaultCompare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export function find<T>(
  haystack: T[],
  needle: T,
  compare: Comparator<T> = defaultCompare,
): number {
  return binarySearch(haystack, needle, compare);
}
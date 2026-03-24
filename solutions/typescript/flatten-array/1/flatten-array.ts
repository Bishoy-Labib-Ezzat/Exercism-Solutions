export function flatten(array: any[]): number[] {
  return array.flat(Infinity).filter(item => item != undefined);
}
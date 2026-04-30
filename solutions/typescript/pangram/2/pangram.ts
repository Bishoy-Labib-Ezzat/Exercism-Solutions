export function isPangram(text: string): boolean {
  const letters = new Set(text.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
}

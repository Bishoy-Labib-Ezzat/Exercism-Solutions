export function isPangram(text: string): boolean {
  const textLower = text.toLowerCase();
  const englishTextOnly = textLower.replace(/[^a-z]/g, "");
  const uniqueLetters = new Set(englishTextOnly);
  return uniqueLetters.size === 26;
}

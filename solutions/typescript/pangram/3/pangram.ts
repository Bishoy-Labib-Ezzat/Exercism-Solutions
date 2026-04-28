export function isPangram(text: unknown): boolean {
  if (typeof text !== "string") return false;

  const cleaned = text.toLowerCase().replace(/[^a-z]/g, "");
  const letters = new Set(cleaned);

  return letters.size === 26;
}

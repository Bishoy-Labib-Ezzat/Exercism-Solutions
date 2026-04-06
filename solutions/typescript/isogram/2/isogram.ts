export function isIsogram(text: string): boolean {
  const letters = text.toLowerCase().match(/[a-z]/g) || "";
  
  const uniqueText = new Set<string>(letters);
  return letters.length === uniqueText.size;
}

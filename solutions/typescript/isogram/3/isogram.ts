function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isIsogram(text: unknown): boolean {
  if (!isString(text)) {
    return false;
  }

  const matches = text.toLowerCase().match(/[a-z]/g);

  if (!matches) {
    return true;
  }

  const unique = new Set(matches);
  return matches.length === unique.size;
}

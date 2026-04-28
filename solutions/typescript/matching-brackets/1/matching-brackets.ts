function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isPaired(input: unknown): boolean {
  if (!isString(input)) return false;

  const bracketPairs: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const openingBrackets = new Set(Object.keys(bracketPairs));
  const closingBrackets = new Set(Object.values(bracketPairs));

  const stack: string[] = [];

  for (const char of input) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (closingBrackets.has(char)) {
      if (stack.length === 0) return false;

      const lastOpen = stack.pop()!;
      if (bracketPairs[lastOpen] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

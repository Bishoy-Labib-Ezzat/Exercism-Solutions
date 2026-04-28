function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isPaired(input: unknown): boolean {
  if (!isString(input)) return false;

  const pairs: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack: string[] = [];

  for (const char of input) {
    if (char in pairs) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (pairs[stack.pop()!] !== char) return false;
    }
  }

  return stack.length === 0;
}

type Operation = "plus" | "minus" | "multiplied by" | "divided by";

const operations: Record<Operation, (a: number, b: number) => number> = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  "multiplied by": (a, b) => a * b,
  "divided by": (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },
};

const isOperation = (value: string): value is Operation =>
  value === "plus" ||
  value === "minus" ||
  value === "multiplied by" ||
  value === "divided by";

export const answer = (question: string): number => {
  const match = /^What is (.+)\?$/.exec(question);

  if (!match) {
    if (question === "What is?") {
      throw new Error("Syntax error");
    }

    throw new Error("Unknown operation");
  }

  const cleaned = match[1];
  const words = cleaned.split(" ");
  const tokens: Array<Operation | number> = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (/^-?\d+$/.test(word)) {
      tokens.push(Number(word));
    } else if (word === "plus" || word === "minus") {
      tokens.push(word);
    } else if (
      (word === "multiplied" || word === "divided") &&
      words[i + 1] === "by"
    ) {
      const operation = `${word} by`;

      if (isOperation(operation)) {
        tokens.push(operation);
      }

      i++;
    } else {
      throw new Error("Unknown operation");
    }
  }

  if (tokens.length === 0 || typeof tokens[0] !== "number") {
    throw new Error("Syntax error");
  }

  for (let i = 0; i < tokens.length - 1; i++) {
    const isNum = typeof tokens[i] === "number";
    const nextIsNum = typeof tokens[i + 1] === "number";

    if (isNum === nextIsNum) {
      throw new Error("Syntax error");
    }
  }

  if (typeof tokens[tokens.length - 1] !== "number") {
    throw new Error("Syntax error");
  }

  let result = tokens[0];

  for (let i = 1; i < tokens.length; i += 2) {
    const operation = tokens[i];
    const nextValue = tokens[i + 1];

    if (typeof operation !== "string" || typeof nextValue !== "number") {
      throw new Error("Syntax error");
    }

    result = operations[operation](result, nextValue);
  }

  return result;
};
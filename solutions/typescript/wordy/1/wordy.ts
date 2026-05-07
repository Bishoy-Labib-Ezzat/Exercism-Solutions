type Operation = "plus" | "minus" | "multiplied by" | "divided by";

const operations: Record<Operation, (a: number, b: number) => number> = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  "multiplied by": (a, b) => a * b,
  "divided by": (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }
};

export const answer = (question: string): number => {
  // Check basic structure
  if (!question.startsWith("What is") || !question.endsWith("?")) {
    throw new Error("Unknown operation");
  }

  // Remove "What is" and "?"
  const cleaned = question.slice(7, -1).trim();
  
  // Requirement: "What is?" should throw Syntax error
  if (cleaned === "") throw new Error("Syntax error");

  const words = cleaned.split(" ");
  let tokens: (Operation | number)[] = [];

  for (let i = 0; i < words.length; i++) {
    const w = words[i];

    if (/^-?\d+$/.test(w)) {
      tokens.push(Number(w));
    } else if (w === "plus" || w === "minus") {
      tokens.push(w);
    } else if ((w === "multiplied" || w === "divided") && words[i + 1] === "by") {
      const op = `${w} by` as Operation;
      tokens.push(op);
      i++; // skip "by"
    } else {
      // If it's a number followed by something like "cubed"
      throw new Error("Unknown operation");
    }
  }

  // VALIDATION: Check for syntax errors (double numbers, double operators, etc.)
  if (tokens.length === 0 || typeof tokens[0] !== "number") throw new Error("Syntax error");
  
  for (let i = 0; i < tokens.length - 1; i++) {
    const isNum = typeof tokens[i] === "number";
    const nextIsNum = typeof tokens[i + 1] === "number";
    
    // Two numbers in a row or two operators in a row
    if (i < tokens.length - 1 && isNum === nextIsNum) {
      throw new Error("Syntax error");
    }
  }
  
  // Must end in a number
  if (typeof tokens[tokens.length - 1] !== "number") {
    throw new Error("Syntax error");
  }

  // PROCESS: Left-to-right calculation
  let result = tokens[0] as number;
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i] as Operation;
    const nextVal = tokens[i + 1] as number;
    result = operations[op](result, nextVal);
  }

  return result;
};
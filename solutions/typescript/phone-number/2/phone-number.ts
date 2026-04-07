export function clean(phoneNumber: string): string {
  if (/[a-z]/i.test(phoneNumber)) throw new Error("Letters not permitted");
  if (/[@:!]/.test(phoneNumber)) throw new Error("Punctuations not permitted");

  let digits = phoneNumber.replace(/\D/g, "");

  if (digits.length < 10) throw new Error('Must not be fewer than 10 digits');
  if (digits.length > 11) throw new Error("Must not be greater than 11 digits");
  
  if (digits.length === 11) {
    if (digits[0] !== "1") throw new Error("11 digits must start with 1");
  }

  const result = digits.slice(-10);

  if (result[0] === "0") throw new Error("Area code cannot start with zero");
  if (result[0] === "1") throw new Error("Area code cannot start with one");
  if (result[3] === "0") throw new Error("Exchange code cannot start with zero");
  if (result[3] === "1") throw new Error("Exchange code cannot start with one");

  return result;
}
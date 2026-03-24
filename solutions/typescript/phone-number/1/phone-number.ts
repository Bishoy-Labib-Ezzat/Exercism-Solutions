export function clean(phoneNumber: string): string {
  if (/[a-zA-Z]/.test(phoneNumber)) {
    throw new Error("Letters not permitted");
  }

  if (/[@:!]/.test(phoneNumber)) {
    throw new Error("Punctuations not permitted");
  }

  let digits: string = phoneNumber.replace(/[^\d]/g, "");

  if (digits.length < 10) {
    throw new Error('Must not be fewer than 10 digits');
  } else if (digits.length === 11) {
    if (!digits.startsWith("1")) {
      throw new Error("11 digits must start with 1");
    }
    digits = digits.slice(1);
  } else if (digits.length > 11) {
    throw new Error("Must not be greater than 11 digits");
  }

  const areaCode: string = digits.slice(0, 3);
  if (areaCode.startsWith("0")) {
    throw new Error("Area code cannot start with zero");
  }
  if (areaCode.startsWith("1")) {
    throw new Error("Area code cannot start with one");
  }

  const exchangeCode: string = digits.slice(3, 6);
  if (exchangeCode.startsWith("0")) {
    throw new Error("Exchange code cannot start with zero");
  }
  if (exchangeCode.startsWith("1")) {
    throw new Error("Exchange code cannot start with one");
  }

  return digits;
}

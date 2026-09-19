//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const days = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];

const gifts = [
  "a Partridge in a Pear Tree.",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming",
];

export const recite = (start, end = start) => {
  const verses = [];

  for (let day = start; day <= end; day++) {
    const currentGifts = gifts.slice(0, day).reverse();

    const verse = `On the ${days[day - 1]} day of Christmas my true love gave to me: ${currentGifts
      .map((gift, index) => {
        if (index === currentGifts.length - 1 && day > 1) {
          return `and ${gift}`;
        }

        return gift;
      })
      .join(", ")}\n`;

    verses.push(verse);
  }

  return verses.join("\n");
};
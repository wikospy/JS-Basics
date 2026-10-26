/*
 * map() transforms every item and returns a NEW array of the same length.
 * Syntax: const result = items.map((item, index) => newValue);
 */

// Real-life use:
// A store may add tax to every product price before displaying them to customers.
const prices = [10, 20, 30];
const pricesWithTax = prices.map((price) => price * 1.1);

console.log(pricesWithTax); // [11, 22, 33]

const productNames = ["Laptop", "Mouse", "Keyboard"];
const productNamesLowercase = productNames.map((name) => name.toLowerCase());
console.log(productNamesLowercase); // ["laptop", "mouse", "keyboard"]

// The callback runs once per item. The original `prices` array is unchanged.
// Challenge: create `names` and use map() to produce lowercase names.


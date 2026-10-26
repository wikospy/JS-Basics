/*
 * reduce() combines an array into one accumulated result.
 * Always choose an explicit initial value.
 */

// Real-life use:
// An online cart can total all item prices with one pass over the array.
const cart = [
  { name: "Notebook", price: 5 },
  { name: "Pen", price: 2 },
  { name: "Highlighter", price: 3 },
];
const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total); // 10

const orderValues = [30, 15, 20];
const finalAmount = orderValues.reduce((sum, value) => sum + value, 0);
console.log(finalAmount); // 65

// The accumulator starts at 0, then receives each updated sum.
// Challenge: reduce an array of numbers into its average.


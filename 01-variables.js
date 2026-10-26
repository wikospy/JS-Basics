/*
 * LEVEL 1 / TOPIC 1: VARIABLES
 *
 * What:
 * A variable is a named binding to a value. `const` and `let` are the modern
 * declarations used in frontend JavaScript.
 *
 * Why:
 * Real interfaces need to remember changing state, such as a user's name,
 * whether a menu is open, or how many items are in a cart.
 *
 * Syntax:
 *   const name = initialValue; // binding cannot be reassigned
 *   let count = initialValue;  // binding can be reassigned
 *
 * Prefer `const`. Use `let` only when the binding itself must receive another
 * value. `const` does not freeze an object; it only prevents reassignment of
 * the variable binding.
 */

// Real-life use:
// A shopping app stores the customer's name, current cart count, and checkout status.
const learnerName = "Asha";
let completedLessons = 0;

completedLessons += 1;

console.log(`${learnerName} completed ${completedLessons} lesson.`);

const lessonCount = 3;
const isReady = lessonCount > 0 && learnerName.length > 0;
const typedFromForm = "42";
const numericValue = Number(typedFromForm);

console.log(typeof learnerName, typeof lessonCount, isReady, numericValue);

// Real example: a checkout form sends strings, but the app needs actual numbers.
const cartItemsText = "3";
const cartItems = Number(cartItemsText);
const shippingFee = 15;
console.log(`Total to pay: $${cartItems * 25 + shippingFee}`);

/*
 * Line by line:
 * 1. `const learnerName = "Asha"` creates a binding whose value is a string.
 * 2. `let completedLessons = 0` creates a number binding that may be changed.
 * 3. `completedLessons += 1` reads 0, adds 1, and stores 1 back in the binding.
 * 4. The template literal reads both current values and creates one string.
 * 5. `console.log` sends that string to the browser developer console.
 * 6. Strings, numbers, booleans, `undefined`, `null`, symbols, and bigints are
 *    primitive values. Objects, arrays, and functions are reference values.
 * 7. Operators produce values: `+` can add numbers or concatenate strings,
 *    comparisons produce booleans, and `&&` / `||` short-circuit.
 * 8. Form controls usually provide strings, so `Number(typedFromForm)` makes
 *    the conversion explicit instead of relying on surprising coercion.
 *
 * The browser parses this source, creates the bindings in the current scope,
 * executes the statements from top to bottom, and calls the console API.
 *
 * Common mistakes:
 * - Using `var` by habit; its function scope and hoisting rules make reasoning
 *   about modern UI code harder.
 * - Reassigning a `const` binding.
 * - Assuming `const object = {}` makes every property immutable.
 * - Creating a variable before deciding what the data means.
 * - Using `==` when strict `===` communicates the intended type comparison.
 * - Treating every input string as a valid number without checking
 *   `Number.isNaN()` after conversion.
 *
 * Use explicit conversion (`Number`, `String`, or `Boolean`) at boundaries such
 * as form input. Do not convert values just to silence a type mismatch; first
 * decide what the data should mean.
 *
 * Use variables when a value has a meaningful name or must be reused.
 * Do not create variables for one-off values that make an expression less
 * readable, and do not use a variable when a constant would be clearer.
 */

// Challenge: write this yourself before asking for a solution.
// Create:
// 1. a const `bookTitle` containing a title,
// 2. a let `pagesRead` starting at 0,
// 3. increase `pagesRead` by 10,
// 4. log: "<title>: 10 pages read".
//
// When you finish, share your attempt and explain why each declaration is
// `const` or `let`. Do not replace this challenge with a copied solution.

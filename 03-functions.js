/*
 * LEVEL 1 / TOPIC 3: FUNCTIONS
 *
 * WHAT
 * A function is a reusable piece of behavior. It can receive input through
 * parameters and send a result back with `return`.
 *
 * WHY FUNCTIONS EXIST
 * Frontend programs repeat work: formatting labels, validating form values,
 * calculating totals, and responding to user actions. A function gives that
 * work a name, keeps it in one place, and lets us test it independently.
 *
 * BASIC SYNTAX
 *
 *   function functionName(parameter) {
 *     return expression;
 *   }
 *
 *   const result = functionName(argument);
 *
 * A parameter is the local name in the function definition. An argument is
 * the actual value supplied at the call site.
 */

// Real-life use:
// A store app uses the same function to calculate totals for different products.
function calculateTotal(quantity, unitPrice) {
  return quantity * unitPrice;
}

console.log(calculateTotal(2, 25)); // 50
console.log(calculateTotal(3, 12.5)); // 37.5

function formatGreeting(name) {
  return `Hello, ${name}!`;
}

const greeting = formatGreeting("Asha");
console.log(greeting);

/*
 * LINE BY LINE
 *
 * 1. `function formatGreeting(name)` creates a function named
 *    `formatGreeting`. The function body does not run yet.
 * 2. `name` is a parameter. It is available only while this call runs.
 * 3. The template literal creates a new string using the current `name`.
 * 4. `return` ends this function call and gives the string to its caller.
 * 5. `formatGreeting("Asha")` starts a call. JavaScript creates a call frame,
 *    binds `name` to `"Asha"`, executes the body, and receives the result.
 * 6. The returned value is stored in `greeting`.
 * 7. `console.log` prints the value. The function itself does not print.
 *
 * The browser stores the function value, then later executes it when the
 * call expression is reached. A function can be passed around as a value,
 * which is essential for event handlers and array methods.
 */

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(21)); // true
console.log(isAdult(15)); // false

/*
 * COMMON MISTAKES
 *
 * - Forgetting `return`, which makes the function result `undefined`.
 * - Confusing `console.log(value)` with returning `value`.
 * - Calling a function before supplying required information.
 * - Mutating outside state when the function could return a result instead.
 * - Making one function responsible for unrelated jobs, such as fetching,
 *   validating, calculating, and rendering all at once.
 *
 * USE FUNCTIONS when behavior is named, repeated, testable, or conceptually
 * separate from the surrounding code.
 *
 * DO NOT create a function merely to hide one obvious expression. Also avoid
 * functions with unclear names, hidden side effects, or too many unrelated
 * parameters.
 */

/*
 * FUNCTION FORMS
 *
 * Function declaration:
 *   function add(a, b) { return a + b; }
 *
 * Function expression:
 *   const add = function (a, b) { return a + b; };
 *
 * Arrow function:
 *   const add = (a, b) => a + b;
 *
 * These are all function values. Arrow functions have different `this`
 * behavior, which will be taught later; do not replace every function with an
 * arrow automatically.
 */

/*
 * CHALLENGE - ATTEMPT THIS YOURSELF
 *
 * Write `largerNumber(first, second)` so it returns the larger number.
 *
 * Test it with:
 *   largerNumber(8, 3)  // expected: 8
 *   largerNumber(4, 11) // expected: 11
 *   largerNumber(7, 7)  // expected: 7
 *
 * Before asking AI:
 * 1. Decide whether the function should print or return.
 * 2. Write the condition in plain English.
 * 3. Implement it and run the three tests.
 * 4. Ask AI to review your attempt, not to write a replacement.
 *
 * After review, change the function to handle invalid input and explain what
 * behavior you chose for values that are not numbers.
 */

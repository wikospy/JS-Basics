const book = { title: "Deep Work", author: "Cal Newport" };

// Real-life use:
// A dashboard may unpack data from an API response without repeating `book.title` and `book.author`.
const { title, author } = book;
const chapters = ["Focus", "Rest"];
const [firstChapter] = chapters;

console.log(title, author, firstChapter);

const order = { id: 42, customer: "Asha", total: 58 };
const { customer, total } = order;
console.log(`Customer: ${customer}, Total: $${total}`);

// Destructuring reads known positions or properties into named bindings.
// Challenge: destructure a shopping cart item and print its name and quantity.


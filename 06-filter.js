/*
 * filter() keeps items whose callback returns true.
 * The result may be shorter than the input; the original is unchanged.
 */

// Real-life use:
// A dashboard can show only tasks that are still open or products that are in stock.
const scores = [42, 81, 67, 95];
const passingScores = scores.filter((score) => score >= 70);

console.log(passingScores); // [81, 95]

const tasks = [
  { title: "Submit report", done: true },
  { title: "Reply to email", done: false },
  { title: "Book meeting", done: false },
];

const openTasks = tasks.filter((task) => !task.done);
console.log(openTasks);

// Challenge: filter an array of book objects to only unfinished books.
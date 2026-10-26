const temperature = 28;

// Real-life use:
// A weather app decides what message to show based on the current temperature.
if (temperature >= 30) {
  console.log("Hot");
} else if (temperature >= 20) {
  console.log("Comfortable");
} else {
  console.log("Cool");
}

// Real example: a task list loops through each item to check progress.
const tasks = [
  { name: "Pay electricity bill", done: true },
  { name: "Buy groceries", done: false },
  { name: "Book dentist appointment", done: true },
];

for (let i = 0; i < tasks.length; i += 1) {
  const task = tasks[i];
  if (task.done) {
    console.log(`Completed: ${task.name}`);
  }
}

for (let day = 1; day <= 3; day += 1) {
  console.log(`Day ${day}`);
}

// Challenge: loop over three tasks and print only tasks marked complete.


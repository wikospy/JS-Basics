const originalTags = ["js", "frontend"];

// Real-life use:
// You can merge existing arrays or pass several values into a function without repeating code.
const nextTags = [...originalTags, "browser"];
//... prints all the values without []
function joinTags(separator, ...tags) {
  return tags.join(separator);
}

console.log(nextTags);
console.log(joinTags(" | ", ...nextTags));

function sumScores(...scores) {
  return scores.reduce((sum, score) => sum + score, 0);
}

console.log(sumScores(70, 80, 90, 100)); // 340

// Spread expands values. Rest collects remaining arguments into an array.
// Challenge: write a function that accepts any number of scores and returns
// their total.


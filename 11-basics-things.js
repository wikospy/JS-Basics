let a = [2, 3, 4, 5];
console.log(a.reduce((acc, val) => acc + val, 0)); // 14
console.log(a.push(6)); //5
console.log(a.pop()); //6
console.log(a.shift()); //2
console.log(a.unshift(1)); //4
console.log(a.length); // 4
console.log(a.reverse()); // [5, 4, 3, 2]
console.log(a.sort()); // [2, 3, 4, 5]
console.log(a.slice(1, 3)); // [3, 4]
console.log(a.splice(1, 2)); // [3, 4]
console.log(a.indexOf(5)); // 2
console.log(a.includes(3)); // false
console.log(a.join(" | ")); // 2 | 5
console.log(a.concat([6, 7])); // [2, 5, 6, 7]
console.log(a.find((val) => val > 3)); // 5
console.log(a.findIndex((val) => val > 3)); // 1
console.log(a.filter((val) => val > 3)); // [5]
console.log(a.map((val) => val * 2)); // [4, 10]
console.log(a.forEach((val) => console.log(val))); // 2 5
console.log(a.every((val) => val > 1)); // true
console.log(a.some((val) => val > 4)); // true
console.log(a.toString()); // 2 | 5
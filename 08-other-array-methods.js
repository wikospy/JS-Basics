const users = [
  { id: 1, active: false },
  { id: 2, active: true },
];

// Real-life use:
// A support app can find the first active admin, check if any users are online,
// and verify that every user has a valid ID.
console.log(users.find((user) => user.active));
console.log(users.some((user) => user.active));
console.log(users.every((user) => typeof user.id === "number"));

const products = [
  { id: 101, inStock: true },
  { id: 102, inStock: false },
  { id: 103, inStock: true },
];

console.log(products.find((product) => product.id === 102));
console.log(products.some((product) => product.inStock));
console.log(products.every((product) => product.id > 0));

// Challenge: use find() to locate a product by id and handle a missing product.
// js
// const users = [
    // { id: 1, active: false },
    // { id: 2, active: true },
// ];

// console.log(users.find((user) => user.active));

// ### 1. `find()`
// `find()` returns the **first element** that satisfies the condition.

users.find((user) => user.active)
// It checks:

// id 1 → active false ❌
// id 2 → active true  ✅

// So the result is:
// { id: 2, active: true }

// ### 2. `some()`
console.log(users.some((user) => user.active));

// > **"Does at least ONE element satisfy this condition?"**

// There is one active user, so:true

// ### 3. `every()`
console.log(users.every((user) => typeof user.id === "number"));

// > **"Do ALL elements satisfy this condition?"**

// Both IDs are numbers:
// 1 → number ✅
// 2 → number ✅

// Therefore:true

// ### Easy way to remember

// | Method    | Question                           | Returns          |
// | --------- | ---------------------------------- | ---------------- |
// | `find()`  | "Give me the first matching item." | Object/item      |
// | `some()`  | "Does at least one match?"         | `true` / `false` |
// | `every()` | "Do all match?"                    | `true` / `false` |

// **Key idea:** `find()` gives you the actual object, while `some()` and `every()` give you a Boolean.

const books = [
    { title: "Maths", finished: true },
    { title: "Sanskrit", finished: false },
    { title: "Hindi", finished: false },
    { title: "Science", finished: true },
    { title: "English", finished: false }
];
const unfinished = books.filter((book) => !book.finished);
console.log(unfinished);
function largeNumber(first, second) {
    if (first > second) {
        return `${first} is greater than ${second}`
    } else if (first < second) {
        return `${second} is greater than ${first}`
    } else {
        return "Both are same"
    }
};
console.log(largeNumber(9, 7));
console.log(largeNumber(3, 7));
console.log(largeNumber(3, 3));
/* Here function have 3 conditions and two values, one is first and
other one is second so here when we put value in console.log(largeNumber())
it will take place with largeNumnber(first, second) after it all
contions are aplieded to it, and return give value*/
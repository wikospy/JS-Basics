const numbers = [30, 90, 23, 45, 66, 65];
const avergae = numbers.reduce((sum, value) => sum + value / numbers.length, 0 );
console.log(avergae);
function total(...score) {
    return score.reduce((sum, value) => sum + value, 0); 
}
console.log(total(44, 55, 66, 77, 88, 99, 22, 33, 11));
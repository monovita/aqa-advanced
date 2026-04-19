const originalArray = [10, 20, 30, 40, 50];

const sumArray = originalArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumArray);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//usando filter e reduce !
/*
const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); */

// usando o reduce ! 

const sumPair2 = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers2 = (array) => array.reduce(sumPair2, 0);

console.log(sumNumbers2(numbers)); 
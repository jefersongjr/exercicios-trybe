// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

let number = (item) => item % 5 === 0 ;
const findDivisibleBy3And5 = () => {
    numbers.find(number);
}

console.log(findDivisibleBy3And5())
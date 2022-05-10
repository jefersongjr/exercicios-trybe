const sum = (...numbers) => numbers.reduce((acc,curr) => acc+ curr);

console.log(sum(2, 3, 5));

//função sum que dado um número variável de elementos retorna a soma desses elementos. rest parameter
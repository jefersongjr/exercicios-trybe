const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [number1, number2] = saudacoes;

number2(number1);

// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const array = [comida,animal,bebida] ;
let [food, anml, drink] = array;
food = 'arroz';
drink = 'agua';
anml = 'gato';


console.log([food, drink, anml]);

// Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); 

[,,,...numerosPares] = numerosPares; // as vírgulas tiram os numeros que elas simbolizam

console.log(numerosPares); 
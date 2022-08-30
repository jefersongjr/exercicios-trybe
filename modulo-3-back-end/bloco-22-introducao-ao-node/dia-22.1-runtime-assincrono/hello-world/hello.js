const readline = require('readline-sync');

const name = readline.question('Whats your name?');
const age = readline.questionInt('How old are you?');

//console.log('hello-world');

console.log(`Hello, ${name}! You are ${age} years old!`)
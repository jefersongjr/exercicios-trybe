let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index=0; index < numbers.length ; index += 1 ){
    console.log(numbers[index]);
}/*imprimir o array */

let soma = 0;

for(index = 0 ; index <numbers.length; index += 1){
    soma += numbers[index];
}
console.log(soma); /* percorra todo array e some os elementos*/
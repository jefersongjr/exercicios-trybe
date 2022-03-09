let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*1 - imprimir o array */
for(let index=0; index < numbers.length ; index += 1 ){
    console.log(numbers[index]);
}

/*2 - percorra todo array e some os elementos*/
let soma = 0;

for(index = 0 ; index <numbers.length; index += 1){
    soma += numbers[index];
}
console.log(soma); 

/* 3 -Faça a média aritmetica */
let mediaAritmetica = soma/(numbers.length);
console.log(mediaAritmetica);  

/*4- mostre se a média é menor ou maior que 20 */

if(mediaAritmetica >20){
    console.log('Valor maior 20');
}else {
    console.log('valor menor ou igual a 20');
}

/* 5 - utilizando for imprima o maior número do array */
let maiorNumero =0;
for(index = 0 ; index <numbers.length; index += 1){
    if(maiorNumero < numbers[index]){
        maiorNumero = numbers[index] ;
    }else {
        maiorNumero = maiorNumero;
    } 
}
console.log(maiorNumero);
const num1 = 12;
const num2 = 12;

let maiorNumero = null;

if (num1 > num2){
    maiorNumero = num1;
}else if(num1 < num2){
    maiorNumero = num2;
}else {
    maiorNumero = "os numeros são iguais"
}

console.log(maiorNumero)
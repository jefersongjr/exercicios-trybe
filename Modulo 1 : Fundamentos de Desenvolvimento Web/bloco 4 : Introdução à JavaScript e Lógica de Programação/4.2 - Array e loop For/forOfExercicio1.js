let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names){
    console.log(name);
}

function FizzBuzz(numbers1){
    let codigo = [];
    for( let index = 0 ; index < numbers1.length ; index += 1){
        if(numbers1[index] % 3 === 0 && numbers1[index] % 5 !== 0){
            codigo.push('fizz');
        }else if(numbers1[index] % 5 === 0 && numbers1[index] % 3 !== 0){
            codigo.push('buzz');
        }else if(numbers1[index] % 5 === 0 && numbers1[index] % 3 ==0){
            codigo.push('fizzBuzz')
        }else{
            codigo.push('bug!')
        }
        return codigo;
    }
}

FizzBuzz([2, 15, 7, 9, 45]);
const maiorString = (array) => {
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
      maior = array[index];
    }
  }
  return maior;
};

const menorString = (array) => {
    let menor = array[0];
    for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menor.length) {
      menor = array[index];
    }
  }
  return menor;
};

console.log(maiorString(['java', 'javascript', 'python', 'html', 'css']));
console.log(menorString(['java', 'javascript', 'python', 'html', 'css']));

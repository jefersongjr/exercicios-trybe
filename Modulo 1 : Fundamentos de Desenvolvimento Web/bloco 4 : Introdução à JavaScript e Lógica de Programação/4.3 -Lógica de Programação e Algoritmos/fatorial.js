//crie uma função fatorial ex= 4! =4x3x2x1 = ?!

const fatorial = (number) => {
  let total = 1;
  for (number = number; number > 0; number -= 1) {
    total = total * number;
  }
  return `O fatorial, "${number}" é  = ${total}`;
};

console.log(fatorial(10));

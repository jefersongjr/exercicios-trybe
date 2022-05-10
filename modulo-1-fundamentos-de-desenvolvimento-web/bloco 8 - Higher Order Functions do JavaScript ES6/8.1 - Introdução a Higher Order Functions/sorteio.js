const sorteio = (minhaEscolha, numero) => minhaEscolha === numero;

const loteria = (minhaEscolha, callback) => {
  const numero = Math.floor((Math.random() * 5) + 1);

  return callback(minhaEscolha, numero) ? 'Parabéns, você acertou!' : 'Tente de novo!';
};

console.log(loteria(3, sorteio));
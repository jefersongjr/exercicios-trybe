//Faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Maçã', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Pêra', 'Manga'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ... additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
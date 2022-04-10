const novoEmpregado = (nome) =>{
    const email = nome.toLowerCase().replace(' ', '_');
    return `${nome}, Email: ${email}@trybe.com`;
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), //-> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond '),//-> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(novoEmpregado));
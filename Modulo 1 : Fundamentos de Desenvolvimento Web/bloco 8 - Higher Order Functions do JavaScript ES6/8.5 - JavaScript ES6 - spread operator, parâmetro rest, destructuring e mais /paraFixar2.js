
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const personalAndProfessional = {...user, ...jobInfos}; // Juntando os dois objetos com spread operetor

  console.log(personalAndProfessional);

  const {name: nome, age , nationality, profession, squad, squadInitials} = personalAndProfessional ;

  console.log(`Hi, my name is ${nome}, I'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} - ${squad} `);

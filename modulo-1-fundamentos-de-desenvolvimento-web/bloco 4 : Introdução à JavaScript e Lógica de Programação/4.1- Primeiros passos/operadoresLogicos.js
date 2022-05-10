const currentHour = 11;
let mensage = " ";

if( currentHour >= 22){
    mensage = "Não deveriamos comer nada, é hora de dormir";
}else if(currentHour >= 18 && currentHour < 22) {
    mensage = "Rango da noite, vamos jantar!";
}else if(currentHour >= 14 && currentHour < 18){
    mensage = "Vamos fazer bolo pro café da tarde ?";
}else if(currentHour >= 11 && currentHour <14){
    mensage = "Hora do almoço!!";
}else if(currentHour >=4 && currentHour < 11){
    mensage = "humm! cheiro de café bem passado. "
}

console.log(mensage);

let weekDay = "terça-feira";

if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay=== "quarta-feira"|| weekDay=== "quinta-feira" || weekDay=== "sexta-feira"){
    console.log("Oba! mais um dia de aprendizado na Trybe!");
}else if(weekDay === "sabado" || weekDay === "domingo"){
    console.log("Finalmente! descanso merecido UwU");
}
console.log(weekDay)
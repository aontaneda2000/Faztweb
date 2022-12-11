/*
 SPREAD OPERADOR
Lo que hace este operador es traer todos los elementos de este arreglo y ingresalos en este nuevo


*/

const friends = ["Aaron", "Tunex"];
const grandparents = ["Chicho", "Tunex"];

//  GENERA UN NUEVO ARREGLO Y NO ALTERA
console.log([...friends, ...grandparents]);

const users = {
  name: "Aaron",
  age: 22,
};

const address = {
  stree: "Jerusalen",
};

//  GENERA UN OBJETO Y NO LO ALTERA
const newInfo = {
  ...users,
  ...address,
};

console.log(newInfo);

/* 
Cuando una propiedad no esta definida se utiliza el operador de encadenamiento opcional ya que en react consumimos API externas en las cuales la informacion tarda en llegar por lo cual se hace uso de este operador en caso de que esta propiedad no exista.
*/

const newUser = {
  name: "Aaron",
  age: 22,
  address: {
    street: "Jerusalen",
    city: "Santo Domingo",
  },
};

console.log(newUser.location?.a);

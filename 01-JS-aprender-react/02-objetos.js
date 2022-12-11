/* OBJETO BASICO */
const user = {
  //clave y valor: key and value
  x: 20,
  //propiedades
  name: "aaron",
  lastname: "chavez",
  adress: {
    city: "bogota",
  },
  //amigos de una red social
  friends: ["brandon", "elena"],
  active: true,
  //metodos o funciones
  sendMail: function () {
    return "sendin email";
  },
  //nueva sintaxis de funciones
  sendMail2() {
    return "sendin email";
  },
};

console.log(user.sendMail());

/* CREAR OBJETOS A PARTIR DE OTROS

Esto se puede hacer cuando la propiedad es igual el nombre de la variable 
*/
const name = "laptop";
const price = 3000;

const newProduct = {
  //Propiedad name, price va a contener lo que tiene la const
  name: name,
  price: price,
};
// NUEVA FORMA
const newProduct2 = {
  name,
  price,
};

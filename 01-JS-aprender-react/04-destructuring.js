const user = {
  name: "joe",
  age: 21,
};

function printInfo(user) {
  return "<h1>Hola " + user.name + "</h1>";
}

document.body.innerHTML = printInfo(user);

/* 
UTILIZANDO DESTRUCTURING PARA EVITAR TIPEAR user.name
*/

function printInfUser({ name }) {
  //primera forma
  return "<h2> Hola " + name + "</h2>";
  //2da forma
  return `<p>Hola como estas ${name}</p>`;
}

document.body.innerHTML = printInfUser(user);

/* FUNCTIONES */
function hello() {
  console.log("Hola");
}

//Ejecutar funcion: permite reutilizar logica
hello();

/* ======RETORNAR VALORES: objetos, arrays, funciones*/
function Hola() {
  return "hola";
}
//guardar en una variable
const echo = Hola();
//imprmir consola

//Programacion funcional: Una funcion que retorna otra funcion
//REACT: Se utiliza en react en componentes.

function Hola() {
  return function () {
    return "hola";
  };
}

console.log(hello()());

/* ==========PARAMETROS */
function bye(name) {
  return "bye" + name;
}

console.log(bye("Aaron"));

//2 PARAMETROS
function add(x, y) {
  return x + y;
}

add(1, 2);

/*   
PARAMETROS POR DEFECTO: 
Cuando se llama una funcion y no se le pasa los argumentos que recibe lo que hara js es ponerlo como undefined.
Por lo tantno se soluciona agregandole parametros por defectos de dos maneras

*/

//1era manera
function add(x, y) {
  if (y === undefined) {
    y = 9;
  }

  return x + y;
}
add(2);

//2da manera
function add(x, y = 2) {
  return x + y;
}
add(2);

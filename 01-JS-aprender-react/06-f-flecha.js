const button = document.createElement("button");

button.innerText = "CLICK PRRO";

document.body.append(button);

button.addEventListener("click", () => {
  alert("me hiciste click");
});

/* ================= Inline arrow =================*/
// Return implicito: No se coloca llaves y se coloca un valor se conoce como un return implicito
// El return implicito evita escribir la palabra reservada 'return' en la cual se escribe bastante codigo

const showNumber = () => ["a"]; //booleans, strings, arrays

// document.write(showNumber(1, 2));

//========== return implicito en objetos: Lo que entinede js es que ese es el bloque de codigo de la funcion y no hace el return
const showObject = () => {
  name: "aaron";
};

//========== SOLUCION RETURN IMPLICITO: Encerrar el objeto en parentesis
const showObject2 = () => ({ name: "aaron" });

//========== ES IGUAL A RETURN NO IMPLICITO:
const showObject3 = () => {
  return { name: "aaron" };
};

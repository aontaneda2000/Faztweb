console.log(
  (function () {
    document.write("F.anonima");
  })()
);

/* 1 Crea Etiqueta html de tipo button */
const button = document.createElement("button");

/* 2 Inserta texto en esa etiqeuta html */
button.innerText = "click me";

/* 3 Pinta la informacion en el cuerpo del doc html */
document.body.append(button);

/* 4 Esa etiqueta de tipo buton escucha el evento click  y ejecuta la funcion lo que lleva en su interior */
button.addEventListener("click", function () {
  alert("clicked");
});

/* OTRA FORMA
 */

const button2 = document.createElement("button");

button2.innerText = "CLICKEAME MY BRO";

document.body.append(button2);

/* MANEJA EL CLICK */
const handleClick = function () {
  alert("handle button2");
};

button2.addEventListener("click", handleClick);

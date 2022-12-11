//document: hace referencia al documento
document.title;

/* ================== */
//createElement: Crea elementos html
const title = document.createElement("h1");
//INNERTEXT: Texto a mostrar
title.innerText = "Hola mundo desde JS";
/* ================== */
const button = document.createElement("button");
button.innerText = "click";

/* ======= EVENT HANDLERS O MANEJADORES DE EVENTOS
  -SELECCIONAR ELEMENTOS
  -DAR CLICK
  -ARRASTAR ELEMENTOS
  -SON EVENTOS O INTERACCIONES QUE EL NAVEGADOR PUEDE |ESCUCHAR.
  EVENTOS: 
*/

//Cuando haga click en este boton quiero ejecutar esta funcion
//MANIPULACION DEL DOM O DOCUMENT OBJECT MODEL
button.addEventListener("click", function () {
  title.innerText = "Texto actulizado con js";
  alert("se realizo un click ");
});

/* 
lAS BIBLIOTECAS NOS SIMPLIFICAN 

*/

/*  APPEND: AÑADIR ETIQUETA EN EL BODY */
document.body.append(title);
document.body.append(button);

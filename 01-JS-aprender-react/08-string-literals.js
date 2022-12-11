//Crear elemento de una etiqueta html button
const button = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

//Insertar texto dentro de la etiqueta
button.innerText = "Clickeame prro";
button2.innerText = "Guardar";
button3.innerText = "Si / No";

//1era forma añadir estilos
button.style = "color: white; background: black";

//2da forma añadir estilos: Constantes tienen un valor y son añadidos dentro los template strings
const background = "red";
const color = "white";
const isAuthorized = true;

button2.style = `background:${background}; color:${color}`;

// 3forma añadir estilos: Mediante un operador ternario
button3.style = `background: ${isAuthorized ? "blue" : background}; color:${
  isAuthorized ? color : "white"
}`;

//Pintar elementos en el cuerpo del documento
document.body.append(button);
document.body.append(button2);
document.body.append(button3);

button.addEventListener("click", () => {
  if (isAuthorized) {
    alert("Authorized");
  } else {
    alert("No Authorized");
  }
});

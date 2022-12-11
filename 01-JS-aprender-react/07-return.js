const button = document.createElement("button");

button.innerText = "Clickeame prro";

document.body.append(button);

const isAuthorized = false;

button.addEventListener("click", () => {
  if (isAuthorized) {
    alert("Authorized");
  } else {
    alert("No Authorized");
  }
});

/* OTRA FORMA: LEER CODIGO LEGIBLE evitar ELSE */

button.addEventListener("click", () => {
  if (isAuthorized) {
    return alert("Authorized");
  }
  return alert("No Authorized");
});

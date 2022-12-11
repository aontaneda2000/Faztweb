/* Crear ul */
const ul = document.createElement("ul");

/* 
fetch: Es un biblioteca del navegador
*/

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    /* Json es codigo del navegador es Una API del navegador convierte a json para poder verlo en consola y tambien es asincrono tarda en procesar*/
    return response.json();
    // console.log(response);
  })
  // cuando termine de transformar la inf que muestra por consola
  .then((data) => {
    data.forEach((post) => {
      const li = document.createElement("li");
      li.innerText = post.title;
      ul.append(li);
    });
    document.body.append(ul);
  });

/* ESTO FUNCIONA DENTRO DE UNA FUNCION */
async function load() {
  /* 
  response: Recibe la Respuesta del server para luego se convertira en json
   await: Marca como asincrono 
   */
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  /* Convierte la response en json para leer */
  const data = await response.json();
  console.log(data);
}
load();

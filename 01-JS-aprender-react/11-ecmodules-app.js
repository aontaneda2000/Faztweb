/* 
- export: Exporta datos primitivos y compuestos -> export const a = 'A'
- export default: Exporta valores por defecto pero solo el nombre de la identificador sin la palabra reservada.

- import con export: Se utiliza destructuracion para llamar distintos tipos de datos
- import con exportdefault: No se utiliza destructuracion y se utiliza un nombre de variable cualquiera.

*/

import { sumar } from "./11-ecmodules-sumar.js";
import newUser from "./users/users.controller.js";

console.log(sumar());
console.log(newUser);

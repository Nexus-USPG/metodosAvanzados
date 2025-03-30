/*Un sistema de mensajes guarda las palabras de una oración en una lista. Crea una función
que reciba esa lista de palabras y las una en una sola frase.["Hola", "mundo", "esto", "es",
"JS"] */

let frase1 = ["Hola"];
let frase2 = ["mundo"];
let frase3 = ["esto"]; 
let frase4 = ["es"];
let frase5 = ["JS"];

let unirfrase = frase1.concat(frase2, frase3, frase4, frase5);
console.log(unirfrase);
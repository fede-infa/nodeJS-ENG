// Obligar a que interprete de forma estricta el codigo JavaScript

"use strict"

var i = 1; // Que pasa si quito var? Da error, ya que el modo estricto no interpeta que es var por defecto
console.log(i);

// Si el objeto tiene el atributo writable como falso, no se puede sobreescribir su valor
let object = Object.create(null, {x : {value: 1, writable: true}});
object.x = 2;

console.log(`objeto estatico ${object.x}`);
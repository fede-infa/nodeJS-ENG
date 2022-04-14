const i = 0;

//i = 2; // Da error ya que una constante no puede reasignarse, pero si puede cambiar su estado dentro

// Ejemplo const mutable

const persona = {
    edad : 26
}

console.log(`Primera llamada: ${persona.edad}`);

persona.edad = 29;

console.log(`Segunda llamada: ${persona.edad}`);
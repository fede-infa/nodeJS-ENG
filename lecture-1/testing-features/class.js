
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }

    static contador = 0;

    saludo(){
        console.log(`Hola!`);
    }
}

let fede = new Persona('Fede', 29);

console.log(fede.nombre);
console.log(fede.edad);
console.log(Persona.contador);
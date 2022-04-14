
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
};

let juan = new Persona('Juan', 35);
let fede = new Persona('Fede', 29);
console.log(juan, fede);

// prototype es como indicar que se aplique a todas las instancias de Persona
Persona.prototype.saluda = () =>{
    console.log(`Hola!!`);
}

juan.saluda();

// Propiedades estatica de la Persona, no pertenece a la instancia
Persona.contador = 0
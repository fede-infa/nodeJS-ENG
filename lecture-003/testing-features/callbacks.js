// CALLBACKS
// Un callback es una funcion que se envia como argumento en otra funcion. La intencion es que la funcion que hace de receptora ejecute la funcion que se le está pasando por parámetro.

// En este ejemplo vemos como las funciones ejecutar y ejecutar1 reciben un callback.
const ejecutar = unaFuncion => unaFuncion();
const saludar = () => console.log('saludos');;

ejecutar(saludar);


const ejecutar1 = (callback, params) => callback(params);
const sayHi = name => console.log(`saludos ${name}`);

ejecutar1(sayHi, 'insecto');


//Convenciones de los callbacks
// Siempre es el ultimo parametro
// Suele ser una funcion que recibe dos parametros
// La funcion madre llama al callback al finalizar todas sus operaciones
// Si la operacion fue exitosa la función llamará al callback pasando 'null' como primer parámetro y el resultado en el segundo parámetro
// Si la operación resultó en un error, la función llamará al callback pasando el error obtenido como primer parámetro

// Ejemplo de funcion callback con convenciones
const callbackExample = (error, result) => {
    if(error){
        // Do something with the error
    } else {
        // Do something with the result
    }
}
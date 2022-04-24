
const sumar = (a, b) => a + b;

let op1 = 23;
let op2 = 11;

let resultado = sumar(op1, op2);
console.log(`La suma de ${op1} y ${op2} es igual a ${resultado}`);

// Con llaves para multiples instrucciones
const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
}

console.log(`La multiplicacion de ${op1} y ${op2} es igual a ${resultado}`);
//---------------------------------------------------

const soloArgumento = a => a + 2; // Sin parentesis si solo es un argumento
console.log(`${op1} + 2 es igual a ${soloArgumento(op1)}`);

//--------------------------------------------------- FUNCION ANONIMA

const printMsg = () => {
    console.log(`Hallo!`);
}
printMsg();

//---------------------------------------------------
// Cuando una array function retorna un objeto en una instruccion, el mismo debe ir entre parentesis
const getPersona = () => ({nombre: 'Fede', edad: 29})
console.log(getPersona());


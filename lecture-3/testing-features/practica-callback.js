
const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const division = (num1, num2) => num1 / num2;
const multiplicacion = (num1, num2) => num1 * num2;

const operacion = (num1, num2, op) => op(num1, num2);

console.log(operacion(1,2,suma));

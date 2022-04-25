import * as mathOps from './lib/mathOps';

const message: string = "Hi typescript!";
console.log(message);

let num1: number = 10, num2: number = 5;

console.log(`${num1} + ${num2} = ${mathOps.sumar(num1, num2)}`);
console.log(`${num1} - ${num2} = ${mathOps.restar(num1, num2)}`);
console.log(`${num1} * ${num2} = ${mathOps.mult(num1, num2)}`);
console.log(`${num1} / ${num2} = ${mathOps.div(num1, num2)}`);
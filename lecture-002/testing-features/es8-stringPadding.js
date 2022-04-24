// STRING PADDING
// Rellena la cadena actual con una cadena dada para rellenar desde el inicio se usa 'padStart()' y desde el final 'padEnd()'

console.log('abc'.padStart(10));
console.log('abc'.padStart(10, 'foo'));
console.log('abc'.padStart(6, '123456'));

console.log('5'.padStart(2, '0'));


console.log('abc'.padEnd(10));
console.log('abc'.padEnd(10, 'foo'));
console.log('abc'.padEnd(6, '123456'));

console.log('5'.padEnd(2, '0'));
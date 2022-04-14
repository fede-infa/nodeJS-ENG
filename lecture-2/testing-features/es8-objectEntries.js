// OBJECT ENTRIES
// Devuelve una matriz de pares propios de una propiedad enumerable [key, value] 

let obj = {foo: 'bar', baz: 42};
console.log(Object.entries(obj)); // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]

console.log(Object.entries('foo')); // [[0, 'f'], [1, 'o'], [2, 'o']]

// Obtaining key + value from an array
Object.entries(obj).forEach(([key, value]) =>{
    console.log(key + ' ' + value);
});

// Obtaining key + value from an object
for(let [key, value] of Object.entries(obj)){
    console.log(key + ' ' + value);
}
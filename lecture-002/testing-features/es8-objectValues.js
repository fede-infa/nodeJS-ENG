//OBJECT VALUES (**)
//Devuelve un array con los valores de las propiedades enumerables de un objeto.

const obj1 = {
    a: 'asd',
    b: 3,
    c: true
}

console.log(Object.values(obj1)); // ['asd', 3, true]

let obj2 = { foo: 'bar', baz: 42};
console.log(Object.values(obj2)); // ['bar', 42]

obj2 = {0: 'a', 1: 'b', 2: 'c'};
console.log(Object.values(obj2)); // ['a', 'b', 'c']

obj2 = {10: 'a', 1: 'b', 5: 'c'};
console.log(Object.values(obj2)); // ['b', 'c', 'a']

let myObj = Object.create({}, {getFoo: { value: function(){ return this.foo}}});
myObj.foo = 'bar';
console.log(Object.values(myObj)); // ['bar'] (Imprime solo var ya que una funcion no es una propiedad enumerable)

obj2 = 'foo';
console.log(Object.values(obj2)); // ['f', 'o', 'o'] Se obliga al string a comportarse como objeto


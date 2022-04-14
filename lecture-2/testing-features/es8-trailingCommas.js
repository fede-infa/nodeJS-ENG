// TRAILLING COMMAS
// Son utiles al agregar nuevos elementos, parametros o propiedades al codigo JS. Lo unico que hace es permitir dejar una coma al final y que no rompa

let arr = [1, 2, 3, ]
arr;
arr.length;

let object = {
    foo: 'bar',
    baz: 'qwerty',
    age: 42,
};


function f(p) {}
function f(p,) {}
(p) =>{};
(p,) => {};

f(p);
f(p,);
Math.max(10, 20);
Math.max(10, 20, );


let obj = {
    one(a, ) {},
    two(a, b) {},
};

class C {
    one(a, ){}
    two(a, b, ) {}    
}
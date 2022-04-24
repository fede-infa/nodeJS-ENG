 //INCLUDES: Determina si una matriz incluye un determinado elemento, devolviendo true or false.
 // Al comparar strings distingue de minusculas y mayusculas
 // Permite un segundo parametro, el mismo indica a partir de que posicion se debe buscar
 console.log('=========== Includes ===========');
 const array = [1, 2, 3];
 console.log(array.includes(2));
 // expected output: true
 console.log(array.includes(1, 1));
 // expected output: false
 
 const pets = ['cat', 'dog', 'bat'];
 console.log(pets.includes('cat'));
 // expected output: true
 console.log(pets.includes('at'));
 // expected output: false


 //Segundo parametro 'From index'
 //si fromIndex es mayor o igual a la longitud de la matriz, se devuelve false
 //si fromIndex es negativo, el indice calculado es el siguiente: array.length + fromIndex < 0 ? => 'Busca en toda la matriz'

console.log(`
    ${[1, 2, 3].includes(2)}
    ${[1, 2, 3].includes(4)}
    ${[1, 2, 3].includes(3, 3)}
    ${[1, 2, 3].includes(3, -1)}
    ${[1, 2, NaN].includes(NaN)}
`);
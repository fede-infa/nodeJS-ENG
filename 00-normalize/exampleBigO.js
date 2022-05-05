const array1 = [1,2,3,4,5,6,7,8,9];
/* 
// O(1)
console.log('Hallo Welt');

// O(N)
array1.forEach( element => {
    console.log(element);
}) // O(array.length) ==> O(9)

// O(N^2)
array1.forEach( element =>{
    array1.forEach(data =>{
        console.log(`${element} - ${data}`);
    })
}) // O(9^2) ==> O(array.length ^ 2)
 */


// Example with arrays methods
console.time('filter');
const resultFilter = array1.filter(element => element === 7);
console.log(resultFilter);
console.timeEnd('filter');

console.time('find');
const resultFind = array1.find(element => element === 7);
console.log(resultFind);
console.timeEnd('find');

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Breakable arrays: find(), some(), include(), findeIndex(), IndexOf()

Unbreakable: filter(), map(), forEach(), every(), reduce()

find() =/= filter()
some() =/= every()

 */
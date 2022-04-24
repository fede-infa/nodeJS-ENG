// La funcion se guarda en la memoria pero no se puede acceder despues, solo existe en el momento en la que se llame. Se crea, se ejecute y muere

let array = [1, 2, 3, 4];
console.log(`==== FUNCION CONVENCIONAL ====`);
array.forEach(function(num){
    console.log(num);
})

console.log(`==== FUNCION ANONIMA ====`);
array.forEach( char => {
    console.log(char);
})

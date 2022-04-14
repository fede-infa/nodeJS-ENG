// Funciones que se declaran y se invocan de forma inmediata

console.log(`==== Como funcion convencional ====`);
(function(a, b){
    console.log(a + b);
}) (2, 3)

console.log(`==== Como funcion flecha ====`);
((a, b) => {
    console.log(a + b);
}) (2, 4)
console.log(`========= VAR =========`);
var a = 10;
(function(){
    var a = 20;
    console.log(`clg 1: ${a}`); // Output? 20
    if(true){
        var a = 30;
        a = 40;
        console.log(`clg 2: ${a}`); // Output? 40
    }
    console.log(`clg 3: ${a}`); // Output? 40
}) ()

console.log(`clg 4: ${a}`); // Output? 10 - Todas las modificaciones que le hice son dentro de la funcion

console.log(`========= LET =========`);
var a = 10;
(function(){
    var a = 20;
    console.log(`clg 1: ${a}`); // Output? 20
    if(true){
        let a = 30;
        a = 40;
        console.log(`clg 2: ${a}`); // Output? 40
    }
    console.log(`clg 3: ${a}`); // Output? 20
}) ()

console.log(`clg 4: ${a}`); // Output? 10 - Todas las modificaciones que le hice son dentro de la funcion
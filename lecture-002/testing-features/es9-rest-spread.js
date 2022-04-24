// REST / SPREAD

//REST - Desestructuracion del objeto
// Al utilizar ...autos estamos diciendole que en autos se guarden el resto del objeto
console.log(`REST`);
const { manzana, pera, ...autos} = { pera: 'pera', manzana: 'manzana', policia: 'policia', carrera: 'carrera'};

console.log(pera);
console.log(manzana);
console.log(autos);

// Spread
// Crea un objeto a partir de otras variables
console.log(`SPREAD`);
const cosas = {pera, manzana, ...autos}; //Utiliza el autos de linea 6
console.log(cosas);


function print(...a) { // el ...a indica que no sabe cuantos parametros van a ingresarse
    console.log(a);
}

print(1,2,3,4,5,6,7,8) // Imprime un arreglo con todos los numeros
print('fede', 'infa')

function print2(nombre){
    console.log(nombre);
}

print2(nombre = 'Fede');

function print3({lastName}){
    console.log(lastName);
}

print3({name: 'Fede', lastName: 'Infa'});
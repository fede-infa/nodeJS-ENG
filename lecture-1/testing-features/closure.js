// Clausura, es una funcion que guarda referencias del estado adyacente. En otras palabras, permite acceder al ambito de una funcion exterior desde una funcion interior, se crean cada vez que una funcion es creada


function crearFuncion(){
    let nombre = 'Federico';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

let miFuncion = crearFuncion(); // Ahora miFuncion tiene acceso a las variables internas de crearFuncion()
miFuncion(); // ahora es de tipo closure


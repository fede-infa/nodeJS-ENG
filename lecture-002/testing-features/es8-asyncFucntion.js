// ASYNC/AWAIT function
// Define una funcion asincrónica, retorna una Promise, cuando la función se termine de ejecutar Promise resolverá con el valor devuelto, si la función async genera una excepción o algún valor Promise se rechazará con el valor generado.

// El operador Await es usado para esperar una Promise. Solo puede ser usado dentro de una Async function

async function wait(seconds){
    return new Promise( (resolve, reject) =>{
        setTimeout( () =>{
            resolve(seconds + ' seconds');
            // reject('salio todo mal')
        }, seconds * 1000);
    });
}

// console.log(wait(3).then( result =>{
//     console.log(result);
// }).catch(err =>{
//     console.log('error!', err);
// }));

async function execute(){
    let result = await wait(3);
    console.log(result);
}

execute()


async function wait(seconds){
    return new Promise( (resolve, reject) =>{
        setTimeout( () =>{
            resolve(seconds + ' seconds');
            // reject('salio todo mal')
        }, seconds * 1000);
    });
}

console.log(wait(3).then( result =>{
    console.log(result);
}).catch(err =>{
    console.log('error!', err);
}).finally( () =>{
    console.log(`Finalizo todo`); // Se utiliza para cerrar la conexion a base de datos luego de finalizar una operacion
})
);

// async function execute(){
//     let result = await wait(3);
//     console.log(result);
// }

// execute()
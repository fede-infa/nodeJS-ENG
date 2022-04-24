async function wait(seconds){
    return new Promise( (resolve, reject) =>{
        setTimeout( () =>{
            resolve(seconds + ' seconds');
            // reject('salio todo mal')
        }, seconds * 1000);
    });
}

async function asyncFunction(){
    const promises = [
        wait(1),
        wait(1),
        wait(1)
    ];

    //Normal iterator
    for (const item of promises){
        console.log(item); //Logs a promise
    }

    for await (const item of promises){
        console.log(item); //Logs a resolved promise
    }
}

asyncFunction().then(res =>{
    console.log('Finalizado');
})
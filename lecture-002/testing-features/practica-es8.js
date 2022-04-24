
async function wait(seconds){
    return new Promise( (resolve, reject) =>{
        setTimeout( () =>{
            resolve(seconds + ' seconds');
            // reject('salio todo mal')
        }, seconds * 1000);
    });
}

async function show(object){
    for (let[key,value] of Object.entries(object)){
        await wait(2)
        console.log(`${key}, ${value}`);
    }

    return 'Proceso finalizado';
}

show({name: 'Federico', lastName: 'Infantino'}).then( res =>{
    console.log(res);
})
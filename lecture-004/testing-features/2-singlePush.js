
async function persona(){
    return new Promise((res, resj) =>{
        setTimeout(() => {
            res({nombre: 'fede'})
        }, 350);
    });
}

console.log(persona());
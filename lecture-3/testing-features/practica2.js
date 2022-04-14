
const endProcess = () => console.log('Finalizado!');

const wait = ms =>{
    return new Promise( res => {
        setTimeout(res, ms);
    });
}

const showLetters = async (string, time, callback) =>{
    let arrayLetter = [...string];
    for(let i = 0; i < arrayLetter.length; i++){
        console.log(arrayLetter[i]);
        await wait(time);
    }
    callback();
}

showLetters('Hola!', 0, endProcess)
showLetters('Bienvenidos', 250, endProcess)
showLetters('Lamina', 500, endProcess)
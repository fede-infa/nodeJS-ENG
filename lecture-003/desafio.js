
const wait = time => {for (let i = 0; i < time *3e6; i++);}

const showLetters = (text, time, wordsCounter, callback) =>{
    let totalWords = wordsCounter;
    let newTime = time;
    let amountWords = text.split(' ');
    totalWords += amountWords.length;

    for(let i = 0; i < amountWords.length; i++){
        if(time){
            wait(newTime);
        } else{
            wait(1000);
        }
        console.log(amountWords[i]);
    }
    callback(null, totalWords);
}

showLetters('hola mundo', 250, 0, (err, totalWords) =>{
    showLetters('practico nodejs', 350, totalWords, (err, totalWords) =>{
        showLetters('saludos', 500, totalWords, (err, totalWords) =>{
            console.log(`Proceso terminado, el total de palabras es de: ${totalWords}`);
        })
    })
});



function * idRandomNumber(min, max){
    let index = 0;

    while(true){
        yield {
            index: index++,
            number: Math.floor(Math.random() * (max - min + 1)) + min,
            date: new Date().toLocaleString()
        }
    }
}

let gen = idRandomNumber(1, 20);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


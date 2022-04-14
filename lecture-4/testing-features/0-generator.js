function * createIds(){
    let index = 0;
    while(true){
        yield index++; // el Yield detiene la ejecucion del while, por lo que no se ejecutara infinitamente, solo cuando sea llamada nuevamente
    }
}

let gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
const add = (number) =>{
    return (number2) => {
        return number + number2;
    }
}

const param = add(2);
console.log(param(2));

const execute2 = add(2)(2);
console.log(`Second way of execute a closure: ${execute2}`);
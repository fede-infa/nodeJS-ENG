function calculator(operator, ...numbers){
    if(numbers.length < 2 || operator.length > 1 || !'+-/*'.includes(operator)){
        return false
    }
    let result = 0;

    if(operator == '+'){
        result = numbers.reduce((a, b) => a + b);
    } else if(operator == '-'){
        result = numbers.reduce((a, b) => a - b);
    } else if(operator == '/'){
        result = numbers.reduce((a, b) => a / b)
    } else{
        result = numbers.reduce((a, b) => a * b)
    }
    return result
}

module.exports = calculator;
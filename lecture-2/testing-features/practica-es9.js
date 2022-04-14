
function mySum(...numbers){
    let result = 0;

    numbers.forEach( number => {
        result += number;
    })
    
    return [result, '-'];
}

console.log(mySum(1, 2, 3));

let total = [...mySum(1,2), ...mySum(1,1,1), ...mySum(3,4)];
console.log(total);
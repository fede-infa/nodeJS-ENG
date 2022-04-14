let result = {};

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

for(let i = 0; i < 25; i++){
    let number = randomNumber(1, 20);
    result[number] = (result[number] || 0) + 1;
}

console.log(result);
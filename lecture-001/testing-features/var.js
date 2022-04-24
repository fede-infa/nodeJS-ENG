var j = 'global';
function foo(){
    var i = 'local';
    console.log(i);
}

foo();
console.log(j);
console.log(i);

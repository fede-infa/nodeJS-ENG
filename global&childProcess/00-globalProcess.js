function example1(){
    function example2(){
        function example3(){
            console.log('example3')
        }
        example3()
        return;
    }
    example2()
    return;
}

console.log('----------- Process Events -----------')
console.log = (d) =>{
    process.stdout.write(d + '\n')
}
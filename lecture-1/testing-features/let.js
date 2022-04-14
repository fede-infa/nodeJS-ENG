function foo(){
    let i = 0;

    if(true){
        let i = 1;
        console.log('dentro del if:', i); // 1
    }

    console.log('fuera del if', i); // 0
}

foo()

let array = ['6**2', '**', '3**2', '4**', '4**5', '8**2**', '4*=5']

let resultado = array.map( exp => {
    // Los strings pueden utilizar ciertos metodos de los arrays
    if(exp.includes('**')) {
        let data = exp.split('**') // Parte el string y retorna un nuevo string sin estos caracteres
        if(data[0] != '' && data[1] != ''){
            return data[0] ** data[1]
        }
    }
    return null;
});

console.log(resultado);

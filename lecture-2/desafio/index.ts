let casosPrueba: {number1: number, number2: number, operacion: string}[] = [{
    number1: 6,
    number2: 2,
    operacion: 'resta'
},{
    number1: 6,
    number2: 2,
    operacion: 'suma'
},{
    number1: 4,
    number2: 3,
    operacion: 'multiplicacion'
}]
async function operacion(number1: number, number2: number, operacion: string){
    let resultado: number = 0;

    if (operacion.toLowerCase() === 'suma'){
        
        await import('./operaciones/suma').then( resolve =>{
            let suma = new resolve.Suma(number1, number2);
            resultado = suma.resultado();
        });
    } else if(operacion.toLowerCase() === 'resta'){
        await import('./operaciones/resta').then( resolve =>{
            let resta = new resolve.Resta(number1, number2);
            resultado = resta.resultado();
        })
    } else {
        return 'Operacion invalida';
    }

    return resultado;
}

async function operaciones(){
    for (let i = 0; i < casosPrueba.length; i++){
        console.log(await operacion(casosPrueba[i].number1, casosPrueba[i].number2, casosPrueba[i].operacion));
    }
}

operaciones();
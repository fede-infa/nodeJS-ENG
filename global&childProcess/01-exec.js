const { exec } = require('child_process')

// Error => Tipo error
// stderr es un stream de error, cuando viene por stream se puede hacer otras manipulaciones
// stdout es un stream de salida
exec('dir', (error, stdout, stderr) =>{
    if(error){
        console.error(`Error: ${error.message}`)
        return;
    }

    if(stderr){
        console.error(`stderr: ${stderr}`)
    }

    console.log(`stdout: \n ${stdout}`)
})
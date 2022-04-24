// Ejemplo de callback donde se escribe archivo y al finalizar se loguea la hora

const formatDate = date => `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

const writeFile = (route, data, callbackLog) => {
    //Simulacion de un archivo guardandose

    const stringDate = formatDate(new Date());
    callbackLog(stringDate, 'grabacion exitosa!');
};

// Funcion callback
const login = (date, message) => console.log(`${date}: ${message}`);

// Llamada a la funcion
writeFile('/server/datos/', 'los datos', login);

// Si la funcion 'writeFile' fuera la unica que utiliza login se podria usar una funcion anonima de la siguiente manera
writeFile('/server/datos/', 'los datos', (date, message) =>
    console.log(`${date}: ${message}`));

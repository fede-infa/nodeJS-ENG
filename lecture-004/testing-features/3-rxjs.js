
const rxjs = require('rxjs');

const observable = rxjs.interval(1000);
const subscripcion = observable.suscribe(x => console.log(x));
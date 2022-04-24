
// With commonJs
// const moment = require('moment'); 

//With ESModules (in package.json "type": "module")
import moment from 'moment';

const birthdayDate = '06/02/1993';

console.log(`Today is: ${moment().format('DD/MM/YYYY')}`);
console.log(`I born in ${birthdayDate}`);
console.log('I was born ' + moment(birthdayDate, 'DD/MM/YYYY').fromNow());
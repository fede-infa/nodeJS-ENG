
let buf1 = new Buffer.alloc(100); // 100 posiciones
let buf2 = new Buffer.alloc(26); // 26 posiciones

let string1 = '\u00bd + \u00bc = \u00be'

buf1.write('abcd', 0, 4, 'ascii')

console.log(
    buf1, 
    buf1.toString('ascii'),
    string1,
    'Cantidad caracteres=' + string1.length,
    'Cantidad de bytes que ocupa=' + Buffer.byteLength(string1, 'utf-8')
)


for(let i = 0; i < buf2.length; i++){
    buf2[i] = i + 97 // 97 en ASCII es `A`
}

console.log(
    'length buf2=' + buf2.length,
    'buf2 to string=' + buf2.toString('ascii')
)
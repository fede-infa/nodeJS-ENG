
const result = /foo.bar/.test('foo\nbar');
console.log(result); // >> false

const result2 = /foo.bar/s.test('foo\nbar');
console.log(result2); // >> true

/^.$/.test('\n'); // >> false
/^[^]$/.test('\n'); // >> alternativa - true
/^.$/s.test('\n'); // >> ES2018 - true
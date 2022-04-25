'use strict';

// ES6
var list = [2, 3, 4, 7];
list.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});

var person = { name: 'Fede' };

var fruits = ['apple', 'orange', 'banana'];
var fruits2 = [].concat(fruits);

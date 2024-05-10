/*

Duomens tipo nustatymas

TYPEOF (duomens tipo nustatymo operatorius)


*/
function empty() {}


console.log(typeof 5);
console.log(typeof 3.1415);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof {});
console.log(typeof empty);

console.log('--------------');

// Kai norite patikrinti ar TAI yra masyvas
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));


console.log('--------------');

const tikrinamasDalykas = null;
if (tikrinamasDalykas === null) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('--------------');

const a = 12526;
const aType = typeof a;

console.log(a);
console.log(aType);

if (aType === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING:', aType);
}

console.log('--------------');

const x = 'asd';
const y = 7;

if (typeof x !== 'number') {
    console.log('ERROR: x');
} else if (typeof y !== 'number') {
    console.log('ERROR: y');
} else {
    console.log('VISKAS OK');
}










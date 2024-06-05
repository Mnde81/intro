
const text = 'Labas rytas';

console.log(text.repeat(2));

String.prototype.firstSymbol = function () {
    
    return this[0];
}

console.log(text.firstSymbol());
console.log('AAAA'.firstSymbol());


String.prototype.isUpperCase = function () {
    // return '' + this;          sutekstina
    return ('' + this) === ('' + this).toUpperCase();
}

console.log('ABC'.isUpperCase());
console.log('Abc'.isUpperCase());
console.log('abc'.isUpperCase());

// --------------------------------------

console.log((3.1415).toFixed(2));

Number.prototype.double = function () {
    return this * 2;
}

console.log((7).double());
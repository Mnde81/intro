/*

- jeigu, pirmas parametras nera skaicius
        - graziname klaidos pranesima
- jeigu, antras parametras nera skaicius
        - graziname klaidos pranesima
        
- Atskirame kintamaje issisaugome sandaugos reiksme
- Graziname sandaugos reiksme

*/



function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo.';
    }

    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo.';
    }

    const answer = a * b;
    return answer;
}


console.log(multiply(2, 2));
console.log(multiply(2, -2));
console.log(multiply(-2, -2));
console.log(multiply(-2, 2));
console.log(multiply(2, 3.1415));
console.log(multiply(2.727, 3.1415));
console.log(multiply(-2.727, 3.1415));
console.log(multiply(-2.727, -3.1415));

console.log(multiply(2, Infinity));
console.log(multiply(Infinity, Infinity));
console.log(multiply(Infinity, -Infinity));

console.log(multiply(2, NaN));
console.log(multiply(NaN, NaN));
console.log(multiply(NaN, -NaN));


console.log('---------------------');


console.log(multiply(5, 'Labas'));
console.log(multiply(5, 'Labas'.length));
console.log(multiply(5, []));
console.log(multiply(5, [].length));
console.log(multiply(5, [7]));
console.log(multiply(5, [7].length));
console.log(multiply(5, [7, 2]));
console.log(multiply(5, [7, 2].length));

console.log(multiply(5, true));
console.log(multiply(5, false));

console.log(multiply(5, undefined));
console.log(multiply(5, null));

console.log(multiply(5, multiply));
console.log(multiply(5, multiply()));

console.log(multiply(5, multiply(2, 4)));

console.log(multiply(5));
console.log(multiply());
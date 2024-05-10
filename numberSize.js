function numberSize(n) {
    const nAsText = '' + n;  // '' + 2 = '2'

    // 'agr'.length
    // 2 -> '2'.length -> 1
    return nAsText.length;
}

console.log(numberSize(2), '-->', 1);
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);


console.log(1452);
console.log('' + 1452);
console.log((1452).toString());

const b = 123;
console.log(b.toString());


console.log(typeof 1452);
console.log(typeof ('' + 1452));


console.log('' + 'Labas');
console.log('' + true);
console.log('' + false);
console.log('' + []);
console.log('' + [1, 2, 3]);
console.log('' + numberSize);
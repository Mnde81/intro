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

console.clear();



function numberSize(n) {
    if (typeof n !== 'number') {
        return 'Blogas duomenu tipas.'
    }

    const nAsText = '' + n;     // 'Infinity'

    if (!isFinite(n)) {
        return 'Duok normalu skaiciu 👀';
    }

    let size = nAsText.length;

    if (n % 1 !== 0) {
        size--;
    }

    if (n < 0) {
        size--;
    }

    return size;
}

console.log(numberSize(0), '-->', 1);
console.log(numberSize(2), '-->', 1);
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);
console.log(numberSize(3.14), '-->', 3);
console.log(numberSize(3.1415), '-->', 5);
console.log(numberSize(-25), '-->', 2);
console.log(numberSize(-4895), '-->', 4);
console.log(numberSize(-3.14), '-->', 3);
console.log(numberSize(-3.1415), '-->', 5);

console.log('---------------------');

console.log(numberSize(NaN));
console.log(numberSize(Infinity));
console.log(numberSize(-Infinity));

console.log('---------------------');

console.log(numberSize());
console.log(numberSize(true));
console.log(numberSize(false));
console.log(numberSize('zodis belekoks, ka zinau'));
console.log(numberSize('pomidoras'));
console.log(numberSize(''));
console.log(numberSize([]));
console.log(numberSize([1]));
console.log(numberSize([1, 2]));
console.log(numberSize(['labas']));
console.log(numberSize(['labas', 'rytas']));
console.log(numberSize(['labas', 'rytas', 'Lietuva']));
console.log(numberSize(undefined));
console.log(numberSize(null));
console.log(numberSize(numberSize));
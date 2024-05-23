

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



const marks = [10, 2, 8, 4, 6]
const abc = ['a', 'b', 'c', 'd']

console.log('-----concat-----------');
console.log([...marks].concat([1, 2, 3]));
console.log([...marks].concat(5, 6));
console.log([...marks].concat(4, 5, [1, 2, 3]));
console.log([...marks].concat([1, 2, 3], 5 ,6));
console.log([...marks].concat(3, 3, [1, 2, 3], 5 ,6));
console.log([...marks, 3, ...[1, 2, 3]]);

console.log('----copyWithin------------');
console.log([...marks]);
console.log([...marks].copyWithin(2, 0, 1));
console.log([...marks].copyWithin(2, 0, 2));
console.log([...marks].copyWithin(2, 0, 3));
console.log([...marks].copyWithin(3, 0, 3));

console.log('----fill------------');
console.log([...marks]);
console.log([...marks].fill(888));
console.log([...marks].fill(0));
console.log([...marks].fill('labas'));
console.log([...marks].fill(0, 2));
console.log([...marks].fill(0, 1, 3));

const desimtZuikiu = new Array(10).fill('zuikiu');

console.log(desimtZuikiu);

console.log('-----flat-----------');
console.log([...marks]);
console.log([1, 2, 3].flat());
console.log([1, 2, 3, [4, 5]].flat());
console.log([1, 2, 3, [4, 5], 7].flat());
console.log([1, [[2, 3], [4, 5]], 7].flat());
console.log([1, [[2, 3], [4, 5]], 7].flat().flat());
console.log([1, [[2, 3], [4, 5]], 7].flat(2));

console.log('------includes----------');
console.log([...marks]);
console.log([...marks].includes(2));
console.log([...marks].includes(0));
console.log([...marks].includes(1));

console.log('------indexOf----------');
console.log([...marks]);
console.log([...marks].indexOf('labas'));
console.log([...marks].indexOf(10));
console.log([...marks].indexOf(6));

console.log([...marks].indexOf(10, 2));

function turboIndexOf(list, search){
    // [10, 2, 8, 4, 6] -> [2] true
    // [10, 2, 8, 4, 6] -> [2, 8] true
    // [10, 2, 8, 4, 6] -> [2, 8, 4] true
    // [10, 2, 8, 4, 6] -> [2, 8, 6] false

}


console.log('------join----------');
console.log(abc);
console.log([...abc].join());
console.log([...marks].join());
console.log([...abc].join(', '));
console.log([...marks].join(', '));
console.log([...abc].join(''));
console.log([...marks].join(''));

console.log('-----keys-----------');
console.log([...marks]);
console.log([...marks].keys());

console.log('-----lastIndexOf-----------'); // is galo iesko
console.log([...marks]);
console.log([...marks].lastIndexOf(10));
console.log([...marks].lastIndexOf(7));
console.log([...marks, 10].lastIndexOf(10));
console.log([...marks, 10].lastIndexOf(10, 3));

console.log('-----pop-----------'); // grazina ir pasalina paskutini masyvo nari
const marks2 = [...marks];
console.log(marks2.pop());
console.log(marks2);
console.log(marks2.pop());
console.log(marks2);

console.log('-----push-----------');
const marks3 = [...marks];
console.log(marks3);
console.log(marks3.push(7));
console.log(marks3);
console.log(marks3.push(8));
console.log(marks3);

console.log('-----unshift-----------');
const marks4 = [...marks];
console.log(marks4.unshift(0));
console.log(marks4);
console.log(marks4.unshift(1));
console.log(marks4);

console.log('-----shift-----------');
const marks5 = [...marks];
console.log(marks5.shift());
console.log(marks5);
console.log(marks5.shift());
console.log(marks5);

console.log('------reverse----------');
console.log([...marks]);
console.log([...marks].reverse());

const demo = ['Labas', 'rytas', 'Lietuva'];
console.log(demo);

// demo.reverse();  // keicia originalu masyva


const reversed = demo.toReversed(); // nekeicia originalo
console.log(reversed);
console.log(demo);

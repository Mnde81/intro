
// [1, 2 ,3] -> [2, 4, 6]

const a1 = [1, 2, 3];
const a2 = [10, 2, 8, 4, 6];

function map(list, transformFunc) {
    const result = [];
    for (const item of list) {
        result.push(transformFunc(item));
    }
    return result;
}

console.log(map(a1, n => n * 2));
console.log(map(a2, n => n * 3));



console.log(a1.map(n => n * 2));

console.log(a2.map(n => n * 3));

console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0]));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length - 1)));

const firstSymbol = s => s[0];
const lastSymbol = s => s[s.length - 1];

console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));


console.log('-----------------------------------------------');

const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.7];

const positiveNumbers = randomNumbers.filter(n => n >= 0);
console.log(positiveNumbers);


const negativeNumbers = randomNumbers.filter(n => n < 0);
console.log(negativeNumbers);


const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
console.log(integerNumbers);


const decimalNumbers = randomNumbers.filter(n => n % 1 !== 0);
console.log(decimalNumbers);


console.log('-----------------------------------------------');


const randomData = [0, 10, NaN, Infinity, - 3, true, 5, 777, -13, {}, undefined, -2.7];


const tss = randomData
    .filter(n => Number.isInteger(n))       
    .filter(n => n >= 0);


console.log(tss);

const tss2 = randomData                         
    .filter(n => typeof n === 'number')         
    .filter(n => isFinite(n))                   
    .filter(n => n >= 0)                        
    .filter(n => n % 1 === 0);                  


console.log(tss2);

const tss3 = randomData                             
    .filter(n => Number.isInteger(n) && n >= 0);    


console.log(tss3);



// sort


const dictionary = ['labas', 'rytas', 'asla', 'medis', 'zuvis'];
console.log(dictionary);


dictionary.sort();
console.log(dictionary);


const jonasMarks = [10, 2, 8, 11, 143, 123, 6];
console.log(jonasMarks);


jonasMarks.sort((a, b) => a - b);
console.log(jonasMarks);

jonasMarks.sort((a, b) => b - a);
console.log(jonasMarks);


console.log('-----------------------------------------------');

const students = [
    { name: 'Maryte', marks: 10 },
    { name: 'Jonas', marks: 7 },
    { name: 'Petras', marks: 4 },
    { name: 'Ona', marks: 2 },
];

students.sort((a, b) => a.marks - b.marks);
console.log(students);

console.log('Maziausias vidurkis:', students[0].marks);
console.log('Autorius:', students[0].name);

console.log('Didziausias vidurkis:', students.at(-1).marks);
console.log('Autorius:', students.at(-1).name);

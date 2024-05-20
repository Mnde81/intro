

/*
UNARY - vienybe
a++, a--

BINARY - dvejybe
a+b

TERNARY - trejybe
a?b:c

*/


let a = 0;

if (4 > 2) {
    a += 10;
} else {
    a -= 5;
}
console.log(a);


const b = 4 > 2 ? 888 : 666; 

console.log(b);



const c = 4 < 2 ? 123 : 456;
console.log(c);


const d = 1 + 2 > 3 ? 4 : 5;  // atsakymas 5
// const d = 3 > 3 ? 4 : 5;
// const d = false ? 4 : 5;
console.log(d);

const d1 = 1 + (2 > 3 ? 4 : 5);  // atsakymas 6
console.log(d1);

const e = 1 > 2 ? 3 : (4 + 5); // atsakymas 9
console.log(e);


const f = 'Labas'.length > 0 ? 'ilgas' : 'tuscias';
console.log(f);


const g = 'Pomidoras'[2 + (1 < 2 ? 0 : 5)];
console.log(g);





// Jeigu skaicius yra teigiamas, tai ji sumuojame su savimi
// jeigu skaicius yra neigiamas, tai is jo atimame 10


const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

// const n = 7;
// const ats = sum(n, n);
// console.log(ats);

// const n = -5;
// const ats = diff(n, 10);
// console.log(ats);


const n = -5;
const ats2 = n > 0 ? sum(n, n) : diff(n, 10);


let ats = null;

if (n > 0) {
    ats = sum(n, n);
} else {
    ats = diff(n, 10);
}
console.log(ats);

console.log(ats2);



// jeigu tekstas yra trumpas iki 5 simboliu
// tai grazink pirma simboli
// preisingu atveju grazink paskutini


const first = s => s[0];
// const last = s => s[s.length-1]
const last = s => s.at(-1);

const text1 = 'Labas'

const strAts = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts);

const funcToCall = text1.length < 5 ? first : last;
const strAts2 = funcToCall(text1);
console.log(funcToCall);
console.log(strAts2);

//-----------

const jonasMarks = [];
const maryteMarks = [10, 2, 8, 4, 6];

function emptyMarksArray () {
    return 'Studentas neturi pazymiu';
}

function marksAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    const count = marks.length;
    const average = sum / count;
    return average;
}

const jonasFunc = jonasMarks.length === 0 
                ? emptyMarksArray
                : marksAverage; 
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);


const maryteFunc = maryteMarks.length === 0 
                ? emptyMarksArray
                : marksAverage; 
const maryteAverage = maryteFunc(maryteMarks);
console.log(maryteAverage);


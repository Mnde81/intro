

const words = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];


// for
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(i, word);
}


//for-of

for (const word of words) {
    console.log(word);
}


const students = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },

];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(i, student);
}

let indexOfI = 0;
for (const student of students) {
    console.log('--', indexOfI++, student);
    
}


// while

const words2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
let whileI = 0;
while (whileI < words2.length) {
    console.log('while:', whileI, words2[whileI]);
    whileI++;

}

let i = 0;
for (; i < words2.length;) {
    console.log('for:', i, words2[i]);
    i++;
}

let whileI2 = 0;
while (true) {                
    console.log(whileI2++);      // begalinis ciklas
    if (whileI2 > 10) {
        break;                   // ciklo sustabdymas
    }
}

console.log('--------------');
const marks = [10, 2, 8, 4, 6];
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);

    if (marks[i] === 8) {
        break;
    }
}

console.log('--------------');

const hMarks = [10, 'Desimt', 8, 2, 6, 4, 100, -7, 3.14];
let sum = 0;
let count = 0;

for (const mark of hMarks) {
    if (typeof mark !== 'number'
        || mark > 10
        || mark < 1
        || mark % 1 !== 0)
         {
        continue;
    }
    sum += mark;
    count++;
}
console.log(sum / count);

// do - while
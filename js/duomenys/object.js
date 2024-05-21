// OBJECT - objektas

const empty = {};
console.log(empty);


const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(stud1);
console.log(stud1.age);
console.log(stud1.name);

const stud2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};
console.log(stud2);
console.log(stud2.isMarried);



const students = [
    {name: 'Jonas', age: 99, isMarried: true },
    {name: 'Maryte', age: 88, isMarried: false},
    {name: 'Petras', age: 77, isMarried: false},
    {name: 'Ona', age: 66, isMarried: true},

]
console.log(students);
console.log(students.length);
console.log(students[3]);

console.log(students[students.length - 1]);
console.log(students.at(-1));

console.log(students.at(-1).name);

console.log(students[0].name);



console.log('------------');


function introduction(studentData) {
    // console.log(studentData);
    const status = studentData.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir ${status} vedes.`;
}


// console.log(introduction(students[0]));

for (let i = 0; i < students.length; i++){
    console.log(introduction(students[i]));
}


//               0  1  2  3  4
const matrix = [10, 2, 8, 4, 6];

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}

// n-matis masyvas
// nth
const students = [
    [10, 9, 8, 7],
    [9, 8, 7, 6, 5],
    [7, 8, 9, 7, 8, 9, 7, 8, 9],
    [8, 8, 8, 8, 8, 8, 8],
];

const jonoPazymiai = students[0];
console.log(jonoPazymiai);
for (let i = 0; i < jonoPazymiai.length; i++) {
    console.log('jonas', jonoPazymiai[i]);
}

console.log(students[0]);
for (let i = 0; i < students[0].length; i++) {
    console.log('jonas', students[0][i]);
}

const marytesPazymiai = students[1];
console.log(marytesPazymiai);
for (let i = 0; i < marytesPazymiai.length; i++) {
    console.log('maryte', marytesPazymiai[i]);
}

console.clear();

console.log(students);
console.log('------------------');
console.log(students[2]);
console.log('------------------');
console.log(students[2][2]);

console.clear();

const gorila = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [
        [8, 9, 10],
        [11, 12, 13, [14, 15]],
    ],
];

console.log(gorila[2]);
console.log('---------');
console.log(gorila[2][0]);
console.log(gorila[2][0][0]);
console.log(gorila[2][0][1]);
console.log(gorila[2][0][2]);
console.log('---------');
console.log(gorila[2][1]);
console.log(gorila[2][1][0]);
console.log(gorila[2][1][1]);
console.log(gorila[2][1][2]);
console.log(gorila[2][1][3]);
console.log(gorila[2][1][3][0]);
console.log(gorila[2][1][3][1]);
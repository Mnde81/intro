

let letter = "a";

console.log(letter);

letter = "b" 

console.log(letter);




const number1 = 5;
const number2 = 11;

const sum = number1+number2;

console.log(sum);



const string1 = "a";
const string2 = "b";

const sum2 = string1+string2;

console.log(sum2);




const string3 = "11";
const string4= "5";

const sum3= string3+string4;

console.log(sum3);



const sum4= number1+string2;

console.log(sum4);



const sum5= number1+string4;

console.log(typeof(sum5));




function skaiciuokle(a,b) {
    return a+b
}

console.log(skaiciuokle(5,11));





// const skaicius = 54354356;

// let skaicius2 = true;

// console.log(skaicius+skaicius2);

// Gavome +1  t.y.  54354357  Kodel as gavau skaiciu jei sudejau su true?




let x = "John" + "Doe";

console.log(x);



let y = "5" + 2 + 3;
console.log(typeof(y));



let $ = "Hello World";
console.log($);


let _lastName = "Johnson";
console.log(_lastName);


let test = 6 < 3;
console.log(test);


const bird = { species: "Kestrel" };
console.log(bird.species);

bird.species = "Striated Caracara";
console.log(bird.species);


let myNumber = "74";
myNumber = Number(myNumber) + 3;
console.log(myNumber);


const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);



const one = "Hello, ";
const two = "how are you";
const joined = `${one}${two}`;
console.log(joined);


const greeting2 = "Hello";
const name2 = "Chris";
console.log(`${greeting2}, ${name2}`);



const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);



const newline =`One day you finally knew
what you had to do, and began.`;
console.log(newline);

const newline2 = "One day you finally knew\nwhat you had to do, and began.";
console.log(newline2);


const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);


const myString1 = "123";
const myNum1 = Number(myString1);
console.log(typeof(myNum1));


const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof(myString2));



const bracket = "chrome";
console.log(bracket[3]);



const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));



const browserType = "chrome";
console.log(browserType.slice(1, 4));



const radData = "My NaMe Is John";
console.log(radData.toLowerCase());



const radData2 = "My NaMe Is John";
console.log(radData2.toUpperCase());


const browser= "mozilla";
const updated = browser.replace("moz", "van");
console.log(updated);
console.log(browser);


console.clear();

let pinigine = 0;
console.log(pinigine);

pinigine = 10;
console.log(pinigine);

pinigine = 50;
console.log(pinigine);


console.clear();

function vardas(name) {
    return console.log(`Labas ${name}`)
}
vardas("Mantai");


function howMany(text) {
    return console.log(text.length)
}
howMany("Labas");



/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

const massMark1 = 78;
const massJohn1 = 92;
const heightMark1 = 1.69;
const heightJohn1 = 1.95;

let bmiMark1 = massMark1 / heightMark1 ** 2;
bmiMark1 = bmiMark1.toFixed(2);
let bmiJohn1 = massJohn1 / heightJohn1 ** 2;
bmiJohn1 = bmiJohn1.toFixed(2);
const markHigherBMI1 = bmiMark1 > bmiJohn1;
console.log(markHigherBMI1);


const massMark2 = 95;
const massJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;

let bmiMark2 = massMark2 / heightMark2 ** 2;
bmiMark2 = bmiMark2.toFixed(2);
let bmiJohn2 = massJohn2 / heightJohn2 ** 2;
bmiJohn2 = bmiJohn2.toFixed(2);
const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);

if (bmiMark1 > bmiJohn1) {
    result1 = 'Mark\'s BMI ' + bmiMark1 + ' is higher than John\'s ' + bmiJohn1 + ' !'
} else {
    result1 = 'John\'s BMI ' + bmiJohn1 + ' is higher than Mark\'s ' + bmiMark1 + ' !'
}

console.log(result1);


if (bmiMark2 > bmiJohn2) {
    result2 = 'Mark\'s BMI ' + bmiMark2 + ' is higher than John\'s ' + bmiJohn2 + ' !'
} else {
    result2 = 'John\'s BMI ' + bmiJohn2 + ' is higher than Mark\'s ' + bmiMark2 + ' !'
}

console.log(result2);



/*

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉

*/


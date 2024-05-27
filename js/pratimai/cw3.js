console.log('testas');


console.log('--------------');


function generateRange(min, max, step){
    const arr = [];
    for (let i = min; i <= max; i= i + step) {
        
        arr.push(i);
    }
   return arr;
}
console.log(generateRange(1, 10, 1));

console.clear();


function defineSuit(card) {
    if (card.includes('♣')) {
        return 'clubs';
    }
    if (card.includes('♦')) {
        return 'diamonds';
    }
    if (card.includes('♥')) {
        return 'hearts';
    }
    if (card.includes('♠')) {
        return 'spades';
    }

  }
  console.log(defineSuit('3♣'));


//   optimalus
//   function defineSuit(card) {
//     const s = {
//       "♣": "clubs",
//       "♠": "spades",
//       "♦": "diamonds",
//       "♥": "hearts"
//     }
//     return s[card.charAt(card.length - 1)]
//   }

console.clear();



function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const average = sum / array.length;
    if (array.length === 0){
        return 0;
    } else {
        return average;
    }
    
  }
  console.log(findAverage([1, 2, 3]));
      

// optimalus
// var find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
//   }

console.clear();


function fakeBin(x){
    let answer = '';
 for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
    answer = answer + '0';
    } else if (x >= 5) {
        answer = answer + '1';
    }
 }
 return answer;
}

console.log(fakeBin('12345678'));


// optimalus
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

console.clear();


function isUpperCase (x) {
let answer = x.toUpperCase();
const ans = x === answer ? true : false;

return ans;

}
console.log(isUpperCase("hello I AM DONALD"));

console.clear();


function ensureQuestion(s) {
   const answer = s.at(-1) === '?' ? s : s + '?';
   return answer;
  }
  console.log(ensureQuestion('No?'));

//   optimalus
//   const ensureQuestion = s => s.endsWith('?') ? s : s+'?'

console.clear();


function greet(name){
    return `Hello, ${name} how are you doing today?`
  }
  console.log(greet('John'));


  console.clear();


  function usdcny(usd) {
    let convers = usd * 6.75;
    str = convers.toLocaleString("us", { minimumFractionDigits: 2 });
    str = str.replace(',', '');
    return `${str} Chinese Yuan`;
  
  }
  console.log(usdcny(15));

//   optimalus
//   usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;

console.clear();


function hello(name) {
    if (name === undefined) {
        return "Hello, World!";
    } else if (name === '') {
        return "Hello, World!";
    }

    let name1 = name.toLowerCase();
    name1 = name1.charAt(0).toUpperCase() + name1.slice(1);

    return `Hello, ${name1}!`
    
    
  }
  console.log(hello());

// optimalus
// const hello = s =>
//     `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

console.clear();







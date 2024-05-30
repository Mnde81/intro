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


function mergeArrays(arr1, arr2) {
  let merge = [];
  merge = arr1.concat(arr2).sort();
  merge = [...new Set(merge)];
  merge = merge.sort((a, b) => a - b);
    
  return merge;
}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// optimalus
// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
//   }


console.clear();



function mouthSize(animal) {
    const an = animal.toLowerCase();
    
    const ans = an === 'alligator' ? 'small' : 'wide';

    return ans;

  }
  console.log(mouthSize('AlliGator'));


//   optimalus
//   function mouthSize(animal) {
//     return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
//   }

console.clear();


function stringClean(s){
    const noDigits = s.replace(/[0-9]/g, '');
    return noDigits;

  }
  console.log(stringClean('This looks5 grea8t!'));

//   optimalus
//   function stringClean(s){
//     return s.replace(/\d/g, "");
//   }

console.clear();


//return price without vat
function excludingVatPrice(price){
    if (price === null) {
        return -1;
    } else {
       return parseFloat((price / 1.15).toFixed(2)); 
    }
    
  }
  console.log(excludingVatPrice(230));


//   optimalus
//   excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);


console.clear();


function sumOfDifferences(arr) {
  let answer = arr.sort((a, b) => b - a);
  let sum = 0;
  let j = 0;
  for (let i = 0; i < answer.length - 1; i++) {
    j = i + 1;
    sum += (answer[i] - answer[j]);
    
  }
   return sum;
}
console.log(sumOfDifferences([2, 1, 10]));


// optimalus
// function sumOfDifferences(arr) {
//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

console.clear();


var findAverage = function (nums) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    count++;
  }
  return sum / count;
}
console.log(findAverage([1, 3, 5, 7]));


// optimalus
// const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;


console.clear();

function datingRange(age){
  let min = Math.floor(age / 2 + 7);
  let max = Math.floor((age - 7) * 2);
  if (age > 14 && age <= 100) {
    return `${min}-${max}`;
  }
  let min2 = Math.floor(age - 0.1 * age);
  let max2 = Math.floor(age + 0.1 * age);

  if (age <= 14) {
    return `${min2}-${max2}`;
  }
  
}
console.log(datingRange(27));


// optimalus
// function datingRange(age){
//   return `${min(age)}-${max(age)}`;
  
//   function min(age) {
//     return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
//   }
  
//   function max(age) {
//     return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
//   }
// }


console.clear();


function lowercaseCount(str){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      count++
    }
  }
  return count;
}
console.log(lowercaseCount("abcABC123"));

// optimalus
// function lowercaseCount(str){
//   return (str.match(/[a-z]/g) || []).length
// }


console.clear();


function arr2bin(arr){
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    // if (arr === '[]') {
    //   return '0';
    // }
    if (arr[i] === 'number') {
      answer = answer + '1';
    }
  }
  return answer;
}
console.log(arr2bin([1, 2]));


console.clear();


function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(12, 2, 6));

// optimalus
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0
// }

console.clear();


function billboard(name, price = 30){
  let answer = 0;
  for (let i = 0; i < name.length; i++) {
    answer += price;
  }
  return answer;
} 
console.log(billboard('Jeong-Ho Aristotelis'));


console.clear();


function distinct(a) {
  let sorted = a.sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) {
      continue;
    } else {
      answer.push(sorted[i]);
    }
  }

  return answer;
}
console.log(distinct([1, 2, 1, 1, 3, 2]));


console.clear();


function isPalindrome(x) {
  let xLo = x.toLowerCase();
  let reversed = '';
  for (let i = 0; i < xLo.length; i++)
    reversed += xLo[xLo.length - 1 - i];
  const answer = reversed === xLo ? true : false;
  return answer;
}
console.log(isPalindrome('madan'));

// optimalus
// const isPalindrome = (x) => {
//   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }

console.clear();


function array(string) {
  let arr = string.split(',');
  if (arr.length < 3) {
    return null;
  }

  const arrPop = arr.pop();
  const arrShift = arr.shift();
  

  return arr.join(' ');


}
console.log(array("1,2"));

// optimalus
// function array(arr){
//   return arr.split(",").slice(1,-1).join(" ") || null;
// }

console.clear();


function stringToArray(string){

	return string.split(' ');

}
console.log(stringToArray("I love arrays they are my favorite"));

console.clear();

function plural(n) {
  let arr = n.split(' ');
  console.log(arr);
  let answer = parseFloat(arr[0]);
  
  return answer > 1;
}
console.log(plural('5 minutes'));

console.clear();


function shortcut(string) {
  let answer = string.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '');
  return answer;
}
console.log(shortcut("goodbye"));

// optimalus
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }

console.clear();


function boolToWord(bool){
  let answer = bool === true ? 'Yes' : 'No';
  return answer;
}
console.log(boolToWord(true));

// optimalus
// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }

console.clear();

function find(array, element) {
  if (array.includes(element)) {
    return array.indexOf(element)
  } else {
    return "Not found";
  }
  
}

function find(array, element) {
  return array.includes(element) ? array.indexOf(element) : "Not found";
  
}

console.clear();

function nameShuffler(str){
  let arr = str.split(' ');
  
  return `${arr.at(-1)} ${arr[0]}`;
}
console.log(nameShuffler("john McClane"));

// optimalus
// function nameSuffle(str){
//   return str.split(' ').reverse().join(' ')
// }


console.clear();

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let answer = dadYearsOld - sonYearsOld * 2;
  if (answer < 0) {
    return answer * -1;
  } else {
    return answer;
  }
}

// optimalus
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

console.clear();

function expressionMatter(a, b, c) {
  const first = a * (b + c);
  const second = a * b * c;
  const third = a + b * c;
  const fourth = (a + b) * c;
  let string = `${first},${second},${third},${fourth}`;
  let arr = string.split(',');
  let high = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    }
  }

  console.log(high);

}
console.log(expressionMatter(1, 2, 3));

console.clear();


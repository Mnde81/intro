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


function noSpace(x){
return x.split('').filter(e => e.trim().length).join('');
}

// optimalus
// function noSpace(x){
//   return x.replace(/\s/g, '');
// }

console.clear();

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  const filtered = birds.filter(n => n !== geese[0])
  .filter(n => n !== geese[1])
  .filter(n => n !== geese[2])
  .filter(n => n !== geese[3])
  .filter(n => n !== geese[4]);
 
  return filtered;
 
};
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

// optimalus
// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter(b => !geese.includes(b));
// };

console.clear();


function howManyLightsabersDoYouOwn(name) {
  const own = name === 'Zach' ? 18 : 0;
  return own;
}

// optimalus
// function howManyLightsabersDoYouOwn(name) {
//   return name === 'Zach' ? 18 : 0;
// }

console.clear();

function min(list) {
  return Math.min(...list);
}
function max(list) {
  return Math.max(...list);
}


console.log(min([4,6,2,1,9,63,-134,566]));


// optimalus
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

console.clear();


function apple(x){
  let answer = parseFloat(x);
  let ans = answer * answer;
  return ans > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

// optimalus
// function apple(x){
//   return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
// }


console.clear();

function first(arr, n) {
  if (n === 0) {
    return [];
  } else {
    return arr = arr.slice(0, n);
  }
}
console.log(first(['a', 'b', 'c', 'd', 'e'], 1));

console.clear();


function squareArea(A){
  const r = 2 * A / Math.PI
  let area = r * r;
  area = parsFloat(area.toFixed(2));

  return area;
}

// optimalus
// function squareArea(A){
//   var circum = 4 * A;
//   var radius = circum / (2 * Math.PI);
//   var area = Math.pow(radius, 2);
//   return Math.round(area*100)/100
// }

console.clear();

function check(a, x) {

let ans = a.includes(x) ? true : false;

};

console.clear();

function getGrade (s1, s2, s3) {
  let aver = (s1 + s2 + s3) / 3;
  if (aver >= 90 && aver <= 100) {
    return 'A';
  }
  if (aver >= 80 && aver < 90) {
    return 'B';
  }
  if (aver >= 70 && aver < 80) {
    return 'C';
  }
  if (aver >= 60 && aver < 70) {
    return 'D';
  }
  if (aver >= 0 && aver < 60) {
    return 'F';
  }


}


console.clear();

function greet (name, owner) {
  return answer = name === owner ? 'Hello boss' : 	'Hello guest';
}


console.clear();


function odds(values){
  // arrow it
  return values.filter(n => n % 2 !==0 );
}

console.clear();

function pointsPer48(ppg, mpg) {
  let answer = ppg / mpg * 48;
  if (ppg === 0 || mpg === 0) {
    return 0;
  } else {
    return parseFloat(answer.toFixed(1));
  }
 
 
}

// optimalus
// function pointsPer48(ppg, mpg) {
//   return +(ppg/mpg*48).toFixed(1)||0
// }

console.clear();

function sakuraFall(v) {
  let distance = 80 * 5;
  if (v <= 0) {
    return 0;
  } else {
    return distance / v;
  }
  
  
}

console.clear();
function power(x, y) {
  let answer = x ** y;
  if (x === 0 && y === 0) {
    return 1;
  } else {
    return answer;
  }
};


console.clear();

function calculator(a, b, sign) {
  if (sign !== '+' || sign !== '-' || sign !== '*' || sign !== '/') {
    return "unknown value";
  } else if (a !== 'number' || b !== 'number') {
    return "unknown value";
  }
  if (sign === '+') {
    return a + b;
  }
  if (sign === '-') {
    return a - b;
  }
  if (sign === '*') {
    return a * b;
  }
  if (sign === '/') {
    return a / b;
  }



}
console.clear();

function grader(score) {
  if (score > 1 || score < 0.6) {
    return 'F';
  }
  if (score >= 0.9) {
    return 'A';
  }
  if (score >= 0.8) {
    return 'B';
  }
  if (score >= 0.7) {
    return 'C';
  }
  if (score >= 0.6) {
    return 'D';
  }
}

console.clear();

function reverse(string){
  let answer = string.trim();
  answer = answer.split(' ');
  answer = answer.reverse();
  answer = answer.join(' ');

  return answer;
}

console.clear();


function validateCode(code) {
   let codeToString = code.toString();
   if (codeToString[0] === '1' || codeToString[0] === '2' || codeToString[0] === '3') {
    return true;
   } else {
    return false;
   }
  }

// optimalus
// function validateCode (code) {return /^[123]/.test(code)}

console.clear();


function getAge(inputString){
  return parseInt(inputString);
  }

  console.log(getAge("5 years old"));


  console.clear();


  function hoopCount(n) {
   return ans = n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
 }
 console.log(hoopCount(11));


 console.clear();


 var laLigaGoals = 43;
 var championsLeagueGoals = 10;
 var copaDelReyGoals = 5;
 
 var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


 console.clear();


 function multiTable(number) {
  return `${1} * ${number} = ${1 * number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`
    
    
}
console.log(multiTable(5));


// optimalus
// const multiTable = (number) => {
//   let table = '';
  
//   for(let i = 1; i <= 10; i++) {
//     table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
//   }

//   return table;
// }

console.clear();

function uefaEuro2016(teams, scores){
  let answer = '';
  if (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}
console.log(uefaEuro2016(['Belgium', 'Italy'], [1, 1]));

console.clear();


function elevator(left, right, call){
  if (call === 0) {
    return ans1 = left < right ? 'left' : 'right';
  }
  if (call === 0) {
    return ans1 = left === right ? 'right' : 'right';
  }
  if (call === 1) {
    return ans2 = left < right ? 'right' : 'left';
  }
  if (call === 1) {
    return ans2 = left === right ? 'right' : 'right';
  }
  if (call === 2) {
    return ans3 = left < right ? 'right' : 'left';
  }
  if (call === 2) {
    return ans3 = left === right ? 'right' : 'right';
  }

}
console.log(elevator(0, 1, 1));

console.clear();

function nextItem(xs, item) {
  let answer = 0;
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] === item) {
      return xs[i+1];
    }
  }
}
console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3));


console.clear();



function sumSquares(array) {  
  let result = array.map(n => n ** 2);
  let answer = 0;
  for (let i = 0; i < result.length; i++) {
    answer += result[i];
  }
  return answer;
}
console.log(sumSquares([1,2,3,4,5]));

console.clear();


function warnTheSheep(queue) {
  
  if (queue.indexOf('wolf') === queue.length+1 ) {
    return "Pls go away and stop eating my sheep";
    console.log(queue.indexOf('wolf'));
  }
}
console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf']));


console.clear();

function divCon(x){
  let sumInt = 0;
  let sumStr = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'number') {
      sumInt += x[i];
    }
    // if (x[i] === 'string') {
    //   sumStr += parseFloat(x[i]);
      
    // }
  }
  return sumInt;
}
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));


console.clear();


function withoutLast(arr) {
  // Fix it
  arr.pop(); // removes the last element
  return arr;
}
console.log(withoutLast([ 17, 86, 55, 83, 65, 3, 34, 17, 65, 21, 61 ]));

console.clear();

function takeUmbrella(weather, chance) {
  if (weather === 'rainy') {
    return true;
  }
  if (weather === 'cloudy' && chance > 0.2) {
    return true;
  }
  if (weather === 'sunny' && chance <= 0.2) {
    return false;
  }
  if (weather === 'sunny' && chance > 0.2) {
    return true;
  }

}
console.log(takeUmbrella('sunny', 0.4));


console.clear();


function differenceOfSquares(n) {
  let newArr = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  for (let i = 0; i < newArr.length; i ++) {
    sum += newArr[i];
  }
  console.log(sum)
  
  newArr = newArr.map(n => n ** 2);
  let sumOfSquares = 0;
  for (let i = 0; i < newArr.length; i++ ) {
    sumOfSquares += newArr[i];
  }

  console.log(sumOfSquares);
  
  return sum ** 2 - sumOfSquares;
}
console.log(differenceOfSquares(10));


// optimalus
// function differenceOfSquares(x){
//   var sum = 0, squareSum = 0, i;
//   for (i =1 ; i <= x; i++) {
//     sum += i*i;
//     squareSum += i;
//   }
//   return squareSum*squareSum - sum;
// }

console.clear();


function cookingTime(neededPower, minutes, seconds, power) {
  let sec = minutes * 60 + seconds;
  let powerRatio = power / neededPower;
  let ans = sec / powerRatio;
  ans = Math.ceil(ans);
  let min = Math.floor(ans / 60);
  let ans2 = ans - min * 60
  console.log(ans2);
  return `${min} minutes ${ans2} seconds`;
}
console.log(cookingTime(800, 3, 0, 1200));


console.clear();

function isItLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

// optimalus
// function isItLetter(character) {
//   return /[a-z]/i.test(character);
// }

console.clear();


function toNumberArray(stringarray){
  let newArr = [];
  for (let i = 0; i < stringarray.length; i++) {
    newArr.push(parseFloat(stringarray[i]))
  }
  return newArr;
}
console.log(toNumberArray(["1", "2", "3"]));

// optimalus
// function toNumberArray(stringarray)
// {
//   return stringarray.map(parseFloat);
// }

console.clear();

function differenceInAges(ages){
  let youngest = ages[0];
  let oldest = 0;
  for (let i = 0; i < ages.length; i++) {
    if (youngest > ages[i]) {
      youngest = ages[i];
    }
    if (oldest < ages[i]) {
      oldest = ages[i];
    }
    
  }

  return [youngest, oldest, oldest - youngest];
}
console.log(differenceInAges([22, 2, 32, 55, 70]));

// optimalus
// function differenceInAges (ages) {

//   let max = Math.max(...ages),
//       min = Math.min(...ages)
//       diff = max - min
      
//   return [min, max, diff]
// }


console.clear();


function sorter(textbooks) {
  textbooks.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
  return textbooks;

}

console.log(sorter(['Algebra', 'history', 'Geometry', 'english']));

console.clear();


function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let rna = dna.replaceAll('T', 'U');
  return rna;
}
console.log(DNAtoRNA("TTTT"));

// optimalus
// function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }

console.clear();


// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//       let step = ' ';

//    for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         step += '#'
//      } else {
//         step += ' ';
//      }
//    }
//    console.log(step)
//   }
// }


// function drawStairs(n) {
//   for (let i = 0; i < n; i++) {
//     let step = ' ';

//  for (let j = 0; j < n; j++) {
//     if (j <= i) {
//       step += 'I'
//    } else {
//       step += ' ';
//    }
//  }
//  console.log(step)
// }
// }
  
// console.log(drawStairs(7));


// function drawStairs(n) {
//   var output = '';
//   for(var i =0; i <= n; i++) {
//       for(var j = n-1; j >= i; j--) {
//              output += " ";
//       }
//       for(var k = 1; k <= i; k++) {
//           output += "I";
//       }
//       output += "\n";
//   }
//   console.log(output);
// }  
// console.log(drawStairs(7));

// function staircase(n) {
//   for(let i = 1; i <= n; i++) {
//       console.log(' '.repeat(n + i) + '#')
//   }
// }
// console.log(staircase(7));


console.clear();

const rps = (p1, p2) => {
  if (p1 === 'scissors' && p2 === 'paper') {
    return "Player 1 won!";
  }
  if (p1 === 'scissors' && p2 === 'rock') {
    return "Player 2 won!";
  }
  if (p1 === 'paper' && p2 === 'scissors') {
    return "Player 2 won!";
  }
  if (p1 === 'paper' && p2 === 'rock') {
    return "Player 1 won!";
  }
  if (p1 === 'rock' && p2 === 'scissors') {
    return "Player 1 won!";
  }
  if (p1 === 'rock' && p2 === 'paper') {
    return "Player 2 won!";
  }
  if (p1 === 'rock' && p2 === 'rock') {
    return "Draw!";
  }
  if (p1 === 'paper' && p2 === 'paper') {
    return "Draw!";
  }
  if (p1 === 'scissors' && p2 === 'scissors') {
    return "Draw!";
  }


};

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };

console.clear();




function points(games) {
  let points1 = 0;
  let points2 = 0;
  for (let i = 0; i < games.length; i++){
    if (parseInt(games[i][0]) > parseInt(games[i][2])) {
        points1 += 3;
    }
    if (parseInt(games[i][0]) === parseInt(games[i][2])) {
      points2 += 1;
    }
    
  }
  
  return points1 + points2;
}
console.log(points(["3:1", "2:2", "0:1"]));

console.clear();

let items = [];
let obj = {};
const keys = {
  a: "b",
  c: "d" 
}
obj['a'] = keys.a;
obj['c'] = keys.c;
items.push(obj)

console.clear();

function saleHotdogs(n){
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  if (n < 5) {
    sum1 = n * 100;
    return sum1;
  }
  if (n >= 5 && n < 10) {
    sum2 = n * 95;
    return sum2;
  }
  if (n >= 10) {
    sum3 = n * 90;
    return sum3;
  }

}
console.log(saleHotdogs(10));


// optimalus
// function saleHotdogs(n){
//   return n*(n<5?100:n<10?95:90);
// }

console.clear();

function pickIt(arr){
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  
  
  return [odd, even];
}

console.clear();


function padIt(str, n) {
  let string = str;
  let i = 1;
    while(i <= n) {
        if(i % 2 === 0) {
            string = string + "*";
        }
        else{
            string = "*" + string;
        }
        i++;
    }
  return string;
}
console.log(padIt('a', 3));

console.clear();

function mystery(results2) {
  let results = results2
    
  return {sanity: 'Hello'};
    
}
console.log(mystery());

console.clear();


function howManydays(month){
  var days = month;
  switch (days){
      case 1: days = 31;
      break;
      case 2: days = 28;
      break;
      case 3: days = 31;
      break;
      case 4: days = 30;
      break;
      case 5: days = 31;
      break;
      case 6: days = 30;
      break;
      case 7: days = 31;
      break;
      case 8: days = 31;
      break;
      case 9: days = 30;
      break;
      case 10: days = 31;
      break;
      case 11: days = 30;
      break;
      case 12: days = 31;
      break;
      
  
  }
  return days;
}
console.log(howManydays(10));


console.clear();

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
console.log(Dad());

function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}
console.log(banana());

console.clear();


function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  
  return arr;
}
function popElement(arr){
  //pop an element from arr
  var el=1;
  arr.pop(el);
  return arr;
}


console.clear();


function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll" ) {
      bag.push(dolls[i]);
      if (bag.length === 3) break;
    } else {
      continue;
    }
  }
  
  return bag;
}


console.clear();


function whatNumberIsIt(n){
  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else
  if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else
  if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else
  if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else
  if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else
    return `Input number is ${n}`
  } 

console.log(whatNumberIsIt(NaN));


// optimalus
// function whatNumberIsIt(n){
//   switch (true) {
//     case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
//     case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
//     case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
//     case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
//     case (isNaN(n)): return "Input number is Number.NaN";
//     default: return "Input number is " + n;
//   }
// }

console.clear();


function howManySmaller(arr, n){
  let fixedNums = arr.map(x => parseFloat(x.toFixed(2)));
  let count = 0;
  for (let i = 0; i < fixedNums.length; i++) {
    if (fixedNums[i] < n) {
      count++;
    }
  }
  return count;
}
console.log(howManySmaller([1.234,1.235,1.228], 1.24));

// optimalus
// function howManySmaller(arr,n){
//   return arr.filter(x => +x.toFixed(2) < n).length;
// }

console.clear();

function cutIt(arr){
  let shortest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  let cutArr = arr.map(n => n.slice(0, shortest.length))
 return cutArr;
}
console.log(cutIt(["ab","cde","fgh"]));

// optimalus
// function cutIt(arr){
//   const minLength = Math.min(...arr.map(x => x.length));
//   return arr.map(x => x.slice(0, minLength));
// }

console.clear();


function firstToLast(str, c){
   let firstIndex = str.indexOf(c); 
  let lastIndex = str.lastIndexOf(c);
  
  if (firstIndex === -1) {
    return -1;
  } else if (firstIndex === lastIndex) {
    return 0;
  } else {
  return lastIndex - firstIndex;
  }
  
}
console.log(firstToLast("ababcddd","d"));


// optimalus
// function firstToLast(str,c){
//   var first = str.indexOf(c), last = str.lastIndexOf(c);
//   return first == -1 ? -1 : last - first;
// }

console.clear();

function fiveLine(s){
  let a = s.trim();
  return `${a}\n${a}${a}\n${a}${a}${a}\n${a}${a}${a}${a}\n${a}${a}${a}${a}${a}`;
  
}
console.log(fiveLine(' b'));

// optimlaus
// function fiveLine(s){
//   //coding here...
//   s = s.trim();
//   var tmp = s;
//   var res = [s];
  
//   for (var i = 1; i < 5; i++) {
//    	res.push(s += tmp);
//   } 
//   return res.join("\n");
// }

console.clear();

function blackAndWhite(arr){
  const a = arr;
  if (!Array.isArray(a)) {
    return "It's a fake array";
  } else if (a.includes(5) && a.includes(13)) {
    return "It's a black array";
  } else {
    return "It's a white array";
  }

  
}
console.log(blackAndWhite([5, 12]));

// optimalus
// const blackAndWhite = arr =>
//   `It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;

console.clear();


function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
console.log(animal({name:"dog",legs:4,color:"white"}));


console.clear();


function feast(beast, dish) {
  if (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] ) {
  
    return true;
  } else {
    return false;
  }
  }
  console.log(feast("great blue heron", "garlic naan"));
  
console.log(feast("chickadee", "chocolate cak"));

// optimalus
// function feast(beast, dish) {
// 	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

console.clear();


function chromosomeCheck(sperm) {
  if (sperm === 'XX') {
    return 'Congratulations! You\'re going to have a daughter.'
  } 
  if (sperm === 'XY') {
    return 'Congratulations! You\'re going to have a son.'
  }
}

// optimalus
// function chromosomeCheck(sperm) {
//   return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
// }


console.clear();


function alienLanguage(str){
  let st = str.toUpperCase().split(' ');
  let st1 = '';
  let st2= '';
  let st3 = '';
  for (let i = 0; i < st.length; i++) {
    let st1 = st[i];
    st2 = st1.slice(0, -1)
    st2 = st2 + st1[st1.length-1].toLowerCase()
    st3 += st2 + ' ';    
    
  }
  
  return st3.trim();
}
console.log(alienLanguage("Hello World"));

// optimalus
// function alienLanguage(str){
//   return str.replace(/\w+/g, w => w.slice(0,-1).toUpperCase() + w.slice(-1).toLowerCase());
// }


console.clear();

function cookie(x){
  let name = '';
  if (typeof x === 'string') {
    name = 'Zach';
  } else if (typeof x === 'number') {
    name = 'Monica'
  } else {
    name = 'the dog';
  }

return `Who ate the last cookie? It was ${name}!`
}
console.log(cookie(1));

// optimalus
// function cookie(x) {
//   var t = typeof x
//   var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
//   return `Who ate the last cookie? It was ${who}!`
// }

console.clear();

function _if(bool, func1, func2) {
  return bool == true ? func1() : func2();
}

// optimalus
// function _if(bool, func1, func2) {
//   return bool ? func1() : func2();
// }

console.clear();


function isPythagoreanTriple(integers) {
  let n1 = integers[0];
  let n2 = integers[1];
  let n3 = integers[2];

  if (n1**2 + n2**2 === n3**2 || n3**2 + n2**2 === n1**2 || n3**2 + n1**2 === n2**2) {
    return true;
  } else {
    return false;
  }
}
console.log(isPythagoreanTriple([5, 3, 4]));


// optimalus
// function isPythagoreanTriple(integers) {
//   let massiv = integers.sort((a, b) => a - b)
//   return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
// }

console.clear();


function hotpo(n) {
   let count = 0;
     while (n !== 1) {
        if (n % 2 === 0) {                                      
            n = n / 2; 
            count++;
        } else if (n % 2 !== 0) {
            n = (n * 3) + 1;
            count++;
        }
    }
    return count;

}

console.log(hotpo(23));

// optimalus
// var hotpo = function(n, acc = 0) {
//   if (n <= 1) {
//     return acc;
//   } else {
//     return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
//   }
// }








function alternateCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}
console.log(alternateCase("1a2b3c4d5e"));


console.clear();


function noBoringZeros(n) {
  let numbers = n.toString();
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.endsWith('0')) {
      numbers = numbers.slice(0, numbers.length -1);
    }
  }
  numbers = parseInt(numbers);
  return numbers;
}
console.log(noBoringZeros(14500000000000));

console.clear();

function splitAndMerge(string, separator) {
  let answer = string.split(' ');
  
  let answer2 = [];
  for (let i = 0; i < answer.length; i++) {
      answer2 += answer[i].split('').join(separator) + ' '
  }
 

  return answer2.trim();
}
console.log(splitAndMerge("My name is John", "-"));

// optimalus
// function splitAndMerge(str, sp) {
//   return str.split(" ").map(word => word.split("").join(sp)).join(" ");
// }

console.clear();


function expressionMatter(a, b, c) {
  const first = a * (b + c);
  const second = a * b * c;
  const third = a + b * c;
  const fourth = (a + b) * c;
  const fifth = a * b + c;
  let string = `${first},${second},${third},${fourth},${fifth}`;
  let arr = string.split(',');
  console.log(arr);
  let high = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    }
  }

  return parseFloat(high);

}
console.log(expressionMatter(1, 2, 3));


console.clear();

function bigToSmall(arr){
  let arr2 = arr.flat().sort((a, b) => b - a).join('>')
  return arr2;
}
console.log(bigToSmall([[1,2],[3,4],[5,6]]));

console.clear();


function trueOrFalse(val){
  return Boolean(val).toString();
}

console.clear();



function roundIt(n){
  let nString = n.toString();
  const decimalIndex = nString.indexOf('.');
  const decimalPlaces = nString.length - decimalIndex -1
  const intPlaces = nString.length - decimalPlaces -1
 

  if (intPlaces < decimalPlaces) {
    return Math.ceil(n);
  }
  if (intPlaces > decimalPlaces) {
    return Math.floor(n);
  }
  if (intPlaces === decimalPlaces) {
    return Math.round(n);
  }
  
}
console.log(roundIt(3.45));


// optimalus
// function roundIt(n){
//   var [a, b] = n.toString().split('.');
//   return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
// }


console.clear();

function countPositivesSumNegatives(input) {
  let countPositives = 0;
  let sumNegatives = 0;
  for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
          countPositives++
      } else {
          sumNegatives += input[i];
      }
  }
  if (input === '[]' || input === null) {
      return [];
  } else {
      return [countPositives, sumNegatives];

  }
  
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

console.clear();

function calculateTip(amount, rating) {
  let tipRating = rating.toLowerCase();
  if (tipRating === 'terrible') {
    return 0;
  } else if (tipRating === 'poor') {
    return Math.ceil(amount * 0.05);
  } else if (tipRating === 'good') {
    return Math.ceil(amount * 0.1);
  } else if (tipRating === 'great') {
    return Math.ceil(amount * 0.15);
  } else if (tipRating === 'excellent') {
    return Math.ceil(amount * 0.2);
  } else {
    return 'Rating not recognised';
  }


}
console.log(calculateTip(100, 'Great'));

// optimalus
// const TIPS = {
//   "terrible": 0.0,
//   "poor": 0.05,
//   "good": 0.1,
//   "great": 0.15,
//   "excellent": 0.2
// };

// const calculateTip = (amount, rating) => {
//   rating = rating.toLowerCase();
  
//   return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
// };


console.clear();

function mergeArrays(a, b) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (!arr1.includes(a[i])) {
      arr1.push(a[i]);
    }  
}
for (let i = 0; i < b.length; i++) {
  if (!arr1.includes(b[i])) {
    arr1.push(b[i]);
  }  
}


   arr2 = arr1.sort((a, b) => a - b);
   return arr2;
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

// optimalus
// function mergeArrays(a, b) {
//   return [...new Set(a.concat(b))].sort((a,b)=>a-b);
// }

console.clear();

function changeMe(moneyIn){
  if (moneyIn === "£5") {
    return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p';
  } else if (moneyIn === "£2") {
    return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p';
  } else if (moneyIn === "£1") {
    return '20p 20p 20p 20p 20p';
  } else if (moneyIn === "50p") {
    return '20p 20p 10p';
  } else if (moneyIn === "20p") {
    return '10p 10p';
  } else {
    return 'Money';
  }
}
console.log(changeMe('£2'));

console.clear();


function collinearity( x1, y1, x2, y2 ) {
  let coefX = x1 / x2;
  let coefY = y1 / y2;
   if (coefX === coefY) {
    return true;
   };
   if (x2 === 0 && y2 === 0) {
    return true;
   }
   if (x2 === 0 && y2 === 0 && x2 === 0 && y2 === 0) {
    return true;
   } else {
    return false;
   }
}

console.clear();

function flickSwitch(arr){
  let arr2 = [];
  let bool = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'flick') {
      arr2.push(bool);
    } else {
      arr2.push(!bool);
      bool = !bool;
    }
  }
  return arr2;
}
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));

// optimalus
// function flickSwitch(arr){
//   let returning = true;
//     return arr.map( (v) => {
//       return (v === "flick") ? returning = !returning : returning;
//     })
// }

console.clear();

isValid = formula => !(formula.includes(1) && formula.includes(2)) 
                    && !(formula.includes(3) && formula.includes(4))
                    && (formula.includes(5) === formula.includes(6)) 
                    && (formula.includes(7) || formula.includes(8)) 
console.log(isValid([5,6,7,8]));

console.clear();

noBoringZeros = n => +`${n}`.replace(/0+$/,'');

console.log(noBoringZeros(105000));


console.clear();

function sumMul(n, m) {
  if (m <= n) {
    return 'INVALID';
  }
  let s = 0;
  for (let i = n; i < m; i += n) {
    s += i;
  }
 return s;
}
console.log(sumMul(4, 123));

console.clear();



drawStairs = n => [...Array(n)].map((_,index) => ' '.repeat(index) + 'I').join('\n');

console.log(drawStairs(7));

// function drawStairs(n) {
//   let result = [];
  
//   for (let i = 0; i < n; i++) {
//     result[i] = `${' '.repeat(i)}I`;
//   }
  
//   return result.join('\n');
// }

console.clear();


calculateTip = (amount, rating) => (tipScale => tipScale < 0 ? 'Rating not recognised' : Math.ceil(amount * tipScale * .05))
(['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(rating.toLowerCase()));

console.log(calculateTip(100, 'Excellent'));


// const TIPS = {
//   "terrible": 0.0,
//   "poor": 0.05,
//   "good": 0.1,
//   "great": 0.15,
//   "excellent": 0.2
// };

// const calculateTip = (amount, rating) => {
//   rating = rating.toLowerCase();
  
//   return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
// };


console.clear();

function iceBrickVolume(radius, bottleLength, rimLength) {
  let a = Math.sqrt((2*radius)*(2*radius)/2);
  return Math.round(a * a * (bottleLength-rimLength));
}

// optimalus
// const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);

console.clear();


function take(arr, n) {
  return arr.slice(0, n);
}

console.clear();

function leo(oscar){
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  }
  if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  }
  if (oscar < 88 && oscar !==86 && oscar !==88  ) {
    return  "When will you give Leo an Oscar?";
  }
  if (oscar > 88) {
    return "Leo got one already!";
  }

}

// optimalus
// const leo = (oscar) => {
//   return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
//          oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
//          oscar  <  88 ? 'When will you give Leo an Oscar?'        :
//          'Leo got one already!';
// };


console.clear();


function pipeFix(numbers){
 
  let minN = Math.min(...numbers);
  let maxN = Math.max(...numbers);
   
  let arr = [];
  for (let i = minN; i <= maxN; i++) {
    arr.push(i)

  }
  return arr;
  
}
console.log(pipeFix([1, 3, 5, 6, 7, 8]));


 // let minN = Math.min.apply(Math, arguments);
  // let maxN = Math.max.apply(Math, arguments);


  console.clear();

  function warnTheSheep(queue) {
    let sheepNumber = 0;
    if (queue.indexOf('wolf') === queue.length-1) {
      return "Pls go away and stop eating my sheep"
    } else {
        queue.reverse();
        sheepNumber = queue.indexOf('wolf')
        return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`
    }


  }
  console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));


  // optimalus
  // function warnTheSheep(queue) {
  //   const position = queue.reverse().indexOf('wolf');
  //   return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  // }

  console.clear();

  function remove(s, n){
    let str = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      
      if (s[i] === '!') {
        s = s.replace('!', ',');
        count++
        if (count === n) {
          break;
        }
    
      }
    
    }
    
    return s.replaceAll(',', '');
    
    
  }
  console.log(remove("!!!Hi !!hi!!! !hi",5));

  console.clear();


  function stairsIn20(s){
    let sumMonday = 0;
    for (let i = 0; i < s[0].length; i++) {
      sumMonday += s[0][i];
    }
    let sumTuesday = 0;
    for (let i = 0; i < s[1].length; i++) {
      sumTuesday += s[1][i];
    }
    let sumWednesday = 0;
    for (let i = 0; i < s[2].length; i++) {
      sumWednesday += s[2][i];
    }
    let sumThursday = 0;
    for (let i = 0; i < s[3].length; i++) {
      sumThursday += s[3][i];
    }
    let sumFriday = 0;
    for (let i = 0; i < s[4].length; i++) {
      sumFriday += s[4][i];
    }
    let sumSaturday = 0;
    for (let i = 0; i < s[5].length; i++) {
      sumSaturday += s[5][i];
    }
    let sumSunday = 0;
    for (let i = 0; i < s[6].length; i++) {
      sumSunday += s[6][i];
    }

    return (sumMonday + sumTuesday + sumWednesday + sumThursday + sumFriday + sumSaturday + sumSunday) * 20;
  }

//   optimalus
//   // A proper solution
// function stairsIn20(a) {
//   return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
// }

console.clear();

function betterThanAverage(classPoints, yourPoints) {
  let sumClass = 0;
  let countClass = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sumClass += classPoints[i];
    countClass++
  }
  let averageClass = sumClass / countClass;
  return yourPoints > averageClass;
}

// optimalus
// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }

console.clear();


var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;
if (humanYears === 1) {
  catYears = 15;
  dogYears = 15;
}
if (humanYears > 1) {
  catYears = 15 + 9 + (humanYears - 2) * 4;
  dogYears = 15 + 9 + (humanYears - 2) * 5;
}

  return [humanYears, catYears, dogYears];
}

// optimalus
// var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

console.clear();

function  calculateAge(yearBirth, countYear) {

  if (yearBirth === countYear) {
    return "You were born this very year!";
  }
  let count = 0;
  if (yearBirth < countYear) {
    count = countYear - yearBirth;
    if (count === 1) {
      return `You are ${count} year old.`;
    } else {
      return `You are ${count} years old.`;
    }

    
  }
  if (yearBirth > countYear) {
    count = yearBirth - countYear;
    if (count === 1) {
      return `You will be born in ${count} year.`; 
    } else {
      return `You will be born in ${count} years.`; 
    }
    
  
  }
}

// optimalus
// function  calculateAge(m, n) {
// 	if(m == n) return 'You were born this very year!';
//   var year = Math.abs(m-n) == 1 ? 'year' : 'years';
//   if(m < n) return "You are "+(n-m)+' '+year+' old.';
//   if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
// }

console.clear();




function remove (string) {
  let s = '';
  console.log(string[string.length-1]);

  if (string[string.length-1] === "!") {
    s = string.substring(0, string.length - 1);
    return s;
  } else {
    return string;
  }
  
  
}
console.log(remove("Hi!" ));

// optimalus
// const remove = s => s.replace(/!$/, '');

console.clear();

function stringy(size) {
  let str = '';
  for (let i = 0; i < size; i++) {
     if (i % 2 === 0) {
      str += 1;
     } else {
      str += 0;
     }

  }   
  return str;
}
console.log(stringy(12));


// optimalus

// function stringy(size) {
//   var str='';
//   for( var i=1; i<=size; i++ )
//     str+=i%2;
//   return str;
// }

console.clear();


function remove (string) {
  let charToRemove = "!";
  let regex = new RegExp(charToRemove, 'g');
  let result = string.replace(regex, '');
  result = result + '!';
  return result;  
}

// optimalus
// const remove = s => s.replace(/!+/g, "")+"!";

console.clear();


function countWords(str) {
   let arr = str.split(' ');
   console.log(arr);

   return arr.length;
}
console.log(countWords("No results for search term `s`"));

console.clear();

function gHappy(str) {
  let answer = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'g' && str[i] === str[i+1]) {
      answer = true;
    } else {
      answer = false;
    }
  }
    return answer;
}

console.clear();

function tailSwap(arr) {
  let a = arr[0];
  let b = arr[1];
  a = a.split(':');
  b = b.split(':');
  let ansA = `${a[0]}:${b[1]}`;
  let ansB = `${b[0]}:${a[1]}`;
  let newArr = [];
  newArr.push(ansA);
  newArr.push(ansB);
  
  return newArr;
}
console.log(tailSwap(["abc:123", "cde:456"]));

// optimalus
// function tailSwap(arr) {
//   let newArr = arr
//   .map(string => string.split(':'))
//   return [newArr[0][0]+':'+newArr[1][1], newArr[1][0]+':'+newArr[0][1]];
// }

console.clear();

var lengthOfSequence = function (arr, n) {
  let count = 0;
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
    }
   }
   if (count !== 2) {
    return 0;
   }
   let fIndex = arr.indexOf(n);
   let lIndex = arr.lastIndexOf(n);
   return lIndex - fIndex +1;
   
};
console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7));

// optimalus
// function lengthOfSequence(arr, n){
//   return arr.count(n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
// }

// Array.prototype.count = function(n){
//   return this.filter(function(v){ return v == n }).length;
// }

console.clear();


function cubeVolume(h, r) {
  let c = Math.sqrt(2 * r * r)
  let volume = 0;
  if (c >= h ) {
    volume = h * h * h;
  } else {
    volume = c * c * c;
  }
  return volume;
}
console.log(cubeVolume(11, 5));

console.clear();

function mostLikely(prob1,prob2){
   let firstArr = prob1.split(':');
   let firstProb = firstArr[0] / firstArr[1];
   let secondArr = prob2.split(':');
   let secondProb = secondArr[0] / secondArr[1];

   return firstProb > secondProb;
}
console.log(mostLikely('1:3', '1:2'));

// optimalus
// const divide = (a, b) => a / b;
// const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));

console.clear();

function equableTriangle(a,b,c) {
   let p = (a + b + c) /2
   let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
   let perimeter = a + b + c;

   return area === perimeter;    
  }
  console.log(equableTriangle(3, 4, 5));

  console.clear();

  function timeForMilkAndCookies(date){
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();

    if (month === 12 && day === 24) {
      return true;
    } else {
      return false;
    }

  
  }

  // optimalus
  // function timeForMilkAndCookies(date){
  //   return date.getDate() == 24 && date.getMonth() == 11;
  // }

  console.clear();

  function nothingSpecial(str) { 
    if (typeof str !== 'string') {
      return "Not a string!";
    }
     var specialChars = "'';~\"`_!@#$^&%*()+=-[]\/{}|:<>?,.";
     for (let i = 0; i < specialChars.length; i++) {
       str = str.replace(new RegExp("\\" + specialChars[i], "gi"), "");
     }
     return str;
   }

  //  optimalus
  //  function nothingSpecial(str) {
  //   return typeof str === "string" ? str.replace(/[^a-z\d\s]+/ig, "") : "Not a string!"
  // }

  console.clear();

  
  obfuscate = function(email) {
    let string = '';    
      string = email.replaceAll('.',' [dot] ').replaceAll('@', ' [at] ');
      console.log(string);
    return string;
    
  }
  console.log(obfuscate("af5134@borchmore.edu"));


// optimalus
// const obfuscate = email => email.replace(/@/gi, " [at] ").replace(/\./gi, " [dot] ");

console.clear();


function sumDigits(number) {
  if (number < 0) {
    number = number  * (-1)
  }
  let string = number.toString();
  let arr = string.split('');
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
  sum = sum + parseFloat(arr[i]);

  }
  return sum;
}
console.log(sumDigits(-32));

// optimalus
// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }

console.clear();

function bearDollars(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i][1].toLowerCase() === 'close friend') {
      sum = sum + arr[i][0] * 25;
  } else if (arr[i][1].toLowerCase() === 'friend') {
    sum = sum + arr[i][0] * 50;
  } else if (arr[i][1].toLowerCase() === 'acquaintance') {
    sum = sum + arr[i][0] * 100;
  } else {
    sum = sum + arr[i][0] * 125;
  }
  
  }
  return sum;
  
}
console.log(bearDollars([[10, 'Close Friend'], [3, 'Acquaintance'], [7, 'Lead from web'], [6, 'Friend'], [2, 'From advertisements']]));

// optimalus
// function bearDollars(arr) {
//   var obj = {'close friend': 1, 'friend': 2, 'acquaintance': 4};
//   return arr.reduce((a,b) => a + (b[0] * ((obj.hasOwnProperty(b[1].toLowerCase())) ? obj[b[1].toLowerCase()] : 5) * 25), 0);
// }

console.clear();


function factorialDivision(n, d) {
  let nFact = 1;
  let dFact =1;
  for (let i = 1; i <= n; i++) {
    nFact = nFact * i;
  }
  for (let i = 1; i <= d; i++) {
    dFact = dFact * i;
  }

  return nFact /dFact;

  

}
console.log(factorialDivision(5, 3));

console.clear();



function sumNoDuplicates(numList) {  
    let arr = numList.filter((value, index) => numList.indexOf(value) !== index);
    
    let sum = 0;
    let arr2 = [];
    for (let i = 0; i < numList.length; i++) {
      if (!arr.includes(numList[i])) {
        arr2.push(numList[i]);
      }
    }
    return arr2.reduce((partialSum, a) => partialSum + a, 0); 
  
}

console.log(sumNoDuplicates([1, 10, 3, 10, 10, 10, 4, 4]));

// optimalus
// function sumNoDuplicates(numList) {
//   const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index)
//   return uniqueArr.reduce((x,y)=>x+y,0);
//   }

console.clear();


const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  let sum = 0;
  for (let i = begin; i <= end; i +=step) {
      sum = sum + i;
  }
  return sum;
};
console.log(sequenceSum(2, 6, 2));

console.clear();


function squeakyClean(arr) {
  let arr2= [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== 0 && arr[i] !== '' && arr[i] !== undefined ) {
      arr2.push(arr[i]);
    }
    
  }
  return arr2;
}
console.log(squeakyClean(['click1','click2',null,'','','submitForm', 0, undefined]));

console.clear();

// function drawStairs(n) {
//   let result = [];
  
//   for (let i = 0; i < n; i++) {
//     result[i] = `${' '.repeat(i)}I`;
//   }
  
//   return result.join('\n');
// }


function generateShape(integer){
  let result = [];
  for (let i = 0; i < integer; i++) {
      result[i] = `${'+'.repeat(integer)}`;
      
  }
  return result.join('\n');
}
console.log(generateShape(3));

console.clear();

function coffee(str) {
  let arr = str.split(' ');
  let arr2 = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === 'coffee!' || arr[i].toLowerCase() === 'coffee?' || arr[i].toLowerCase() === 'coffee' || arr[i].toLowerCase() === 'coffee.' ) {
      arr[i] = arr[i].toUpperCase();
      arr2.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return arr2.join(' ');
}
console.log(coffee("Coffee! Buy me a COFFEE!" ));

// optimalus
// function coffee(str) {
//   return str.replace(/coffee/ig, "COFFEE");
// }

console.clear();



function myParseInt(str) {
  let regExp = /[A-Za-z]/;
  if (parseFloat(str) % 1 !== 0 ) {
    return NaN; 
  }
  if(regExp.test(str)){
    return NaN;
  } else {
    return parseInt(str);
  }
}
console.log(myParseInt("2"));

console.clear();


function gHappy(str) {
  if (str === '') {
       return true;
    }
   let arr2 = str.split('');
   if (arr2.includes('g') === false) {
    return true;
   }
  let answer = 0;
  let count = 0;
   console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {  
     if (arr2[i] === 'g' && arr2[i+1] === 'g' || arr2[i] === 'g' && arr2[i-1] === 'g' ) {
    answer = 1;
  } else if (arr2[i] === 'g' && arr2[i+1] !== 'g' && arr2[i-1] !== 'g' ) {
    count++;
  } 
}
  if (count > 0) {
    return false;
  }
  
  if (answer !== 1) {
    return false;
  } else {
    return true;
  }
}
console.log(gHappy("A half of a half is a quarter."));

// optimalus
// const gHappy = str => !/([^g]|^)g([^g]|$)/.test(str)

console.clear();


function wordSearch(query, seq){
  let arr =[];
  for (let i = 0; i < seq.length; i++){
    if (seq[i].toLowerCase().includes(query.toLowerCase())) {
      arr.push(seq[i]);

    }
  }
  if (arr.length === 0) {
    return ['Empty'];
  } else {
    return arr;
  }
   
}
console.log(wordSearch("ab", ["ab", "abc", "zab"]));

// optimalus
// function wordSearch(query, seq){
//   var reg = new RegExp(query,"i");
//   var res = seq.filter(function(val){
//     return reg.test(val);
//   });
//   return (res.length > 0) ? res : ["Empty"];
// }

console.clear();

function GeometricSequenceSum(a, r, n) {
  let sum = 0;
  let b = a;
  for (let i = 1; i < n; i++) {
    sum += b * r;
    b = b * r;
  }
  return sum + a;
}
console.log(GeometricSequenceSum(2, 3, 5));

// optimalus
// const GeometricSequenceSum = (a, r, n) =>
//   a * (r ** n - 1) / (r - 1) || a * n;

console.clear();

function spot(s1,s2){
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arr3.push(i);

    }
  }
  return arr3;
}
console.log(spot("abcdefg", "abcqetg"));

// optimalus
// function spot(s1,s2){
//   var final = [];
//   for (var i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) final.push(i);
//   }
//   return final;
// }

console.clear();

function squareDigits(num){
  let arr = num.toString().split('');  
  arr = arr.map((n) => n ** 2);
  let str = parseFloat(arr.join(''));
  
  return str;
}
console.log(squareDigits(9119));

// optimalus
// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
// }

console.clear();



function d01(a,b){
  let diff = a - b;
    if(diff) {
        return false;
      }  else {
        return true;
      }
}
console.log(d01(0, 1));

// optimalus
// function d01(a,b){ return !(a^b) }

console.clear();

function smaller(nums) {
  let count = 0;
  let arr = [];

  while (nums.length !== 0) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] > nums[i]) {
      count++;
    }    
  }
  
  arr.push(count);
  count = 0;
  nums.shift();


}

return arr;


  }
  console.log(smaller([1, 2, 1]));


  // optimalus
  // const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);

  console.clear();

  function myParseInt(str) {
    let arr = str.split('');
    let count = 0;
    let num = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      num = parseInt(arr[i]);     
      if (isNaN(num)) {
        count++;
      }
      if (arr[i] === ' ' || arr[i] === '\n' || arr[i] === '\t') {
        count--
      }
    }

    if (count > 0) {
      return 'NaN';
    } else {
      return parseInt(str);
    }

    
  }
console.log(myParseInt("16.5"));  

console.clear();

function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1; i <=n; i ++) {
    if (n % i === 0){
      count++;
    } 
  }
  return count;
}
console.log(getDivisorsCnt(30));

console.clear();

function showMe(yourID) {
  if (yourID.includes('-') || !yourID.includes(' ') ) {
    return true;
  } else {
    return false;
  }  
}
console.log(showMe("Jean"));

console.clear();

function nbYear(p0, percent, aug, p) {
  let count = 0;
  while (p0 < p) {
    p0 += p0 * percent / 100 + aug;
    p0 = Math.floor(p0);
    count++;
  }
  return count;
}
console.log(nbYear(1000, 2.0, 50, 1214));

// optimalus
// unction nbYear(p0, percent, aug, p) {
    
//   for (var years = 0; p0 < p; years++) {
//     p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//   }
//   return years
// }

console.clear();

function testit(s) {
  let countW = 0;
  let countO = 0;
  let countR = 0;
  let countD = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === 'w') {
      countW++;
    }
    if (s[i].toLowerCase() === 'o') {
      countO++;
    }
    if (s[i].toLowerCase() === 'r') {
      countR++;
    }
    if (s[i].toLowerCase() === 'd') {
      countD++;
    }
    
  }
  let arr = [];
  console.log(countW);
  console.log(countO);
  console.log(countR);
  console.log(countD);
  arr.push(countW);
  arr.push(countO);
  arr.push(countR);
  arr.push(countD);
  console.log(arr);
  arr.sort((a, b) => a -b);
  console.log(arr);

  return arr[0]

}
console.log(testit("One word + one word = three word ;-)"));

console.clear();

function cookingTime(neededPower, minutes, seconds, power) {
  let neededPowerNumber = parseInt(neededPower);
  let powerNumber = parseInt(power);  
  let powerRatio = neededPowerNumber / powerNumber;  
  let s = minutes * 60 + seconds;
 
  let cookingTimeSeconds = s * powerRatio;
  
  let min = Math.floor(cookingTimeSeconds / 60);
  
  let sec = Math.ceil(cookingTimeSeconds - min * 60); 
  
  if (sec === 60) {
    sec = 0;
    min =  min +1;
  }

  return `${min} minutes ${sec} seconds`;
}
console.log(cookingTime("600W", 4, 20, "800W"));

// optimalus
// function cookingTime(neededPower, minutes, seconds, power) {
//   var time = Math.ceil((60 * minutes + seconds) * parseInt(neededPower) / parseInt(power));
//   return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;
// }

console.clear();

function checkExam(array1, array2) {
  let score = 0;
   for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score = score + 4;
    } else if (array2[i] === '') {
      score = score + 0;
    } else {
      score = score - 1;
    }
   }

   if (score < 0) {
    return 0;
   } else {
    return score;
   }
  
 }
 console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));

 console.clear();


 function divisibleByLast(n) {
   let str = n.toString();
   let bool = false;
   let arr = [false];
   for (let i = 1; i < str.length; i++) {
    if (parseFloat(str[i]) % parseFloat(str[i - 1]) === 0) {
      bool = true;       
    } else {
      bool = false;      
    }
    arr.push(bool);
   } 
   return arr;
}
console.log(divisibleByLast(2026));

// optimalus
// const divisibleByLast = n => {
//   return n.toString().split('').map((el, ind, arr) => el % arr[ind - 1] === 0);
// }

console.clear();

function appleBoxes(k) {
  let yellow = 0;
  let red = 0;
  
  for (let i = 1; i <= k; i++){
     if (i % 2 !== 0) {
      yellow += i * i;
     } else {
      red += i * i;
     }
  }
  return red - yellow;
}
console.log(appleBoxes(5));

console.clear();

function candles(candlesNumber, makeNew) {
  let leftowers = candlesNumber;
  let newCandles = 0; 
  let leftowers2 = 0;
  let total = candlesNumber;
  while (leftowers >= makeNew) {
    newCandles = Math.floor(leftowers / makeNew);
    leftowers2 = leftowers - newCandles * makeNew;
    leftowers = leftowers2 + newCandles;
    total += newCandles;
  }
  return total; 
  
}
console.log(candles(5, 2));


// optimalus
// const candles = (candlesNumber, makeNew) =>
//   candlesNumber + --candlesNumber / --makeNew ^ 0;


console.clear();

function countRedBeads(n) {
  if (n < 2) { 
    return 0;
  }
  let red = (n -1) * 2;
  return red;
}
console.log(countRedBeads(3));

console.clear();


// function encode(str){
//   for (let i = 0; i < str.length; i++){
//     // if (str[i] === 'A') {
//     //   str = str.replace('A', 'G');
    
//     // } 
//     // if (str[i] === 'G') {
//     //   str = str.replace('G', 'A');
      
//     // } 
//     if (str[i] === 'a') {
//       str = str.replace('a', 'g');
//       continue
     
//     } 
//     if (str[i] === 'g') {
//      str = str.replace('g', 'a');
//      continue
      
//     }
//     // } else
//     // if (str[i] === 'E') {
//     //   str = str.replace('E', 'D');
     
//     // } else
//     // if (str[i] === 'e') {
//     //   str = str.replace('e', 'd');
      
//     // } else
//     // if (str[i] === 'D') {
//     //   str = str.replace('D', 'E');
//     //      } else
//     // if (str[i] === 'd') {
//     //   str = str.replace('d', 'e');
      
//     // } else
//     // if (str[i] === 'Y') {
//     //   str = str.replace('Y', 'R');
      
//     // } else
//     // if (str[i] === 'y') {
//     //   str = str.replace('y', 'r');
      
//     // } else
//     // if (str[i] === 'R') {
//     //   str = str.replace('R', 'Y');
    
//     // } else
//     // if (str[i] === 'r') {
//     //   str= str.replace('r', 'y');
      
//     // } else
//     // if (str[i] === 'O') {
//     //   str = str.replace('O', 'P');
     
//     // } else
//     // if (str[i] === 'o') {
//     //   str = str.replace('o', 'p');
      
//     // } else
//     // if (str[i] === 'P') {
//     //   str = str.replace('P', 'O');
     
//     // } else
//     // if (str[i] === 'p') {
//     //   str = str.replace('p', 'o');
      
//     // } else
//     // if (str[i] === 'U') {
//     //   str = str.replace('U', 'L');
      
//     // } else
//     // if (str[i] === 'u') {
//     //   str = str.replace('u', 'l');
      
//     // } else
//     // if (str[i] === 'L') {
//     //   str = str.replace('L', 'U');
      
//     // } else
//     // if (str[i] === 'l') {
//     //   str = str.replace('l', 'u');
      
//     // } else
//     // if (str[i] === 'I') {
//     //   str = str.replace('I', 'K');
      
//     // } else
//     // if (str[i] === 'i') {
//     //   str = str.replace('i', 'k');
      
//     // } else
//     // if (str[i] === 'K') {
//     //   str = str.replace('K', 'I');
      
//     // } else
//     // if (str[i] === 'k') {
//     //   str = str.replace('k', 'i');
      
//     // }

//   }
//       return str;   
// }
// console.log(encode("ga"));

// //  "GA-DE-RY-PO-LU-KI"

// function decode(str) {
//   for (let i = 0; i < str.length; i++){
//     if (str[i] === 'A') {
//       str = str.replace('A', 'G');
//       continue;
//     }
//     if (str[i] === 'G') {
//       str = str.replace('G', 'A');
//       continue;
//     }
//     if (str[i] === 'a') {
//       str = str.replace('a', 'g');
//       continue;
//     }
//     if (str[i] === 'g') {
//       str = str.replace('g', 'a');
//       continue;
//     }
//     if (str[i] === 'E') {
//       str = str.replace('E', 'D');
//       continue;
//     }
//     if (str[i] === 'e') {
//       str = str.replace('e', 'd');
//       continue;
//     }
//     if (str[i] === 'D') {
//       str = str.replace('D', 'E');
//       continue;
//     }
//     if (str[i] === 'd') {
//       str = str.replace('d', 'e');
//       continue;
//     }
//     if (str[i] === 'Y') {
//       str = str.replace('Y', 'R');
//       continue;
//     }
//     if (str[i] === 'y') {
//       str = str.replace('y', 'r');
//       continue;
//     }
//     if (str[i] === 'R') {
//       str = str.replace('R', 'Y');
//       continue;
//     }
//     if (str[i] === 'r') {
//       str = str.replace('r', 'y');
//       continue;
//     }
//     if (str[i] === 'O') {
//       str = str.replace('O', 'P');
//       continue;
//     }
//     if (str[i] === 'o') {
//       str = str.replace('o', 'p');
//       continue;
//     }
//     if (str[i] === 'P') {
//       str = str.replace('P', 'O');
//       continue;
//     }
//     if (str[i] === 'p') {
//       str = str.replace('p', 'o');
//       continue;
//     }
//     if (str[i] === 'U') {
//       str = str.replace('U', 'L');
//       continue;
//     }
//     if (str[i] === 'u') {
//       str = str.replace('u', 'l');
//       continue;
//     }
//     if (str[i] === 'L') {
//       str = str.replace('L', 'U');
//       continue;
//     }
//     if (str[i] === 'l') {
//       str = str.replace('l', 'u');
//       continue;
//     }
//     if (str[i] === 'I') {
//       str = str.replace('I', 'K');
//       continue;
//     }
//     if (str[i] === 'i') {
//       str = str.replace('i', 'k');
//       continue;
//     }
//     if (str[i] === 'K') {
//       str = str.replace('K', 'I');
//       continue;
//     }
//     if (str[i] === 'k') {
//       str = str.replace('k', 'i');
//       continue;
//     }

//   }
 


//     return str;   
// }

// console.log(decode("Gug hgs g cgt"));



console.clear();


function celsiusToRomer(temp) {
  let romer = (temp * 21 / 40) + 7.5;
  return romer;
}
console.log(celsiusToRomer(24));

console.clear();



function sortGiftCode(code){
  let arr = code.split('');
  console.log(arr);
  arr = arr.sort();
    let sorted = arr.join('');

  return sorted;
}
console.log(sortGiftCode("pqksuvy"));

// optimalus
// function sortGiftCode(code){
//   return code.split('').sort().join('');
// }


console.clear();


function reverseSlice(str) {
  let rev = str.split('').reverse().join('');
   let arr = [];
   arr.push(rev);   
   let str2= '';
    for (let i = 0; i < str.length; i++) {
      str2 = rev.slice(1);
      arr.push(str2)
      rev = str2;
    }
    arr.pop();
  return arr;
}
console.log(reverseSlice('abcde'));

// optimalus
// function reverseSlice(str) {
//   var rev = str.split('').reverse().join('');;
//   var result = [];
//   for(var i=0;i<str.length;i++)
//   {
//     result.push(rev.slice(i));
//   }
//   return result;
// }

console.clear();

function findMissing(arr1, arr2) {
   arr1 = arr1.sort();
   arr2 = arr2.sort();
   let arr3 = [];

   for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arr3.push(arr1[i]);
    }
   }
  
  return arr3[0]
}
console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));

console.clear();



function diff(a, b){
  let c = [];
  let d = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      c.push(a[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      c.push(b[i]);
    }
  }
  for (let i = 0; i < c.length; i++) {
    if (!d.includes(c[i])) {
      d.push(c[i]);
    }
  }
  d = d.sort();
  return d;
}
console.log(diff(['a', 'a', 't', 'e', 'f', 'i', 'j'], ['t', 'g', 'g', 'i', 'k', 'f']));

// optimalus
// const diff = (a, b) =>
//   [...new Set([...a, ...b].filter(val => a.includes(val) ^ b.includes(val)))].sort();

console.clear();


function evenNumbers(array, number) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0)
      arr.push(array[i]);
  }

  if (arr.length < number) {
    return arr;
  } else {
    for (let i = 0; i < number; i++ ) {
      arr2.push(arr[arr.length - 1 -i])
    }
    arr2 = arr2.reverse();
    return arr2;


  }
  
}
console.log(evenNumbers([-49,-93,-3,-79,-84,89,88,-35,-27,-72], 6));

// optimalus
// const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);



console.clear();

function digitize(n) {
  let str = n.toString();
  str = str.split('');
  str = str.map(a => parseInt(a))
  return str;

}
console.log(digitize(8675309));

// optimalus
// function digitize(n) {
//   return String(n).split('').map(Number);
// }

console.clear();

// function fraction(a, b) {
//   let x = 0;
//   if (a === b) {
//     return a/b*2;
//   }

//   x = a / b;

//   function toFraction(x, tolerance) {
//     if (x == 0) return [0, 1];
//     if (x < 0) x = -x;
//     if (!tolerance) tolerance = 0.0001;
//     var num = 1, den = 1;
  
//     function iterate() {
//         var R = num/den;
//         if (Math.abs((R-x)/x) < tolerance) return;
  
//         if (R < x) num++;
//         else den++;
//         iterate();
//     }
  
//     iterate();
//     return num + den;
//   }

//    return toFraction(x, 0.0001)
  
// }
// console.log(fraction(90, 120));


console.clear();

function getNumberOfSquares(n) {
  let sq = 0;
  let arr = [];
   for (let i = 1; i <= n; i++) {
    sq = i**2;
    arr.push(sq);
   }
   console.log(arr);
   let sum = 0;
   let count = 0;
   while (sum < n) {
    sum = sum + arr[count]
    count++
   }

   return count -1;
}
console.log(getNumberOfSquares(15));

// optimalus
// function getNumberOfSquares(n) {
//   let out = 0, result = 0
//   while ( n > result + (out + 1 )**2){
//     out++
//     result += out**2
//   }
//   return out
// }

console.clear();


function convertHashToArray(hash){
  let a = []; 
  
  for(o in hash) 
  a.push([String(o), hash[o]]);  
  a.sort();
  return a;
}

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


// optimalus
// const convertHashToArray = o => Object.entries(o).sort();

console.clear();


function getLargerNumbers(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= b[i]) {
      c.push(a[i]);
    } else {
      c.push(b[i]);
    }
  }
  return c;
}
console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));

// optimalus
// function getLargerNumbers(a, b) {

//   var newArray = [];
  
//   for ( i=0; i<a.length; i++) {
//     newArray.push( Math.max( a[i], b[i] ) );
//   }
  
//   return newArray;
// }

console.clear();


function reverseLetter(str) {
  str = str.replace(/\W/ig, "");
  str = str.replace(/\d+/g, '');
  str = str.replaceAll('_', '');
  
  let rev = str.split('').reverse().join('');

 return rev; 
  
}
console.log(reverseLetter("ultr53o?n"));

// optimalus
// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

console.clear();

function minMax(arr){
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] > max) {
      max = arr[i];
     } else if (arr[i] < min) {
      min = arr[i];
     }
  }

  return [min, max];

}
console.log(minMax([1,2,3,4,5]));

// optimalus
// function minMax(arr){
//   return [Math.min(...arr), Math.max(...arr)];
// }

console.clear();

function getSum(a, b){
  let arr = [];
  arr.push(a);
  arr.push(b);
  arr.sort((a, b) => a-b);
  console.log(arr);
  let sum = 0;
  
  if (arr[0] < 0 && arr[1] < 0) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
  } else {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }

  }
 
  return sum;
}
console.log(getSum(-1, -5));

// optimalus
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }

console.clear();



function findShort(s){
  let arr = s.split(' ');
 
  let shortest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest.length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// optimalus
// function findShort(s){
//   return Math.min(...s.split(" ").map (s => s.length));
// }

console.clear();

function sumOfMinimums(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    
    let arr2 = arr[i];
    let min = arr2[0];
    
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] < min) {
        min = arr2[j];
      }
      
    }
    
    
    sum +=min;
  }
  return sum;
}
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

// optimalus
// function sumOfMinimums(arr) {
//   return arr.reduce((p, c) => p + Math.min(...c), 0);
// }

console.clear();


function add(arr) {
  let sum = 0;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr[i]; j++) {
      sum += j;
    }
    arr2.push(sum);
    sum = 0;
  }
  return arr2;
}
console.log(add([2, 4, 6, 8, 10]));

console.clear();

function middleMe(N, X, Y){
  if (N % 2 !== 0) {
    return X;
  }
  let mid = N / 2;
  let ans = '';
  
  for (let i = 0; i < mid; i++) {
    ans = ans + Y;
  }

  

  return `${ans}${X}${ans}`
  
}
console.log(middleMe(10, 'A', '*'));

// optimalus
// var middleMe = function (N, X, Y) {
//   var s = Y.repeat(N/2);
  
//   return N % 2 ? X : s + X + s;
// }

console.clear();



function giveChange(amount) {
  let hundred = Math.floor(amount / 100); 
  amount = amount - hundred *100; 
  let fifty = Math.floor(amount / 50); 
  amount = amount - fifty * 50;  
  let twenty = Math.floor(amount / 20); 
  amount = amount - twenty * 20;
  let ten = Math.floor(amount / 10);
  amount = amount - ten * 10;
  let five = Math.floor(amount / 5);
  amount = amount - five * 5;
  let one = Math.floor(amount / 1);
  amount = amount - one * 1;
  let arr = [];
  arr.push(one);
  arr.push(five);
  arr.push(ten);
  arr.push(twenty);
  arr.push(fifty);
  arr.push(hundred);
  
  return arr;
}
console.log(giveChange(217));

console.clear();


var AmIAfraid = function(day, num){
  if (day === 'Monday') {
    return num === 12;
  }
  if (day === 'Tuesday') {
    return num > 95;
  }
  if (day === 'Wednesday') {
    return num === 34;
  }
  if (day === 'Thursday') {
    return num === 0;
  }
  if (day === 'Friday') {
    return num % 2 === 0;
  }
  if (day === 'Saturday') {
    return num === 56;
  }
  if (day === 'Sunday') {
    return num === 666 || num === -666;
  }

}
console.log(AmIAfraid("Sunday", 56));

// optimalus
// var AmIAfraid = function(day, num) {
//   var preds = {"Sunday":    d => d == 666 || d == -666,
//                "Monday":    d => d == 12,
//                "Tuesday":   d => d > 95,
//                "Wednesday": d => d == 34,
//                "Thursday":  d => d === 0,
//                "Friday":    d => d % 2 === 0,
//                "Saturday":  d => d == 56};
//   return preds[day](num);
// }

console.clear();


function doubleEveryOther(a) {
  let double = 0;
  let arr = [];
  for (let i = 0; i < a.length; i++)
    if (i % 2 !== 0) {
      double = a[i] * 2;
      arr.push(double);
    } else {
      arr.push(a[i]);
    }
  return arr;
}
console.log(doubleEveryOther([1,2,3,4]));

// optimalus
// const doubleEveryOther = (a) => a.map((c,i) => i % 2 == 0 ? c : 2 * c);

console.clear();


function sumOrProduct(array, n) {
   array.sort((a, b) => b - a);   
   let sum = 0;
   for (let i = 0; i < n; i++) {
    sum += array[i];
   }   
   array.sort((a, b) => a - b);   
   let product = 1;
   for (let i = 0; i < n; i++) {
    product = product * array[i];
   }
   if (sum > product) {
    return 'sum';
   }
   if (sum < product) {
    return 'product';
   }
   if (sum === product) {
    return 'same';
   }

}

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3));

// optimalus
// const sumOrProduct = (arr, n) => {
//   const sorted = arr.sort((a, b) => a - b);
//   const sum = sorted.slice(-n).reduce((acc, i) => acc + i);
//   const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1);
//   return sum > product ? 'sum' : sum < product ? 'product' : 'same';
// }

console.clear();

function fourPiles(n,y){
  let x = 0;
  while (((x+y) + (x-y) + (x*y) + (x/y)) < n) {
    x++;
  }
  console.log(x);
  if (((x+y) + (x-y) + (x*y) + (x/y)) !== n) {
    return [];
  }
  if ((x -y) === 0) {
    return [];
  }
  return [(x+y), (x-y), (x*y), (x/y)];  
}
console.log(fourPiles(48, 3));

// optimalus
// function fourPiles(n,y){
//   x = n*y/((2+y)*y+1)
// 	if(x%1!=0 || x-y==0) return []
// 	return [x+y,x-y,x*y,x/y]
// }

console.clear();


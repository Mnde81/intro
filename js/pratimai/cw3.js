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





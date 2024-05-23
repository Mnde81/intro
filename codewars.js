




function positiveSum(arr) {
    let positiveSumNumbers = 0;
  for (let i = 0; i <= arr.length; i++) {
    
    if (arr[i] > 0) {
      positiveSumNumbers = positiveSumNumbers + arr[i];
    } else if (arr.length === 0){
      return 0;
    }
  }
  return positiveSumNumbers;
}

console.log(positiveSum([1, -4, 7, 12]));


console.clear();


function check(a, x) {
    
    for (let i = 0; i <= a.length; i++) {
        if (a[i] === x) {
            return true;
        
        }
    }
    return false;
  }

console.log(check([1, 2, 3, 4], 5));


console.clear();


function arrayMadness(a, b) {
    
    let sum1 = 0;
    for (let i = 0; i < a.length; i++) {
        sum1 += a[i] ** 2;
        console.log(sum1);
    }

    let sum2 = 0;
    for (let i = 0; i < b.length; i++) {
        
        sum2 += b[i] ** 3;
        console.log(sum2);        
    }
    
    return sum1 > sum2;
    
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

console.clear();


function testEven(n) {
    if (n % 2 === 0 ) {
        return true;
    } else if (n % 2 !== 0){
        return false;
    }
}
console.log(testEven(4));

console.clear();


function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (letter === str[i]) {
            count++
        }
    }
    return count;
  }

  console.log(strCount('hello', 'l'));


  console.clear();



function zeroFuel(distanceToPump, mpg, fuelLeft) {
 let distance = 0;
 distance = mpg * fuelLeft;

 return distance >= distanceToPump;
}

console.log(zeroFuel(50, 25, 2));


console.clear();


function hero(bullets, dragons){
    let survive = 0;
    survive = bullets / 2;

    return survive >= dragons;
}

console.log(hero(5, 2))


console.clear();


function tripleTrouble(one, two, three){
    let answer = '';
    for (let i = 0; i < one.length; i++)
    answer += one[i] + two[i] + three[i];

    return answer;
}

console.log(tripleTrouble('aa', 'bb', 'cc'));


console.clear();


function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let probBlue = 0;
    let probRed = 0;
    let answer = 0;
    probBlue = blueStart - bluePulled;
    probRed = redStart - redPulled;
    answer = probBlue / (probBlue + probRed);

    return answer;

}

console.log(guessBlue(5, 5, 2, 3));


console.clear();


function past(h, m, s){
    let answer = 0;
    answer = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
    return answer;
}
console.log(past(0, 1, 1));

console.clear();



  function summation(num) {
    let sum1 = 0;
    for (let i = 0; i <= num; i++) {
        sum1 += i;
    }
    return sum1;
  }

  console.log(summation(8));



  console.clear();


  function opposite(number) {
    let answer = 0;
    answer = number - number *2;
    return answer;
  }
console.log(opposite(-34));



console.clear();


function litres(time) {
    let water = 0.5;
    let answer = 0;
    answer = time * water;
    console.log(answer)
    
    answer = Math.floor(answer);
      
    return answer;
  }
  
  console.log(litres(3));


  console.clear();


//   const areaOrPerimeter = function(l , w) {
//   };
 
  function areaOrPerimeter(l, w) {
    let area = 0;
    let perimeter = 0;
    if (l === w) {
        area = l * w;
        return area;
    } else {
        perimeter = l * 2 + w * 2;
    }
    return perimeter;

  }
  console.log(areaOrPerimeter(6, 10));



  console.clear();


  function century(year) {
    let answer = 0;
    if (year % 100 === 0) {
        answer = Math.floor(year / 100);
    } else {
        answer = Math.floor(year / 100 +1);
    }
    

    
    return answer;
  }
  console.log(century(2000));


  console.clear();




  function countSheeps(sheep) {
    let answer = 0;
    const filtered = sheep.filter(element => element !== undefined);
    for (let i = 0; i < filtered.length; i++) {
        if (typeof sheep[i] !== 'null') {

        } else if (typeof sheep[i] !== 'NaN') {
            
        } else if (typeof sheep[i] !== 'string') {


        }
        
        answer = answer + filtered[i];
        
    }
    return answer;
  }
  console.log(countSheeps([undefined, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));

//   const arr = [1, undefined, 3, undefined, 5];
//   const filtered = arr.filter(element => element !== undefined);
//   console.log(filtered); // Output: [1, 3, 5]

// const arr = [true, undefined, true, undefined, true];
// const filtered = arr.filter(element => element !== undefined);
// console.log(filtered);


console.clear();


function enough(cap, on, wait) {
    let spaceLeft = 0;
    let answer = 0;
    spaceLeft = cap - on;
    if (spaceLeft >= wait) {
        return 0;
    } else {
        answer = wait - spaceLeft; 
    }
    return answer;
  }

  console.log(enough(10, 5, 6));


  console.clear();


  function findDifference(a, b) {
    let sum1 = 1;
    for (let i = 0; i < a.length; i++) {
        sum1 = sum1 * a[i];
    }
    let sum2 = 1;
    for (let i = 0; i < b.length; i++) {
        sum2 = sum2 * b[i];
    }
  return Math.abs(sum1 - sum2);

  }

  console.log(findDifference([2, 2, 3], [5, 4, 1]));

  // Math. abs() 


  console.clear();



  function bmi(weight, height) {
  let bmi = 0;
  bmi = weight/height**2;
  if (bmi <= 18.5) {
    return 'Underweight';
  }
  if (bmi <= 25.0) {
    return 'Normal';
  }
  if (bmi <= 30.0) {
    return 'Overweight';
  }
  if (bmi > 30) {
    return 'Obese';
  }


  }

  console.log(bmi(88, 175));


  console.clear();



  function switchItUp(number){
 if (number === 1) {
  return 'One';
 }
 if (number === 0) {
  return 'Zero';
 }
 if (number === 2) {
  return 'Two';
 }
 if (number === 3) {
  return 'Three';
 }
 if (number === 4) {
  return 'Four';
 }
 if (number === 5) {
  return 'Five';
 }
 if (number === 6) {
  return 'Six';
 }
 if (number === 7) {
  return 'Seven';
 }
 if (number === 8) {
  return 'Eight';
 }
 if (number === 9) {
  return 'Nine';
 }
}
  
console.log(switchItUp(8));


console.clear();



function greet() {
  return 'hello world';
}

console.clear();


function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

console.log(simpleMultiplication(8));


console.clear();



function addFive(num) {
  let total = num + 5
  return total;
}
console.log(addFive(5));


console.clear();


function problem(x){
  if (typeof x === 'string') {
    return 'Error'
  } else {
    return x * 50 +6;
  }
}
console.log(problem(4));


console.clear();



function capitalizeWord(word) {
  let result = word.charAt(0).toUpperCase() + word.slice(1);
  return result;
}

console.log(capitalizeWord('hello'))


console.clear();



function contamination(text, char){
  let result = '';
  if (text === '') {
    return '';
  }
  if (char === '') {
    return '';
  }
  for (let i = 0; i < text.length; i++) {
    result += char;
  }
  return result;
}

console.log(contamination('abc', 'z'));


console.clear();


function sayHello(name) {
  return 'Hello, ' + name;
}
console.log(sayHello('Mr. Spock'));

console.clear();


function greet(name){
  
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
  

}
console.log(greet('Johnny'));


console.clear();


function solution(a, b){
  let answer = '';  
  if (a.length < b.length) {
    return a + b + a;

  } else {
    return b + a + b;
  }
}
console.log(solution('1', '22'));



console.clear();



function paperwork(n, m) {
  let answer = 0;
  if (n < 0) {
    return 0;
  } else if (m < 0 ) {
    return 0;
  } else {
    answer = n * m;
  }
  return answer;
}
console.log(paperwork(5, 5));



console.clear();


function peopleWithAgeDrink(old) {
  if (old < 14){
    return 'drink toddy';
  } else if (old < 18){
    return 'drink coke';
  } else if (old < 21) {
    return 'drink beer';
  } else if (old >= 21) {
    return 'drink whisky';
  }
  
}
console.log(peopleWithAgeDrink(12));



console.clear();



function booleanToString(b){
  let answer = '';
  answer = answer + b;
  return answer;
}
console.log(booleanToString(true));


console.clear();


function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else if (current === 'red') {
    return 'green';
  }
  }


console.log(updateLight('green'));


console.clear();



function checkForFactor (base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForFactor(7, 2));


console.clear();


function getAverage(marks){
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return Math.floor(sum / marks.length);
}
console.log(getAverage([5, 6, 7]));



console.clear();



function grow(x){
  let answer = 1;
  for (let i = 0; i < x.length; i++) {
    answer = answer * x[i];
  }
  return answer;
}

console.log(grow([1, 2 ,3 ,4]));


console.clear();


function square(x) {
return x ** 2;
}
console.log(square(4));


console.clear();


function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let sum = 0;
  sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;

  return sum;
}

console.log(goals(5, 10, 2));


console.clear();


function createArray(number){
  let newArray = [];
  
  for(let counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}
console.log(createArray(8));


console.clear();



// const solve = (x, y) => x // y

function solve(x, y) {
  let answer = 0;
  answer = x / y;
  return answer;
}
console.log(solve(5, 2));


console.clear();



function weatherInfo(temp) {
  let celsius =0;
  celsius = (temp - 32) * (5/9);
  if (celsius < 0) {
    return (celsius + " is freezing temperature")
  } else {
    return (celsius + " is above freezing temperature")
  }
    
}
console.log(weatherInfo(50));

function convertToCelsius(temperature) {
  let celsius = 0;
  celsius = (temperature - 32) * (5/9);
  return celsius;
}

console.log(convertToCelsius(50));


console.clear();



function myFirstKata(a, b) {
  if (typeof a !== 'number') {
    return false;
  } else if (typeof b !== 'number') {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}

console.log(myFirstKata(10, 15));

console.clear();



function rainAmount(mm){
  let givewater = 0;
  if (mm < 40) {
       return "You need to give your plant " + (40 - mm) + "mm of water"
  } else if (mm => 40) {
       return "Your plant has had more than enough water for today!"
  };
}

console.log(rainAmount(39));

console.clear();



function countSheep(num) {
  let numcount = 1;
  let answer = '';
  for (let i = 0; i < num; i++) {
    answer += numcount + ' sheep...';
    numcount++;
  }
  return answer;
}
console.log(countSheep(3));


console.clear();


function cubeChecker(volume, side){
  let lengt = 0;

  if (volume <= 0) {
    return false;
  } else if (side <= 0) {
    return false;
  } else if (volume / side / side ===  side) {
    return true;
  } else {
    return false;
  }

  
};
console.log(cubeChecker(8, 2));


console.clear();


function sixToast(num) {
  let six = 0;
  if (num < 6) {
    six = 6 - num;
  } else if (num > 6) {
    six = num - 6;
  }
  return six;
}

console.log(sixToast(5));
console.log(sixToast(12));


console.clear();


function chromosomeCheck(sperm) {
  if (sperm === 'X') {
    return 'Congratulations! You\'re going to have a daughter.'
  } 
  if (sperm === 'Y') {
    return 'Congratulations! You\'re going to have a son.'
  }
}
console.log(chromosomeCheck('X'));
console.log(chromosomeCheck('Y'));


console.clear();

function ifChuckSaysSo(){
    return 2 > 4;
}


console.clear();


function main(verb, noun) {
  return verb + noun;
}

console.clear();



function _if(bool, func1, func2) {
 
  if (bool > 2) {
    return funkcija1(func1);
  } else {
    return funkcija2(func2);
  }

  function funkcija1() {
    return 'Labas'
  }

  function funkcija2() {
    return 'Sveikas'
  }
}
console.log (_if(1, 1, 11));


console.clear();

function removeEveryOther(arr){
  let answer = '';
  let answerlast = '';
  for (let i = 0; i < arr.length; i= i+2) {
    answer = answer + arr[i] + ', ';
  }
  answerlast = '[' + answer + ']';
  return answerlast;
}

console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));


console.clear();

let a = (123).toString();

console.log(a);


console.clear();

function betterThanAverage(classPoints, yourPoints) {
  let sumclass = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sumclass += classPoints[i];
  }
  let sumyour = 0;
  for (let i = 0; i < yourPoints.length; i++) {
    sumyour += yourPoints[i];
}
return answer = (sumyour / yourPoints.length) > (sumclass / classPoints.length);

}

console.clear();


function solution(str){

  let answer = '';
  for (let i = 0; i < str.length; i++) {
    answer += str[str.length - 1 -i];
  }
  return answer;
}

console.log(solution('world'));

// colors[colors.length - 1 - i]);

console.clear();

function sumMix(x){
  let answer = 0;
  for (let i = 0; i < x.length; i++) {
  answer += parseInt(x[i]);
  }
return answer;
}

console.clear();


function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }

}
console.log(finalGrade(100, 12));

console.clear();


function checkAlive(health) {
  if (health <= 0) {    
    return false;
  } else {
    return true;
  }
}

console.clear();


function position(letter){
 
    if (letter === 'a') {
      return 'Position of alphabet: 1';
    } else if (letter === 'b') {
      return 'Position of alphabet: 2';
    } else if (letter === 'c') {
      return 'Position of alphabet: 3';
    } else if (letter === 'd') {
      return 'Position of alphabet: 4';
    } else if (letter === 'e') {
      return 'Position of alphabet: 5';
    } else if (letter === 'f') {
      return 'Position of alphabet: 6';
    } else if (letter === 'g') {
      return 'Position of alphabet: 7';
    } else if (letter === 'h') {
      return 'Position of alphabet: 8';
    } else if (letter === 'i') {
      return 'Position of alphabet: 9';
    } else if (letter === 'j') {
      return 'Position of alphabet: 10';
    } else if (letter === 'k') {
      return 'Position of alphabet: 11';
    } else if (letter === 'l') {
      return 'Position of alphabet: 12';
    } else if (letter === 'm') {
      return 'Position of alphabet: 13';
    } else if (letter === 'n') {
      return 'Position of alphabet: 14';
    } else if (letter === 'o') {
      return 'Position of alphabet: 15';
    } else if (letter === 'p') {
      return 'Position of alphabet: 16';
    } else if (letter === 'q') {
      return 'Position of alphabet: 17';
    } else if (letter === 'r') {
      return 'Position of alphabet: 18';
    } else if (letter === 's') {
      return 'Position of alphabet: 19';
    } else if (letter === 't') {
      return 'Position of alphabet: 20';
    } else if (letter === 'u') {
      return 'Position of alphabet: 21';
    } else if (letter === 'v') {
      return 'Position of alphabet: 22';
    } else if (letter === 'w') {
      return 'Position of alphabet: 23';
    } else if (letter === 'x') {
      return 'Position of alphabet: 24';
    } else if (letter === 'y') {
      return 'Position of alphabet: 25';
    } else if (letter === 'z') {
      return 'Position of alphabet: 26';
    }
}
console.log(position('b'));
  // abcdefghijklmnopqrstuvwxyz


  console.clear();


  function findNeedle(haystack) {
    let pos = 0;
    for (let i = 0; i < haystack.length; i++)
      
      if (haystack[i] === 'needle') {
        return 'found the needle at position ' + pos;
      } else {
        pos = pos +1;
      }
  }
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

console.clear();

function smash(words) {
  let answer = '';
  for (let i = 0; i < words.length; i++) {
    answer += words[i] + ' ';
  }
  answer = answer.slice(0, answer.length-1);
  return answer;
};
console.log(smash(['hello', 'world', 'this', 'is', 'great']));


console.clear();


function setAlarm(employed, vacation){
  if (employed === true && vacation === true) {
    return false;
  } else if (employed === true && vacation === false) {
    return true;
  } else if (employed === false && vacation === true) {
    return false;
  } else if (employed === false && vacation === false) {
    return false;
  } 
}
console.log(setAlarm(true, true));

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false


console.clear();


function pillars(numPill, dist, width) {
  let distance = 0;
  if (numPill > 1) {
    distance = (numPill - 1) * dist * 100 + (numPill - 2) * width;
  } else {
    distance = 0;
  }
  return distance;
}
console.log(pillars(3, 10, 10));

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).


console.clear();


function areYouPlayingBanjo(name) {
  if (name.startsWith('R') || name.startsWith('r')) {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
  
}
console.log(areYouPlayingBanjo('rick'));

console.clear();


// function basicOp(operation, value1, value2){
//   answer = (value1 + operation + value2);
//   return answer;
// }
// console.log(basicOp('+', 4, 7));

// console.clear();


function abbrevName(name){
let firstWord = '';
let secondWord = '';
let answer = '';
let word1 = name.split(' ');
firstWord = word1[0];
secondWord = word1[1];
console.log(firstWord);
console.log(secondWord);

answer = firstWord[0] + '.' + secondWord[0];
answer = answer.toUpperCase();
return answer;


}
console.log(abbrevName('patrick feeney'));


console.clear();


function noBoringZeros(n) {
  let numbers = n.toString();
  for (let i = -1; i < numbers.length; i++) {
    if (numbers.endsWith('0')) {
      numbers = numbers.slice(0, numbers.length - 1);
    }
  }
  numbers = parseInt(numbers);
  return numbers;
}
console.log(noBoringZeros(9600000));


console.clear();


function removeChar(str){
  let answer = '';
  answer = str.slice(1, str.length-1);

  return answer;
 
 };
 console.log(removeChar('Labas'));

 console.clear();



 function unusualFive() {
  let five = 'Five!';
  return five.length;
  }


  console.clear();


  function multiply(number){
    let ans = number.toString();
    let answer = 0;
  if (number >= 0) {
    answer = number * (5 **ans.length);
  } else if (number <0) {
    answer = number * (5 ** (ans.length-1));
  }
    

    return answer;
  }
  console.log(multiply(-3));

  console.clear();














  // Polish ABC


  /*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
*/

// size: 812
// function polish(string) {
//     let result = '';

//     for (let i = 0; i < string.length; i++) {
//         const letter = string[i];

//         if (letter === 'ą') {
//             result += 'a';
//         } else if (letter === 'ć') {
//             result += 'c';
//         } else if (letter === 'ę') {
//             result += 'e';
//         } else if (letter === 'ł') {
//             result += 'l';
//         } else if (letter === 'ń') {
//             result += 'n';
//         } else if (letter === 'ó') {
//             result += 'o';
//         } else if (letter === 'ś') {
//             result += 's';
//         } else if (letter === 'ź') {
//             result += 'z';
//         } else if (letter === 'ż') {
//             result += 'z';
//         } else {
//             result += letter;
//         }
//     }

//     return result;
// } correctPolishLetters

// size: 576
function polish(string) {
  const polishAbc = 'ąćęłńóśźż';
  const normalAbc = 'acelnoszz';
  let result = '';

  for (let i = 0; i < string.length; i++) {
      const letter = string[i];

      let index = -1;
      for (let j = 0; j < polishAbc.length; j++) {
          const polishLetter = polishAbc[j];
          if (polishLetter === letter) {
              result += normalAbc[j];
              index = j;
          }
      }

      if (index === -1) {
          result += letter;
      }
  }

  return result;
}

console.log(polish('Ąłęsa'), '-->', 'Alesa');
console.log(polish('Wałęsa'), '-->', 'Walesa');
console.log(polish('Jędrzej Błądziński'), '-->', 'Jedrzej Bladzinski');
console.log(polish('Lech Wałęsa'), '-->', 'Lech Walesa');
console.log(polish('Maria Skłodowska-Curie'), '-->', 'Maria Sklodowska-Curie');


console.clear();





function getDrinkByProfession(param){
  let profession = param.toLowerCase();
  if (profession === "politician") {
    return 'Your tax dollars'
  } else if (profession === 'jabroni') {
    return 'Patron Tequila';
  } else if (profession === 'school counselor') {
    return 'Anything with Alcohol';
  } else if (profession === 'programmer') {
    return 'Hipster Craft Beer';
  } else if (profession === 'bike gang member') {
    return 'Moonshine';
  } else if (profession === 'rapper') {
    return 'Cristal';
  } else {
    return 'Beer';
  }


return profession;
}
console.log(getDrinkByProfession('pOLitiCIaN'));


console.clear();


function reverseWords(str){
  let reverse = str.split(' ');
  // console.log(reverse);
  let answer = '';
  for (let i = 0; i < reverse.length; i++) {
    answer = answer + reverse[reverse.length - 1 -i] + ' ';
  }
  answer = answer.trim();
  return answer;
}
console.log(reverseWords('The greatest victory is that which requires no battle'));

// colors[colors.length - 1 - i]);



console.clear();









function addLength(str) {
  let answer = str.split(' ');
  // console.log(answer);
  let result = '';
  for (let i = 0; i < answer.length; i++) {
    result += answer[i] + ' ' + answer[i].length + '  ';
  }
  result = result.trim();
  result = result.split('  ');
  return result;
  }

  console.log(addLength('apple ban'));



  console.clear();

















function getPlanetName(id){


  
  if (id === 1) {
    return 'Mercury';
  } else if (id === 2) {
    return 'Venus';
  } else if (id === 3) {
    return 'Earth';
  } else if (id === 4) {
    return 'Mars';
  } else if (id === 5) {
    return 'Jupiter';
  } else if (id === 6) {
    return 'Saturn';
  } else if (id === 7) {
    return 'Uranus';
  } else if (id === 8) {
    return 'Neptune';
  }
  
  
}
console.log(getPlanetName(3));




console.clear();



function otherAngle(a, b) {
  let third = 180 - a -b;
  return third;
}
console.log(otherAngle(30, 60));


console.clear();



function xor(a, b) {
  if (a === false || b === false) {
    return false;
  } else if (a === true || b === false) {
    return true;
  } else if (a === false || b === true) {
    return true;
  } else if (a === true || b === true) {
    return false;
  }
}
console.log(xor(false, false));


console.clear();


function multipleOfIndex(array) {
  
  for (let i = 0; i < array.length; i++) {
    let answer = 0;
    if (array[i] % i !== 0) {
      answer += answer + array[i];
    }
   
  }
  return answer;
  
}


console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));


console.clear();



function validateHello(greetings) {
  let greet = greetings.toLowerCase();
  console.log(greet);
  if (greet.includes('hello')) {
    return true;
  } else if (greet.includes('ciao')) {
    return true;
  } else if (greet.includes('salut')) {
    return true; 
   } else if (greet.includes('hallo')) {
      return true;    
   } else if (greet.includes('hola')) {
      return true;   
      
    } else if (greet.includes('ahoj')) {
      return true; 
    } else if (greet.includes('czesc')) {
      return true; 
    
  
  } else {
    return false;
  }
}

console.log(validateHello('Hello my friend'));


// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish


console.clear();


function reverseList(list) {
  let answer = '';
  for (let i = 0; i < list.length; i++){
    answer = answer + list[list.length - 1 -i] + ' ';
  }
  answer = answer.trim();
  answer = answer.split(' ');
  return answer;
}
console.log(reverseList([1, 2, 3, 4]));


console.clear();



function whatday(num) { 
if (num < 1) {
  return "Wrong, please enter a number between 1 and 7";
} else if (num > 7) {
  return "Wrong, please enter a number between 1 and 7";
} else if (num === 1) {
  return "Sunday";
} else if (num === 2) {
  return "Monday";
} else if (num === 3) {
  return "Tuesday";
} else if (num === 4) {
  return "Wednesday";
} else if (num === 5) {
  return "Thursday";
} else if (num === 6) {
  return "Friday";
} else if (num === 7) {
  return "Saturday";
}



}
console.log(whatday(7));


console.clear();


function generateHashtag(str) {
  let hash = str.split(' ');
  let caps = '';
  if (str === '') {
    return false;
  }
    for (let i = 0; i < hash.length; i++) {
      caps += hash[i].charAt(0).toUpperCase() + hash[i].slice(1);
   }
  if (caps === '') {
    return false;
  }
  caps = '#' + caps;
    if (caps.length > 140) {
      return false;
    }
  return caps;
}

// console.log(generateHashtag('Hello there thanks for trying my Kata'));
console.log(generateHashtag('#'));


console.clear();

function dutyFree(normPrice, discount, hol){
  let discountsum = 0;
  let bottles = 0;
  discountsum = normPrice / 100 * discount;
  bottles = parseInt(hol / discountsum);

  return bottles;
}
console.log(dutyFree(24, 35, 3000))


console.clear();



function humanReadable(seconds) {
  let minutes = 0;
  let hours = 0;
  minutes = parseInt(seconds / 60);
  hours = parseInt(minutes / 60);
  if (seconds < 60) {
    return hours + '0:0' + minutes + ':' + seconds;
  }
  if (minutes < 60 && hours < 10) {
    return '0' + hours + ':' + minutes
  }
  
}

console.log(humanReadable(59));

console.clear();

function sumStrings(a,b) { 
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  let sum = 0;
  let answer = '';
  if (a === '') {
    return b;
  } else if (b = '') {
    return a;
  } else {
    sum = num1 + num2;
    answer = sum.toString();

  }
  sum = num1 + num2;
  answer = sum.toString();

  return answer;
}
console.log(sumStrings('', '2'));


console.clear();




function removeEveryOther(arr){
  let answer = '';
  let answerlast = '';
  for (let i = 0; i < arr.length; i= i+2) {
    answer = answer + arr[i] + ', ';
  }
  answer = answer.trim();
  answer = answer.split(' ');
  return answer;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

console.clear();


function fixTheMeerkat(arr) {
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
      answer = answer + arr[arr.length - 1 - i] + '  ';
  }
  answer = answer.trim();
  answer = answer.split('  ');
  return answer;
 }
 console.log(fixTheMeerkat(['tail', 'body', 'head']));

//  colors[colors.length - 1 - i]);


console.clear();


function solution(str){
  let answer = '';
  for (let i = 0; i < str.length; i +=2) {
    answer += str.slice(0, 2) + '  ';
  }
   return answer;
}
console.log(solution('abcdef'));



console.clear();


// function multipleOfIndex(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % i === 0) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }
// console.log(multipleOfIndex([0, 2, 3, 6, 9]));



// function someFunction(n){
//   var newArray = new Array(n);
//   for(var i=0; i < n.length; i++){
//     newArray += n[i];
//   }
//   return newArray;
// }

// console.log(someFunction(0,5,4,5));


function multipleOfIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      newArray.push(array[i]);
    } else if (array[i] % i === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(multipleOfIndex([0, 2, 3, 6, 9]));


console.clear();


function reverseList(list) {
  const newArray = list.reverse();
  
  
  return newArray;
}

console.log(reverseList([1, 2, 3, 4]));


console.clear();



function strToNumber(val) {
  return parseFloat(val);
  }
  console.log(strToNumber('-7'));




  console.clear();



  function removeEveryOther(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i= i+2) {
      newArray.push(arr[i]);
    }
    
    return newArray;
  }

  console.clear();


  function digitize(n) {
    const arr = n.toString().split('');
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(parseInt(arr[i]));
    }
    newArr.reverse();
    return newArr;
  }
  console.log(digitize(35231));


  console.clear();


  const reverseSeq = n => {
    const newArr = [];
    for (let i = 1; i <= n; i ++) {
      newArr.push(i)
    }
    newArr.reverse();
    return newArr;
  };
  console.log(reverseSeq(5));


  console.clear();


  function monkeyCount(n) {
    const newArr = [];
    for (let i = 1; i <= n; i ++) {
      newArr.push(i)
    }
    
    return newArr;
    }
    console.log(monkeyCount(10));


    console.clear();


    function between(a, b) {
    const newArr = [];
    for (let i = a; i <= b; i ++) {
      newArr.push(i)
    }
    
    return newArr;

    }
    console.log(between(1, 4));


    console.clear();


    function findMultiples(integer, limit) {
      const newArr = [];
      for (let i = integer; i <= limit; i++)
        if (i % integer === 0) {
          newArr.push(i)
        }
        return newArr;
    }
console.log(findMultiples(2, 6));    


console.clear();


//----------------------------------------------------------------------------------------------------------------


// unfinished
// function drawStairs(n) {
//   let stairs = '';
//   for (let i = 0; i < n; i++) {
//     stairs += 'I' + '\n' + ' ';
//     stairs += '';
//   }
//   return stairs;
// }
// console.log(drawStairs(7));


console.clear();



function squareSum(numbers){
  let sum = 0;
    for (i = 0; i < numbers.length; i++){
      sum += numbers[i] ** 2;
    }
    return sum;
}
console.log(squareSum([1, 2, 2]));

// optimalus
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}


console.clear();


function arrayPlusArray(arr1, arr2) {
    const joinedArr = arr1.concat(arr2);
    const initialValue = 0;
    const sumWithInitial = joinedArr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue, );

    return sumWithInitial;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// optimalus
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


console.clear();


function sumStr(a,b) {
  
  if (a === '') {
    a = 0;
  }
  if ( b === '') {
    b = 0;
  }
  let anm = parseFloat(a);
  let bnm = parseFloat(b);
  let sum = anm + bnm;
  return sum.toString();
   

}
console.log(sumStr('', ''));

//optimalus
function sumStr(a,b) {
  return String(Number(a)+Number(b));
}


console.clear();


//nepraejo, virsijo laika 12s
function oddCount(n){
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      sum++;
    }
  }
  return sum;
}
console.log(oddCount(15));
//-------------------------------
// const sum = n/2;

// parseInt(sum);

// https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
// //-----------------------------------------------




console.clear();


function well(x){
let goodsum = 0;
for (let i = 0; i < x.length; i++) {
  if (x[i] === 'good') {
    goodsum++;
  }
}
  if (goodsum === 0) {
    return 'Fail!'
  } else if (goodsum <= 2) {
    return 'Publish!'
  } else if (goodsum > 2) {
    return 'I smell a series!'
  }
  
  
}

console.log(well(['good', 'bad', 'good']));

//optimalus
// const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1 ? 'Fail!' : 
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }


console.clear();



// // Sum Numbers
// function sum(numbers) {
//   let suma = 0;
//   if (numbers === '[]') {
//     return 0;
//   } else {
    
//     for (let i = 0; i < numbers.length; i++) {
//       suma += numbers[i];
//     }
//   }
  
//   return suma;

// };

// console.log(sum([1, 5.2, 4, 0, -1]));

//optimalus
// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

console.clear();


function cockroachSpeed(s) {
  let speed = s * 100000 / 3600;

  return Math.floor(speed);
}
console.log(cockroachSpeed(1.08));

//optimalus
// const cockroachSpeed = s => Math.floor(s / 0.036);

console.clear();


function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
console.log(evenOrOdd(9));

// optimalus
// function evenOrOdd(number) {
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }

console.clear();


function removeExclamationMarks(s) {
   
   const str = s.replaceAll('!', '');
  return str;
}
console.log(removeExclamationMarks('Labas! rytas!'));

// optimalus
// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }


console.clear();


function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * (-1);
  }
  return array ;
}
console.log(invert([1,2,3,4,5]));


// optimalus
// const invert = array => array.map(num => -num);

console.clear();


function numberToString(num) {
  return num.toString();
}
console.log(numberToString(9));

console.clear();


function combineNames(firstName, lastName) {

  return `${firstName} ${lastName}`;
}
console.log(combineNames('James', 'Stevens'));

// optimalus
// const combineNames = (...names) => names.join(' ');

console.clear();


const stringToNumber = function(str){
  
  return parseInt(str);
}
console.log(stringToNumber('1234'));

console.clear();



function howMuchILoveYou(nbPetals) {
  const petalsround = nbPetals - 6 * Math.trunc(nbPetals / 6);
  
  if (petalsround % 6 === 0) {
    return "not at all";
  }
  if (petalsround === 1) {
    return "I love you";
  }
  if (petalsround === 2) {
    return "a little";
  }
  if (petalsround === 3) {
    return "a lot";
  }
  if (petalsround === 4) {
    return "passionately";
  }
  if (petalsround === 5) {
    return "madly";
  }
}

console.log(howMuchILoveYou(8));

// optimalus
// function howMuchILoveYou(nbPetals) {
//   let phrase = {    
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly"
//   }
//   return phrase[nbPetals%6]
// }

console.clear();



function maps(x){

  const array1 = x.map((x) => x * 2);
  return array1;
}
console.log(maps([1, 4, 9, 16]));

// optimalus
// function maps(x){
//   return x.map(n => n * 2);
// }

console.clear();


function repeatStr (n, s) {
  strAnswer = '';
  for (let i = 0; i < n; i++)
    strAnswer += s;
  return strAnswer;
}
console.log(repeatStr(5, 'Hello'));

// optimalus
// function repeatStr (n, s) {
//   return s.repeat(n);
// }

console.clear();


function divisibleBy(numbers, divisor){
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// optimalus
// function divisibleBy(numbers, divisor) {
//   return numbers.filter(n => n % divisor === 0)
// }

console.clear();


function makeNegative(num) {
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return num;
  } else {
    return num * (-1);
  }
}
console.log(makeNegative(1));

// optimalus
// function makeNegative(num) {
//   return -Math.abs(num);
// }

console.clear();


function converter (mpg) {
  const ltrPerGallon = 4.54609188;
  const kmPerMile = 1.609344;
  const conv = kmPerMile / ltrPerGallon;
  let answer = mpg * conv;
  return parseFloat(answer.toFixed(2));
}
console.log(converter(10));

console.clear();



function powersOfTwo(n){
  let newArr = [];
  for (let i = 0; i <= n; i++){
    newArr.push(2 ** i);

  }
  return newArr;
}
console.log(powersOfTwo(2));

// optimalus
// function powersOfTwo(n){
//   var result = [];
//   for (var i = 0; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }

console.clear();


function replace(s){
  let answer = '';
   answer = s.replace(/[aeiouAEIOU]/gi, '!');
  
  return answer;
}
console.log(replace('Hi !'));

console.clear();





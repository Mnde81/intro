




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


function basicOp(operation, value1, value2){
  answer = eval(value1 + operation + value2);
  return answer;
}
console.log(basicOp('+', 4, 7));

console.clear();


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


  


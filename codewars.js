




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


  


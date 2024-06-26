
 
  
function findSmallestInt(arr) {
    const smallest = Math.min(...arr);
    return smallest;
  }
  console.log(findSmallestInt([34, 15, 88, 2]));
  console.log(findSmallestInt([34, -345, -1, 100]));

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
    if (input === '[]' || input === 'null') {
        return [];
    } else {
        return [countPositives, sumNegatives];

    }
    
}

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


  
  console.clear();

  function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n ; i++) {
        z.push(x * i)
    }
  
    return z;
  }
  console.log(countBy(1, 10));


 console.clear();

 function getSize(width, height, depth) {
 const area = width * depth *2 + height * width *2 + height * depth *2;
 const volume = width * depth * height;

 return [area, volume];

 }

 console.clear();

 function correct(string) {

	let answer = string.replaceAll('0', 'O').replaceAll('5', 'S').replaceAll('1', 'I');
  
  return answer;
}
console.log(correct('L0ND0N'));

// optimalus
// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

console.clear();



function combat(health, damage) {
    if (damage >= health) {
        return 0;
    } else {
        return health - damage;
    }
  }

//   optimalus
//   function combat(health, damage) {
// 	return health < damage ? 0 : health - damage
// }

console.clear();


function twoDecimalPlaces(n) {
    return parseFloat(n.toFixed(2));
  }
  console.log(twoDecimalPlaces(5.5589));


//   optimalus
//   function twoDecimalPlaces(n) {
//     return Math.round(n*100)/100;
//   }

// const twoDecimalPlaces = n =>  Number(n.toFixed(2))

console.clear();


function shortenToDate(longDate) {
    let str = longDate.replaceAll(',', '');
    str = str.split(' ');
    str = `${str[0]} ${str[1]} ${str[2]}`;
    
    return str;
  }
  console.log(shortenToDate("Friday May 2, 7pm"));


// optimalus
// function shortenToDate(longDate) {
//     return longDate.split(",")[0];
//   }


console.clear();


function remainder(n, m){
    if (n > m) {
        return n % m;
    } else {
        return m % n;
    }
    
  }
  console.log(remainder(17, 5));


//   optimalus
//   function remainder(a, b){
//     return a > b ? a % b : b % a;
//   }

console.clear();

function nearestSq(n){

    let near = Math.sqrt(n);
    let answer = Math.ceil(near);
    if (n / near === near) {
        return n;
    } else {
        
        answer = answer * answer;
    }
    

    return answer;
}
console.log(nearestSq(111));


console.clear();


function sayHello( name, city, state ) {
    let nameString = name.toString();
    nameString = nameString.replaceAll(',', ' ')
    console.log(nameString);

    return `Hello, ${nameString}! Welcome to ${city}, ${state}!`
}
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));


// optimalus
// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
//     }


console.clear();

var templateStrings = function(noun, adjective) {
    
    return `${noun} are ${adjective}`
  }
  console.log(templateStrings('You', 'special'));

  console.clear();


  function doubleChar(str) {
    let dc = str.split('');
    let answer = '';
    for (let i = 0; i < dc.length; i++) {
        answer += dc[i] + dc[i];
    }
    return answer;
  }
console.log(doubleChar('Hello World'));  

// optimalus
// const doubleChar = (str) => str.split("").map(c => c + c).join("");

console.clear();


function formatMoney(amount){
    let str =  amount.toLocaleString("us", { minimumFractionDigits: 2 });
    str = str.replace(',', '');
    return `$${str}`
  }
  console.log(formatMoney(3));

  console.clear();


  function spEng(sentence){
    const lower = sentence.toLowerCase();
    
    const answer = lower.includes('english') ? true : false;
    return answer;
    }
    console.log(spEng('abcEnglishdef'));

    // optimalus
    // function spEng(s){
    //     return /english/i.test(s)
    //  }

    console.clear();

    function howManyDalmations(number) {
  
        var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
        
        if (number <= 10) {
            return dogs[0];
        };
         if (number <= 50) {
            return dogs[2];
        };
        if (number === 101) {
            return dogs[3];
         } else {
            return dogs[0];
         };
        };

        console.clear();


        function fuelPrice(litres, pricePerLitre) {
            if (litres < 2) {
                return parseFloat((litres * pricePerLitre).toFixed(2));
            } else if (litres >= 2 && litres < 4) {
                return parseFloat((litres * (pricePerLitre - 0.05)).toFixed(2));
            } else if (litres >= 4 && litres < 6) {
                return parseFloat((litres * (pricePerLitre - 0.1)).toFixed(2));
            } else if (litres >= 6 && litres < 8) {
                return parseFloat((litres * (pricePerLitre - 0.15)).toFixed(2));
            } else if (litres >= 8 && litres < 10) {
                return parseFloat((litres * (pricePerLitre - 0.2)).toFixed(2));
            } else if (litres >= 10) {
                return parseFloat((litres * (pricePerLitre - 0.25)).toFixed(2));
            }
          }
          console.log(fuelPrice(3, 1.5));

        //   optimalus
        //   function fuelPrice(litres, pricePerLiter) {
        //     for (var i = 2; i <= 10; i +=2) { //discount loop
        //       if (litres >= i) {
        //         pricePerLiter -= 0.05;
        //       }
        //     }
        //     return Math.round(litres * pricePerLiter * 100) / 100;;
        //   }
        console.clear();

        var quote = function(fighter) {
            let person = fighter.toLowerCase();
            if (person === 'conor mcgregor') {
                return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
            };
            if (person === 'george saint pierre') {
                return "I am not impressed by your performance.";
            }
          };
        
          console.clear();

          function getNumberFromString(s) {
            let num = s.replace(' ','');
            console.log(num);
            num = num.match(/\d/g);
            num = num.join("");
            return parseFloat(num);
          }
          console.log(getNumberFromString("hell5o wor6ld"));

    //  optimalus
    //  function getNumberFromString(s) {
    //     return +s.replace(/\D/g, "");
    //   }

    console.clear();

    function generateRange(min, max, step){
        let arr = [];
        for (let i = min; i < max; i + step)
            arr.push[i];

    }
    console.log(generateRange(1, 10, 1));

          
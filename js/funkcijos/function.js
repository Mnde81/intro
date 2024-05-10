/*

FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/



function doSomething(params) {
    // 1) Input (parametru) validavimas
    // 2) Vykdome logika
    // 3) Gauto rezultato validavimas
    // 4) Graziname rezultata
}

function funkcijosPavadinimas () {

}
const a = funkcijosPavadinimas();
console.log(a);       // undefined



function empty()  {
   return undefined;
}

console.log(empty());   // undefined



function giveMeFive() {
    return 5;
}

console.log(giveMeFive());


/* 
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!

*/


function intro(name, lastname) {
    return 'Laba diena, as esu ' + name + ' ' + lastname + '!';
}
console.log(intro('Jonas', 'Jonatis'));
console.log(intro('Ona', 'Onaityte'));


/*

Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5, 7));
console.log(multiply(-2, 8));
console.log(multiply(3.14, 2));


// funkcijos gali gauti neribota kieki parametru

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas Maryte, man 88 metai ir as megstu balionus.

function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';
}

console.log(iLike('Jonas'));  // undefined
console.log(iLike('Jonas', 99, 'cepelinus'));
console.log(iLike('Maryte', 88, 'balionus'));



function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;

    const priceForSale = value * priceIncrease;
    return priceForSale;
}

console.log(price(100));
console.log(price(1000));



function words(w1, w2, w3) {
    let sentence = 'Dictionary: ';
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '.';
    return sentence;
}

console.log(words('Labas', 'rytas', 'Lietuva'));

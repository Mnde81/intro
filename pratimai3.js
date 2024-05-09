// Funkcijos
// 1.

function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());

console.log('--------------------');


// 2.

function daugyba(skaicius1, skaicius2) {
    const answer = skaicius1 * skaicius2;
    return answer;
}
console.log(daugyba(2, 2));
console.log(daugyba(6, 5));
console.log(daugyba(10, 12));

console.log(daugyba(2, Infinity));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(2, NaN));
console.log(daugyba(-NaN, NaN));
console.log(daugyba(5, 'Labas'));
console.log(daugyba(5, 'Labas'.length));
console.log(daugyba(5, []));
console.log(daugyba(5, [].length));
console.log(daugyba(5, [7]));
console.log(daugyba(5, [7].length));
console.log(daugyba(5, [7, 2]));
console.log(daugyba(5, [7, 2].length));
console.log(daugyba(5, true));
console.log(daugyba(5, false));
console.log(daugyba(5, undefined));
console.log(daugyba(5, null));
console.log(daugyba(5, daugyba));
console.log(daugyba(5, daugyba()));
console.log(daugyba(5, daugyba(2, 4)));
console.log(daugyba(5, (2 * 4)));
console.log(daugyba(5));
console.log(daugyba());


console.log('--------------------');



// 3. 

function skaitmenuKiekisSkaiciuje(reiksme) {
    
    if (isNaN(reiksme)) {
        return 'Pateikta netinkamo tipo reiksme';
    } else if (typeof reiksme == "boolean") {
        return 'Pateikta netinkamo tipo reiksme';
    } else {
        return reiksme.toString().length;
    }

}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('--------------------');



// 4.

function didziausiasSkaiciusSarase(reiksme) {
    if (Array.isArray(reiksme) === false) {
        return 'Pateikta netinkamo tipo reiksme';
    } else if (reiksme.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias';
        } else {
        let largest = 0;
        for(let i = 0; i < reiksme.length; i++){
            if (reiksme[i] > largest) {
                largest = reiksme[i];
            }
        }
        return largest;
    }
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
// rezultatas = 0 ????  console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

console.log('--------------------');



// 5.

function isrinktiRaides(text, step) {
    let resultText = '';
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    } else if (text.length === 0) {
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio.';
    } else if (text.length > 100) {
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio.';
    } else if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo';
    } else if (step <= 0) {
        return 'Antrasis kintamasis turi buti didesnis uz nuli.';
    } else if (step > text.length) {
        return 'Antrasis kintamas turi buti ne didesnis uz pateikto teksto ilgi.'
    } else {
        
        for (let i = step -1; i < text.length; i += step) {
            resultText = resultText + text[i];

    }
        
        }
        return resultText;
    }




console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides(1561, 2));

console.log('--------------------');


// 6.

function dalyba(num1, num2) {
    if (num2 === 0) {
        return 'Dalyba is nulio negalima.';
    } else if (typeof num1 === 'string') {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (typeof num2 === 'string') {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (typeof num1 === 'boolean') {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (typeof num2 === 'boolean') {
        return 'Pateikta netinkamo tipo reiksme.';
    } 
    return num1 / num2;
}

console.log(dalyba(2, 0));
console.log(dalyba('abc', 2));
console.log(dalyba(3, 'abc'));
console.log(dalyba(5, true));
console.log(dalyba(false, 4));

console.log(dalyba(-100, 20));
console.log(dalyba(55, 4));

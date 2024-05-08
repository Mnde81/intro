// Funkcijos
// 1.

function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());

console.log('--------------------');


// 2.

function daugyba(skaicius1, skaicius2) {
    return skaicius1 * skaicius2;
}
console.log(daugyba(2, 2));
console.log(daugyba(6, 5));
console.log(daugyba(10, 12));

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
        for(i = 0; i < reiksme.length; i++){
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
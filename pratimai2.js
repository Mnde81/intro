// Ciklo FOR panaudojimas

// 1.


let suma1 = 0;
for (let i = 0; i <= 0; i++) {
    suma1 += i;
}
console.log(suma1);


let suma2 = 0;
for (let i = 0; i <= 4; i++) {
    suma2 += i;
}
console.log(suma2);


let suma3 = 0;
for (let i = 0; i <= 100; i++) {
    suma3 += i;
}
console.log(suma3);


let suma4 = 0;
for (let i = 574; i <= 815; i++) {
    suma4 += i;
}
console.log(suma4);


let suma5 = 0;
for (let i = -50; i <= 50; i++) {
    suma5 += i;
}
console.log(suma5);


let suma6 = 0;
for (let i = -70; i <= 30; i++) {
    suma6 += i;
}
console.log(suma6);

console.log('--------------------');


// sprendimas su funkcija

function intervalSum(start, finish) {
    let answer = 0;
    for (let i = start; i <= finish; i++) {
        answer += i;
    }
    return answer;
}

console.log(intervalSum(13, 21));



console.log('--------------------');


// 2.

const words = 'abcdef'


    for (let i = 0; i < words.length; i++) {
        console.log(words[words.length - 1 - i]);
    }


// sprendimas su funcija (iraso i viena eilute)

    function reverseString(text) {
        let answer = '';
        for (let i = 0; i < text.length; i++) {
            answer += text[text.length - 1 -i ];
        // arba:  answer = text[i] + answer;
        }

    
        return answer;
    }

    console.log(reverseString('labukas'));
    console.log(reverseString('vakaras'));

console.log('--------------------');



// 3.

let dalyba1 = 0;
let beLiek1 = 0;
for (let i = 0; i <=11; i++) {
    dalyba1 = (i % 3);
    if (dalyba1 === 0) {
        beLiek1 += 1;
    }
}
console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra ' + beLiek1 + ' vienetai.');



let dalyba2 = 0;
let beLiek2 = 0;
for (let i = 0; i <=11; i++) {
    dalyba2 = (i % 5);
    if (dalyba2 === 0) {
        beLiek2 += 1;
    }
}
console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra ' + beLiek2 + ' vienetai.');



let dalyba3 = 0;
let beLiek3 = 0;
for (let i = 0; i <=11; i++) {
    dalyba3 = (i % 7);
    if (dalyba3 === 0) {
        beLiek3 += 1;
    }
}
console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra ' + beLiek3 + ' vienetai.');



console.log('--------------------');

let dalyba4 = 0;
let beLiek4 = 0;
for (let i = 8; i <=31; i++) {
    dalyba4 = (i % 3);
    if (dalyba4 === 0) {
        beLiek4 += 1;
    }
}
console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra ' + beLiek4 + ' vienetai.');




let dalyba5 = 0;
let beLiek5 = 0;
for (let i = 8; i <=31; i++) {
    dalyba5 = (i % 5);
    if (dalyba5 === 0) {
        beLiek5 += 1;
    }
}
console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra ' + beLiek5 + ' vienetai.');




let dalyba6 = 0;
let beLiek6 = 0;
for (let i = 8; i <=31; i++) {
    dalyba6 = (i % 7);
    if (dalyba6 === 0) {
        beLiek6 += 1;
    }
}
console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra ' + beLiek6 + ' vienetai.');


console.log('--------------------');


let dalyba7 = 0;
let beLiek7 = 0;
for (let i = -18; i <=18; i++) {
    dalyba7 = (i % 3);
    if (dalyba7 === 0) {
        beLiek7 += 1;
    }
}
console.log('Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra ' + beLiek7 + ' vienetai.');


let dalyba8 = 0;
let beLiek8 = 0;
for (let i = -18; i <=18; i++) {
    dalyba8 = (i % 5);
    if (dalyba8 === 0) {
        beLiek8 += 1;
    }
}
console.log('Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra ' + beLiek8 + ' vienetai.');



let dalyba9 = 0;
let beLiek9 = 0;
for (let i = -18; i <=18; i++) {
    dalyba9 = (i % 7);
    if (dalyba9 === 0) {
        beLiek9 += 1;
    }
}
console.log('Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 7 yra ' + beLiek9 + ' vienetai.');

console.log('--------------------');
console.log('--------------------');


// sprendimas su funkcija 

function numberCount(start, finish, step) {
    let answer = 0;
    for (let i = start; i <= finish; i++) {
        // console.log('>>>', i % step);

        if (i % step === 0) {
            answer++;
        }
       
    }

    return 'Skaiciu intervale tarp ' + start + ' ir ' + finish + ', besidalijanciu be liekanos is ' + step + ' yra ' + answer + ' vienetai.';
}
console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));
console.log('--------------------');
console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));
console.log('--------------------');
console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));


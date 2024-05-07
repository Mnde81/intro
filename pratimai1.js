// JavaScript mini uzduotys
// Kintamuju inicijavimas
// 1.

const skaiciukas1 = 1;
console.log(skaiciukas1);

const skaiciukas2 = 2;
console.log(skaiciukas2);

const skaiciukas3 = 3;
console.log(skaiciukas3);

// 2.

const zodis1 = 'Zeme'
console.log(zodis1);

const zodis2 = 'yra'
console.log(zodis2);

const zodis3 = 'apvali'
console.log(zodis3);


// 3.

const skaiciusMasyvas1 = [4, 6, 8, 10 ,12];
console.log(skaiciusMasyvas1);

const skaiciusMasyvas2 = [13, 14, 15, 16 ,17];
console.log(skaiciusMasyvas2);

const skaiciusMasyvas3 = [21, 23, 25, 27,29];
console.log(skaiciusMasyvas3);

// 4.

const zodisMasyvas1 = ['obuolys', 'kriause', 'apelsinas', 'bananas', 'kivis'];
console.log(zodisMasyvas1);

const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
console.log(zodisMasyvas2);

const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
console.log(zodisMasyvas3);


// Veiksmai su kintamaisiais
// 1.

const skaiciukasSum = skaiciukas1 + skaiciukas2 + skaiciukas3;
console.log(skaiciukasSum);

// 2.

const zodisSum = zodis1 + ' ' + zodis2 + ' ' + zodis3;
console.log(zodisSum);

// 3.

const skaiciusMasyvasSum1 = skaiciusMasyvas1[0] - skaiciusMasyvas1[1] + skaiciusMasyvas1[2] - skaiciusMasyvas1[3] + skaiciusMasyvas1[4];
console.log(skaiciusMasyvasSum1);

const skaiciusMasyvasSum2 = skaiciusMasyvas2[0] - skaiciusMasyvas2[1] + skaiciusMasyvas2[2] - skaiciusMasyvas2[3] + skaiciusMasyvas2[4];
console.log(skaiciusMasyvasSum2);

const skaiciusMasyvasSum3 = skaiciusMasyvas3[0] - skaiciusMasyvas3[1] + skaiciusMasyvas3[2] - skaiciusMasyvas3[3] + skaiciusMasyvas3[4];
console.log(skaiciusMasyvasSum3);

// 4.

const zodisMasyvasSum1 = zodisMasyvas1[4] + ', ' + zodisMasyvas1[3] + ', ' + zodisMasyvas1[2] + ', ' + zodisMasyvas1[1] + ', ' + zodisMasyvas1[0];
console.log(zodisMasyvasSum1);

const zodisMasyvasSum2 = zodisMasyvas2[4] + ', ' + zodisMasyvas2[3] + ', ' + zodisMasyvas2[2] + ', ' + zodisMasyvas2[1] + ', ' + zodisMasyvas2[0];
console.log(zodisMasyvasSum2);

const zodisMasyvasSum3 = zodisMasyvas3[4] + ', ' + zodisMasyvas3[3] + ', ' + zodisMasyvas3[2] + ', ' + zodisMasyvas3[1] + ', ' + zodisMasyvas3[0];
console.log(zodisMasyvasSum3);

// Kintamuju palyginimas
// 1.
// a.
console.log('---------a--------');

if (skaiciukas1 > skaiciukas2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas1 > skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas2 > skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// b.

console.log('---------b--------');

if (skaiciukas1 < skaiciukas2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas1 < skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas2 < skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// c.

console.log('---------c--------');

if (skaiciukas1 === skaiciukas2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas1 === skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas2 === skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// d.

console.log('---------d--------');

if (skaiciukas1 !== skaiciukas2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas1 !== skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas2 !== skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// e.

console.log('---------e--------');

if (skaiciukas1 >= skaiciukas2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas1 >= skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas2 >= skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// f.

console.log('---------f--------');

if (skaiciukas1 <= skaiciukas2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas1 <= skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (skaiciukas2 <= skaiciukas3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}


// 2.  'Zeme yra apvali'

console.log('---------2--------');

const zodisIlgis1 = zodis1.length;
console.log(zodisIlgis1);

const zodisIlgis2 = zodis2.length;
console.log(zodisIlgis2);

const zodisIlgis3 = zodis3.length;
console.log(zodisIlgis3);

// 3. 
// a.
console.log('---------3 a.--------');

const zodisTarpPalyg1 = zodisIlgis1 > zodisIlgis2;
console.log(zodisTarpPalyg1);

const zodisTarpPalyg2 = zodisIlgis1 > zodisIlgis3;
console.log(zodisTarpPalyg2);

const zodisTarpPalyg3 = zodisIlgis2 > zodisIlgis3;
console.log(zodisTarpPalyg3);

// b.

console.log('---------3 b.--------');

const zodisTarpPalyg1_1 = zodisIlgis1 < zodisIlgis2;
console.log(zodisTarpPalyg1_1);

const zodisTarpPalyg2_1 = zodisIlgis1 < zodisIlgis3;
console.log(zodisTarpPalyg2_1);

const zodisTarpPalyg3_1 = zodisIlgis2 < zodisIlgis3;
console.log(zodisTarpPalyg3_1);

// c.

console.log('---------3 c.--------');

const zodisTarpPalyg1_2 = zodisIlgis1 === zodisIlgis2;
console.log(zodisTarpPalyg1_2);

const zodisTarpPalyg2_2 = zodisIlgis1 === zodisIlgis3;
console.log(zodisTarpPalyg2_2);

const zodisTarpPalyg3_2 = zodisIlgis2 === zodisIlgis3;
console.log(zodisTarpPalyg3_2);


// d.

console.log('---------3 d.--------');

const zodisTarpPalyg1_3 = zodisIlgis1 !== zodisIlgis2;
console.log(zodisTarpPalyg1_3);

const zodisTarpPalyg2_3 = zodisIlgis1 !== zodisIlgis3;
console.log(zodisTarpPalyg2_3);

const zodisTarpPalyg3_3 = zodisIlgis2 !== zodisIlgis3;
console.log(zodisTarpPalyg3_3);

// e.

console.log('---------3 e.--------');

const zodisTarpPalyg1_4 = zodisIlgis1 >= zodisIlgis2;
console.log(zodisTarpPalyg1_4);

const zodisTarpPalyg2_4 = zodisIlgis1 >= zodisIlgis3;
console.log(zodisTarpPalyg2_4);

const zodisTarpPalyg3_4 = zodisIlgis2 >= zodisIlgis3;
console.log(zodisTarpPalyg3_4);

// f.

console.log('---------3 f.--------');

const zodisTarpPalyg1_5 = zodisIlgis1 <= zodisIlgis2;
console.log(zodisTarpPalyg1_5);

const zodisTarpPalyg2_5 = zodisIlgis1 <= zodisIlgis3;
console.log(zodisTarpPalyg2_5);

const zodisTarpPalyg3_5 = zodisIlgis2 <= zodisIlgis3;
console.log(zodisTarpPalyg3_5);


// 4.

console.log('---------4.--------');

// const zodisMasyvas1 = ['obuolys', 'kriause', 'apelsinas', 'bananas', 'kivis'];
// console.log(zodisMasyvas1);

// const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
// console.log(zodisMasyvas2);

// const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
// console.log(zodisMasyvas3);

const zodisMasyvasIlgis1_1 = zodisMasyvas1[0].length + ', ' + zodisMasyvas1[1].length + ', ' + zodisMasyvas1[2].length + ', ' + zodisMasyvas1[3].length + ', ' + zodisMasyvas1[4].length;
console.log(zodisMasyvasIlgis1_1);

const zodisMasyvasIlgis2_1 = zodisMasyvas2[0].length + ', ' + zodisMasyvas2[1].length + ', ' + zodisMasyvas2[2].length + ', ' + zodisMasyvas2[3].length + ', ' + zodisMasyvas2[4].length;
console.log(zodisMasyvasIlgis2_1);

const zodisMasyvasIlgis3_1 = zodisMasyvas3[0].length + ', ' + zodisMasyvas3[1].length + ', ' + zodisMasyvas3[2].length + ', ' + zodisMasyvas3[3].length + ', ' + zodisMasyvas3[4].length;
console.log(zodisMasyvasIlgis3_1);

// 5.
// a.
console.log('---------5 a.---obuolys >-----');

const zodisMasyvasPalyg1_1 = zodisMasyvas1[0].length > zodisMasyvas1[1].length;
console.log(zodisMasyvasPalyg1_1);

const zodisMasyvasPalyg1_2 = zodisMasyvas1[0].length > zodisMasyvas1[2].length;
console.log(zodisMasyvasPalyg1_2);

const zodisMasyvasPalyg1_3 = zodisMasyvas1[0].length > zodisMasyvas1[3].length;
console.log(zodisMasyvasPalyg1_3);

const zodisMasyvasPalyg1_4 = zodisMasyvas1[0].length > zodisMasyvas1[4].length;
console.log(zodisMasyvasPalyg1_4);

console.log('--------kriause >---------');

const zodisMasyvasPalyg1_1_1 = zodisMasyvas1[1].length > zodisMasyvas1[2].length;
console.log(zodisMasyvasPalyg1_1_1);

const zodisMasyvasPalyg1_2_1 = zodisMasyvas1[1].length > zodisMasyvas1[3].length;
console.log(zodisMasyvasPalyg1_2_1);

const zodisMasyvasPalyg1_3_1 = zodisMasyvas1[1].length > zodisMasyvas1[4].length;
console.log(zodisMasyvasPalyg1_3_1);


console.log('-------apelsinas >----------');

const zodisMasyvasPalyg1_1_2 = zodisMasyvas1[2].length > zodisMasyvas1[3].length;
console.log(zodisMasyvasPalyg1_1_2);

const zodisMasyvasPalyg1_2_2 = zodisMasyvas1[2].length > zodisMasyvas1[4].length;
console.log(zodisMasyvasPalyg1_2_2);

console.log('-------bananas >----------');

const zodisMasyvasPalyg1_1_3 = zodisMasyvas1[3].length > zodisMasyvas1[4].length;
console.log(zodisMasyvasPalyg1_1_3);


// const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
// console.log(zodisMasyvas2);
console.log('---------5 a.---azuolas >-----');

const zodisMasyvasPalyg2_1 = zodisMasyvas2[0].length > zodisMasyvas2[1].length;
console.log(zodisMasyvasPalyg2_1);

const zodisMasyvasPalyg2_2 = zodisMasyvas2[0].length > zodisMasyvas2[2].length;
console.log(zodisMasyvasPalyg2_2);

const zodisMasyvasPalyg2_3 = zodisMasyvas2[0].length > zodisMasyvas2[3].length;
console.log(zodisMasyvasPalyg2_3);

const zodisMasyvasPalyg2_4 = zodisMasyvas2[0].length > zodisMasyvas2[4].length;
console.log(zodisMasyvasPalyg2_4);

console.log('--------pusis >---------');

const zodisMasyvasPalyg2_1_1 = zodisMasyvas2[1].length > zodisMasyvas2[2].length;
console.log(zodisMasyvasPalyg2_1_1);

const zodisMasyvasPalyg2_2_1 = zodisMasyvas2[1].length > zodisMasyvas2[3].length;
console.log(zodisMasyvasPalyg2_2_1);

const zodisMasyvasPalyg2_3_1 = zodisMasyvas2[1].length > zodisMasyvas2[4].length;
console.log(zodisMasyvasPalyg2_3_1);


console.log('-------egle >----------');

const zodisMasyvasPalyg2_1_2 = zodisMasyvas2[2].length > zodisMasyvas2[3].length;
console.log(zodisMasyvasPalyg2_1_2);

const zodisMasyvasPalyg2_2_2 = zodisMasyvas2[2].length > zodisMasyvas2[4].length;
console.log(zodisMasyvasPalyg1_2_2);

console.log('-------uosis >----------');

const zodisMasyvasPalyg2_1_3 = zodisMasyvas2[3].length > zodisMasyvas2[4].length;
console.log(zodisMasyvasPalyg2_1_3);


// const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
// console.log(zodisMasyvas3);
console.log('---------5 a.---ezeras >-----');

const zodisMasyvasPalyg3_1 = zodisMasyvas3[0].length > zodisMasyvas3[1].length;
console.log(zodisMasyvasPalyg3_1);

const zodisMasyvasPalyg3_2 = zodisMasyvas3[0].length > zodisMasyvas3[2].length;
console.log(zodisMasyvasPalyg3_2);

const zodisMasyvasPalyg3_3 = zodisMasyvas3[0].length > zodisMasyvas3[3].length;
console.log(zodisMasyvasPalyg3_3);

const zodisMasyvasPalyg3_4 = zodisMasyvas3[0].length > zodisMasyvas3[4].length;
console.log(zodisMasyvasPalyg3_4);

console.log('--------upe >---------');

const zodisMasyvasPalyg3_1_1 = zodisMasyvas3[1].length > zodisMasyvas3[2].length;
console.log(zodisMasyvasPalyg3_1_1);

const zodisMasyvasPalyg3_2_1 = zodisMasyvas3[1].length > zodisMasyvas3[3].length;
console.log(zodisMasyvasPalyg3_2_1);

const zodisMasyvasPalyg3_3_1 = zodisMasyvas3[1].length > zodisMasyvas3[4].length;
console.log(zodisMasyvasPalyg3_3_1);


console.log('-------jura >----------');

const zodisMasyvasPalyg3_1_2 = zodisMasyvas3[2].length > zodisMasyvas3[3].length;
console.log(zodisMasyvasPalyg3_1_2);

const zodisMasyvasPalyg3_2_2 = zodisMasyvas3[2].length > zodisMasyvas3[4].length;
console.log(zodisMasyvasPalyg3_2_2);

console.log('-------vandenynas >----------');

const zodisMasyvasPalyg3_1_3 = zodisMasyvas3[3].length > zodisMasyvas3[4].length;
console.log(zodisMasyvasPalyg3_1_3);




// 5 b.

console.log('---------5 b.---obuolys <-----');

const zodisMasyvasPalygMaz1_1 = zodisMasyvas1[0].length < zodisMasyvas1[1].length;
console.log(zodisMasyvasPalygMaz1_1);

const zodisMasyvasPalygMaz1_2 = zodisMasyvas1[0].length < zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygMaz1_2);

const zodisMasyvasPalygMaz1_3 = zodisMasyvas1[0].length < zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygMaz1_3);

const zodisMasyvasPalygMaz1_4 = zodisMasyvas1[0].length < zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMaz1_4);

console.log('--------kriause <---------');

const zodisMasyvasPalygMaz1_1_1 = zodisMasyvas1[1].length < zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygMaz1_1_1);

const zodisMasyvasPalygMaz1_2_1 = zodisMasyvas1[1].length < zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygMaz1_2_1);

const zodisMasyvasPalygMaz1_3_1 = zodisMasyvas1[1].length < zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMaz1_3_1);


console.log('-------apelsinas <----------');

const zodisMasyvasPalygMaz1_1_2 = zodisMasyvas1[2].length < zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygMaz1_1_2);

const zodisMasyvasPalygMaz1_2_2 = zodisMasyvas1[2].length < zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMaz1_2_2);

console.log('-------bananas <----------');

const zodisMasyvasPalygMaz1_1_3 = zodisMasyvas1[3].length < zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMaz1_1_3);


// const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
// console.log(zodisMasyvas2);
console.log('---------5 b.---azuolas <-----');

const zodisMasyvasPalygMaz2_1 = zodisMasyvas2[0].length < zodisMasyvas2[1].length;
console.log(zodisMasyvasPalygMaz2_1);

const zodisMasyvasPalygMaz2_2 = zodisMasyvas2[0].length < zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygMaz2_2);

const zodisMasyvasPalygMaz2_3 = zodisMasyvas2[0].length < zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygMaz2_3);

const zodisMasyvasPalygMaz2_4 = zodisMasyvas2[0].length < zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMaz2_4);

console.log('--------pusis <---------');

const zodisMasyvasPalygMaz2_1_1 = zodisMasyvas2[1].length < zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygMaz2_1_1);

const zodisMasyvasPalygMaz2_2_1 = zodisMasyvas2[1].length < zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygMaz2_2_1);

const zodisMasyvasPalygMaz2_3_1 = zodisMasyvas2[1].length < zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMaz2_3_1);


console.log('-------egle <----------');

const zodisMasyvasPalygMaz2_1_2 = zodisMasyvas2[2].length < zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygMaz2_1_2);

const zodisMasyvasPalygMaz2_2_2 = zodisMasyvas2[2].length < zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMaz1_2_2);

console.log('-------uosis <----------');

const zodisMasyvasPalygMaz2_1_3 = zodisMasyvas2[3].length < zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMaz2_1_3);


// const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
// console.log(zodisMasyvas3);
console.log('---------5 b.---ezeras <-----');

const zodisMasyvasPalygMaz3_1 = zodisMasyvas3[0].length < zodisMasyvas3[1].length;
console.log(zodisMasyvasPalygMaz3_1);

const zodisMasyvasPalygMaz3_2 = zodisMasyvas3[0].length < zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygMaz3_2);

const zodisMasyvasPalygMaz3_3 = zodisMasyvas3[0].length < zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygMaz3_3);

const zodisMasyvasPalygMaz3_4 = zodisMasyvas3[0].length < zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMaz3_4);

console.log('--------upe <---------');

const zodisMasyvasPalygMaz3_1_1 = zodisMasyvas3[1].length < zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygMaz3_1_1);

const zodisMasyvasPalygMaz3_2_1 = zodisMasyvas3[1].length < zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygMaz3_2_1);

const zodisMasyvasPalygMaz3_3_1 = zodisMasyvas3[1].length < zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMaz3_3_1);


console.log('-------jura <----------');

const zodisMasyvasPalygMaz3_1_2 = zodisMasyvas3[2].length < zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygMaz3_1_2);

const zodisMasyvasPalygMaz3_2_2 = zodisMasyvas3[2].length < zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMaz3_2_2);

console.log('-------vandenynas <----------');

const zodisMasyvasPalygMaz3_1_3 = zodisMasyvas3[3].length < zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMaz3_1_3);



// 5 c.

console.log('---------5 c.---obuolys === -----');

const zodisMasyvasPalygLyg1_1 = zodisMasyvas1[0].length === zodisMasyvas1[1].length;
console.log(zodisMasyvasPalygLyg1_1);

const zodisMasyvasPalygLyg1_2 = zodisMasyvas1[0].length === zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygLyg1_2);

const zodisMasyvasPalygLyg1_3 = zodisMasyvas1[0].length === zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygLyg1_3);

const zodisMasyvasPalygLyg1_4 = zodisMasyvas1[0].length === zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygLyg1_4);

console.log('--------kriause === ---------');

const zodisMasyvasPalygLyg1_1_1 = zodisMasyvas1[1].length === zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygLyg1_1_1);

const zodisMasyvasPalygLyg1_2_1 = zodisMasyvas1[1].length === zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygLyg1_2_1);

const zodisMasyvasPalygLyg1_3_1 = zodisMasyvas1[1].length === zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygLyg1_3_1);


console.log('-------apelsinas === ----------');

const zodisMasyvasPalygLyg1_1_2 = zodisMasyvas1[2].length === zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygLyg1_1_2);

const zodisMasyvasPalygLyg1_2_2 = zodisMasyvas1[2].length === zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygLyg1_2_2);

console.log('-------bananas === ----------');

const zodisMasyvasPalygLyg1_1_3 = zodisMasyvas1[3].length === zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygLyg1_1_3);


// const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
// console.log(zodisMasyvas2);
console.log('---------5 c.---azuolas === -----');

const zodisMasyvasPalygLyg2_1 = zodisMasyvas2[0].length === zodisMasyvas2[1].length;
console.log(zodisMasyvasPalygLyg2_1);

const zodisMasyvasPalygLyg2_2 = zodisMasyvas2[0].length === zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygLyg2_2);

const zodisMasyvasPalygLyg2_3 = zodisMasyvas2[0].length === zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygLyg2_3);

const zodisMasyvasPalygLyg2_4 = zodisMasyvas2[0].length === zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygLyg2_4);

console.log('--------pusis === ---------');

const zodisMasyvasPalygLyg2_1_1 = zodisMasyvas2[1].length === zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygLyg2_1_1);

const zodisMasyvasPalygLyg2_2_1 = zodisMasyvas2[1].length === zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygLyg2_2_1);

const zodisMasyvasPalygLyg2_3_1 = zodisMasyvas2[1].length === zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygLyg2_3_1);


console.log('-------egle === ----------');

const zodisMasyvasPalygLyg2_1_2 = zodisMasyvas2[2].length === zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygLyg2_1_2);

const zodisMasyvasPalygLyg2_2_2 = zodisMasyvas2[2].length === zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygLyg1_2_2);

console.log('-------uosis === ----------');

const zodisMasyvasPalygLyg2_1_3 = zodisMasyvas2[3].length === zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygLyg2_1_3);


// const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
// console.log(zodisMasyvas3);
console.log('---------5 c.---ezeras === -----');

const zodisMasyvasPalygLyg3_1 = zodisMasyvas3[0].length === zodisMasyvas3[1].length;
console.log(zodisMasyvasPalygLyg3_1);

const zodisMasyvasPalygLyg3_2 = zodisMasyvas3[0].length === zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygLyg3_2);

const zodisMasyvasPalygLyg3_3 = zodisMasyvas3[0].length === zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygLyg3_3);

const zodisMasyvasPalygLyg3_4 = zodisMasyvas3[0].length === zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygLyg3_4);

console.log('--------upe === ---------');

const zodisMasyvasPalygLyg3_1_1 = zodisMasyvas3[1].length === zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygLyg3_1_1);

const zodisMasyvasPalygLyg3_2_1 = zodisMasyvas3[1].length === zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygLyg3_2_1);

const zodisMasyvasPalygLyg3_3_1 = zodisMasyvas3[1].length === zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygLyg3_3_1);


console.log('-------jura === ----------');

const zodisMasyvasPalygLyg3_1_2 = zodisMasyvas3[2].length === zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygLyg3_1_2);

const zodisMasyvasPalygLyg3_2_2 = zodisMasyvas3[2].length === zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygLyg3_2_2);

console.log('-------vandenynas === ----------');

const zodisMasyvasPalygLyg3_1_3 = zodisMasyvas3[3].length === zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygLyg3_1_3);


// 5 d.

console.log('---------5 d.---obuolys !== -----');

const zodisMasyvasPalygNLyg1_1 = zodisMasyvas1[0].length !== zodisMasyvas1[1].length;
console.log(zodisMasyvasPalygNLyg1_1);

const zodisMasyvasPalygNLyg1_2 = zodisMasyvas1[0].length !== zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygNLyg1_2);

const zodisMasyvasPalygNLyg1_3 = zodisMasyvas1[0].length !== zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygNLyg1_3);

const zodisMasyvasPalygNLyg1_4 = zodisMasyvas1[0].length !== zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygNLyg1_4);

console.log('--------kriause !== ---------');

const zodisMasyvasPalygNLyg1_1_1 = zodisMasyvas1[1].length !== zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygNLyg1_1_1);

const zodisMasyvasPalygNLyg1_2_1 = zodisMasyvas1[1].length !== zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygNLyg1_2_1);

const zodisMasyvasPalygNLyg1_3_1 = zodisMasyvas1[1].length !== zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygNLyg1_3_1);


console.log('-------apelsinas !== ----------');

const zodisMasyvasPalygNLyg1_1_2 = zodisMasyvas1[2].length !== zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygNLyg1_1_2);

const zodisMasyvasPalygNLyg1_2_2 = zodisMasyvas1[2].length !== zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygNLyg1_2_2);

console.log('-------bananas !== ----------');

const zodisMasyvasPalygNLyg1_1_3 = zodisMasyvas1[3].length !== zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygNLyg1_1_3);


// const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
// console.log(zodisMasyvas2);
console.log('---------5 d.---azuolas !== -----');

const zodisMasyvasPalygNLyg2_1 = zodisMasyvas2[0].length !== zodisMasyvas2[1].length;
console.log(zodisMasyvasPalygNLyg2_1);

const zodisMasyvasPalygNLyg2_2 = zodisMasyvas2[0].length !== zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygNLyg2_2);

const zodisMasyvasPalygNLyg2_3 = zodisMasyvas2[0].length !== zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygNLyg2_3);

const zodisMasyvasPalygNLyg2_4 = zodisMasyvas2[0].length !== zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygNLyg2_4);

console.log('--------pusis !== ---------');

const zodisMasyvasPalygNLyg2_1_1 = zodisMasyvas2[1].length !== zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygNLyg2_1_1);

const zodisMasyvasPalygNLyg2_2_1 = zodisMasyvas2[1].length !== zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygNLyg2_2_1);

const zodisMasyvasPalygNLyg2_3_1 = zodisMasyvas2[1].length !== zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygNLyg2_3_1);


console.log('-------egle !== ----------');

const zodisMasyvasPalygNLyg2_1_2 = zodisMasyvas2[2].length !== zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygNLyg2_1_2);

const zodisMasyvasPalygNLyg2_2_2 = zodisMasyvas2[2].length !== zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygNLyg1_2_2);

console.log('-------uosis !== ----------');

const zodisMasyvasPalygNLyg2_1_3 = zodisMasyvas2[3].length !== zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygNLyg2_1_3);


// const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
// console.log(zodisMasyvas3);
console.log('---------5 d.---ezeras !== -----');

const zodisMasyvasPalygNLyg3_1 = zodisMasyvas3[0].length !== zodisMasyvas3[1].length;
console.log(zodisMasyvasPalygNLyg3_1);

const zodisMasyvasPalygNLyg3_2 = zodisMasyvas3[0].length !== zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygNLyg3_2);

const zodisMasyvasPalygNLyg3_3 = zodisMasyvas3[0].length !== zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygNLyg3_3);

const zodisMasyvasPalygNLyg3_4 = zodisMasyvas3[0].length !== zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygNLyg3_4);

console.log('--------upe !== ---------');

const zodisMasyvasPalygNLyg3_1_1 = zodisMasyvas3[1].length !== zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygNLyg3_1_1);

const zodisMasyvasPalygNLyg3_2_1 = zodisMasyvas3[1].length !== zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygNLyg3_2_1);

const zodisMasyvasPalygNLyg3_3_1 = zodisMasyvas3[1].length !== zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygNLyg3_3_1);


console.log('-------jura !== ----------');

const zodisMasyvasPalygNLyg3_1_2 = zodisMasyvas3[2].length !== zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygNLyg3_1_2);

const zodisMasyvasPalygNLyg3_2_2 = zodisMasyvas3[2].length !== zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygNLyg3_2_2);

console.log('-------vandenynas !== ----------');

const zodisMasyvasPalygNLyg3_1_3 = zodisMasyvas3[3].length !== zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygNLyg3_1_3);






// 5. e >=


console.log('---------5 e.---obuolys >= -----');

const zodisMasyvasPalygDLyg1_1 = zodisMasyvas1[0].length >= zodisMasyvas1[1].length;
console.log(zodisMasyvasPalygDLyg1_1);

const zodisMasyvasPalygDLyg1_2 = zodisMasyvas1[0].length >= zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygDLyg1_2);

const zodisMasyvasPalygDLyg1_3 = zodisMasyvas1[0].length >= zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygDLyg1_3);

const zodisMasyvasPalygDLyg1_4 = zodisMasyvas1[0].length >= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygDLyg1_4);

console.log('--------kriause >= ---------');

const zodisMasyvasPalygDLyg1_1_1 = zodisMasyvas1[1].length >= zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygDLyg1_1_1);

const zodisMasyvasPalygDLyg1_2_1 = zodisMasyvas1[1].length >= zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygDLyg1_2_1);

const zodisMasyvasPalygDLyg1_3_1 = zodisMasyvas1[1].length >= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygDLyg1_3_1);


console.log('-------apelsinas >= ----------');

const zodisMasyvasPalygDLyg1_1_2 = zodisMasyvas1[2].length >= zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygDLyg1_1_2);

const zodisMasyvasPalygDLyg1_2_2 = zodisMasyvas1[2].length >= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygDLyg1_2_2);

console.log('-------bananas >= ----------');

const zodisMasyvasPalygDLyg1_1_3 = zodisMasyvas1[3].length >= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygDLyg1_1_3);


// const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
// console.log(zodisMasyvas2);
console.log('---------5 e.---azuolas >= -----');

const zodisMasyvasPalygDLyg2_1 = zodisMasyvas2[0].length >= zodisMasyvas2[1].length;
console.log(zodisMasyvasPalygDLyg2_1);

const zodisMasyvasPalygDLyg2_2 = zodisMasyvas2[0].length >= zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygDLyg2_2);

const zodisMasyvasPalygDLyg2_3 = zodisMasyvas2[0].length >= zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygDLyg2_3);

const zodisMasyvasPalygDLyg2_4 = zodisMasyvas2[0].length >= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygDLyg2_4);

console.log('--------pusis >= ---------');

const zodisMasyvasPalygDLyg2_1_1 = zodisMasyvas2[1].length >= zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygDLyg2_1_1);

const zodisMasyvasPalygDLyg2_2_1 = zodisMasyvas2[1].length >= zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygDLyg2_2_1);

const zodisMasyvasPalygDLyg2_3_1 = zodisMasyvas2[1].length >= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygDLyg2_3_1);


console.log('-------egle >= ----------');

const zodisMasyvasPalygDLyg2_1_2 = zodisMasyvas2[2].length >= zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygDLyg2_1_2);

const zodisMasyvasPalygDLyg2_2_2 = zodisMasyvas2[2].length >= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygDLyg1_2_2);

console.log('-------uosis >= ----------');

const zodisMasyvasPalygDLyg2_1_3 = zodisMasyvas2[3].length >= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygDLyg2_1_3);


// const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
// console.log(zodisMasyvas3);
console.log('---------5 e.---ezeras >= -----');

const zodisMasyvasPalygDLyg3_1 = zodisMasyvas3[0].length >= zodisMasyvas3[1].length;
console.log(zodisMasyvasPalygDLyg3_1);

const zodisMasyvasPalygDLyg3_2 = zodisMasyvas3[0].length >= zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygDLyg3_2);

const zodisMasyvasPalygDLyg3_3 = zodisMasyvas3[0].length >= zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygDLyg3_3);

const zodisMasyvasPalygDLyg3_4 = zodisMasyvas3[0].length >= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygDLyg3_4);

console.log('--------upe >= ---------');

const zodisMasyvasPalygDLyg3_1_1 = zodisMasyvas3[1].length >= zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygDLyg3_1_1);

const zodisMasyvasPalygDLyg3_2_1 = zodisMasyvas3[1].length >= zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygDLyg3_2_1);

const zodisMasyvasPalygDLyg3_3_1 = zodisMasyvas3[1].length >= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygDLyg3_3_1);


console.log('-------jura >= ----------');

const zodisMasyvasPalygDLyg3_1_2 = zodisMasyvas3[2].length >= zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygDLyg3_1_2);

const zodisMasyvasPalygDLyg3_2_2 = zodisMasyvas3[2].length >= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygDLyg3_2_2);

console.log('-------vandenynas >= ----------');

const zodisMasyvasPalygDLyg3_1_3 = zodisMasyvas3[3].length >= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygDLyg3_1_3);



// 5. f  <=

console.log('---------5 f.---obuolys <= -----');

const zodisMasyvasPalygMLyg1_1 = zodisMasyvas1[0].length <= zodisMasyvas1[1].length;
console.log(zodisMasyvasPalygMLyg1_1);

const zodisMasyvasPalygMLyg1_2 = zodisMasyvas1[0].length <= zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygMLyg1_2);

const zodisMasyvasPalygMLyg1_3 = zodisMasyvas1[0].length <= zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygMLyg1_3);

const zodisMasyvasPalygMLyg1_4 = zodisMasyvas1[0].length <= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMLyg1_4);

console.log('--------kriause <= ---------');

const zodisMasyvasPalygMLyg1_1_1 = zodisMasyvas1[1].length <= zodisMasyvas1[2].length;
console.log(zodisMasyvasPalygMLyg1_1_1);

const zodisMasyvasPalygMLyg1_2_1 = zodisMasyvas1[1].length <= zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygMLyg1_2_1);

const zodisMasyvasPalygMLyg1_3_1 = zodisMasyvas1[1].length <= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMLyg1_3_1);


console.log('-------apelsinas <= ----------');

const zodisMasyvasPalygMLyg1_1_2 = zodisMasyvas1[2].length <= zodisMasyvas1[3].length;
console.log(zodisMasyvasPalygMLyg1_1_2);

const zodisMasyvasPalygMLyg1_2_2 = zodisMasyvas1[2].length <= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMLyg1_2_2);

console.log('-------bananas <= ----------');

const zodisMasyvasPalygMLyg1_1_3 = zodisMasyvas1[3].length <= zodisMasyvas1[4].length;
console.log(zodisMasyvasPalygMLyg1_1_3);


// const zodisMasyvas2 = ['azuolas', 'pusis', 'egle', 'uosis', 'liepa'];
// console.log(zodisMasyvas2);
console.log('---------5 f.---azuolas <= -----');

const zodisMasyvasPalygMLyg2_1 = zodisMasyvas2[0].length <= zodisMasyvas2[1].length;
console.log(zodisMasyvasPalygMLyg2_1);

const zodisMasyvasPalygMLyg2_2 = zodisMasyvas2[0].length <= zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygMLyg2_2);

const zodisMasyvasPalygMLyg2_3 = zodisMasyvas2[0].length <= zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygMLyg2_3);

const zodisMasyvasPalygMLyg2_4 = zodisMasyvas2[0].length <= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMLyg2_4);

console.log('--------pusis <= ---------');

const zodisMasyvasPalygMLyg2_1_1 = zodisMasyvas2[1].length <= zodisMasyvas2[2].length;
console.log(zodisMasyvasPalygMLyg2_1_1);

const zodisMasyvasPalygMLyg2_2_1 = zodisMasyvas2[1].length <= zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygMLyg2_2_1);

const zodisMasyvasPalygMLyg2_3_1 = zodisMasyvas2[1].length <= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMLyg2_3_1);


console.log('-------egle <= ----------');

const zodisMasyvasPalygMLyg2_1_2 = zodisMasyvas2[2].length <= zodisMasyvas2[3].length;
console.log(zodisMasyvasPalygMLyg2_1_2);

const zodisMasyvasPalygMLyg2_2_2 = zodisMasyvas2[2].length <= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMLyg1_2_2);

console.log('-------uosis <= ----------');

const zodisMasyvasPalygMLyg2_1_3 = zodisMasyvas2[3].length <= zodisMasyvas2[4].length;
console.log(zodisMasyvasPalygMLyg2_1_3);


// const zodisMasyvas3 = ['ezeras', 'upe', 'jura', 'vandenynas', 'tvenkinys'];
// console.log(zodisMasyvas3);
console.log('---------5 f.---ezeras <= -----');

const zodisMasyvasPalygMLyg3_1 = zodisMasyvas3[0].length <= zodisMasyvas3[1].length;
console.log(zodisMasyvasPalygMLyg3_1);

const zodisMasyvasPalygMLyg3_2 = zodisMasyvas3[0].length <= zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygMLyg3_2);

const zodisMasyvasPalygMLyg3_3 = zodisMasyvas3[0].length <= zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygMLyg3_3);

const zodisMasyvasPalygMLyg3_4 = zodisMasyvas3[0].length <= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMLyg3_4);

console.log('--------upe <= ---------');

const zodisMasyvasPalygMLyg3_1_1 = zodisMasyvas3[1].length <= zodisMasyvas3[2].length;
console.log(zodisMasyvasPalygMLyg3_1_1);

const zodisMasyvasPalygMLyg3_2_1 = zodisMasyvas3[1].length <= zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygMLyg3_2_1);

const zodisMasyvasPalygMLyg3_3_1 = zodisMasyvas3[1].length <= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMLyg3_3_1);


console.log('-------jura <= ----------');

const zodisMasyvasPalygMLyg3_1_2 = zodisMasyvas3[2].length <= zodisMasyvas3[3].length;
console.log(zodisMasyvasPalygMLyg3_1_2);

const zodisMasyvasPalygMLyg3_2_2 = zodisMasyvas3[2].length <= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMLyg3_2_2);

console.log('-------vandenynas <= ----------');

const zodisMasyvasPalygMLyg3_1_3 = zodisMasyvas3[3].length <= zodisMasyvas3[4].length;
console.log(zodisMasyvasPalygMLyg3_1_3);
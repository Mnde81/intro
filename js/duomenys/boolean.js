/* 

Boolean - logines reiksmes

- true
- false

Boolean logikos operatoriai:
- && (and)    // turi tenkinti visas salygas true
- || (or)    // (arba) turi tenkinti bent viena salyga true
- !  (not)  // daugiau nei 2 sauktukai nerasyti

Kaip interpretuojame kiti duomenu tipai ir ju reiksme, jei jos yra naudojamos lyg boolean'ai?

String:
jei tuscias - false
jei ne tuscias - true

Number:
jei nulis - false
jei ne nulis - true
Jei NaN - false
jei Infinity - true
jei -Infinity - true

Array
jei tuscias - true
jei ne tuscias - true

Object:
jei tuscias - true
jei ne tuscias - true

Undefined - false
null - false


*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;
console.log(isSunShining);

console.log('Kaip nenaudoti:', true + true);
console.log('Kaip nenaudoti:', true * false);

console.log('---------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


const isBeautiful = true;
const isYoung = true;
const isRich = true;
const willIGoTo = isBeautiful && isRich && isYoung;
console.log('>>>>', willIGoTo);

const isBeautiful1 = true;
const isYoung1 = false;
const isRich1 = false;
const willIGoTo1 = isBeautiful1 || isRich1 || isYoung1;
console.log('>>>>', willIGoTo1);


console.clear();
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.clear();
console.log(true && true || true);
console.log(true && true || false);
console.log(true && false || true);
console.log(true && false || false);

console.log('---------------');
// pirmenybe and'ui
console.log(true || true && false);



console.log('---------------');
console.log(!true);
console.log(!false);
console.log(!!false);  // daugiau nei 2 sauktukai - nerasyti


console.log('---------------');





// namu darbas israsyti visas imanomas kombinacijas su keturiais operatoriais &&  ir ||  (2**7 =  128 kombinacijos)

console.log('-------1--------');

console.log(true && true && true && true);
console.log(false && true && true && true);
console.log(true && false && true && true);
console.log(true && true && false && true);
console.log(true && true && true && false);
console.log(true && false && false && true);
console.log(true && false && false && false);
console.log(false && false && false && false);
console.log(false && true && false && false);
console.log(false && false && true && false);
console.log(false && false && false && true);
console.log(false && false && true && true);
console.log(false && false && false && true);
console.log(true && true && false && false);
console.log(false && true && false && true);
console.log(false && true && true && false);
console.log('-------2--------');
console.log(true || true || true || true);
console.log(false || true || true || true);
console.log(false || false || true || true);
console.log(false || false || false || true);
console.log(false || false || false || false);
console.log(true || false || true || true);
console.log(true || true || false || true);
console.log(true || true || true || false);
console.log(false || false || true || true);
console.log(true || false || false || true);
console.log(true || true || false || false);
console.log(true || false || false || false);
console.log(false || false || true || false);
console.log(false || true || false || true);
console.log(false || true || true || false);
console.log(false || true || false || false);
console.log('-------3--------');
console.log(true || true && true || true);
console.log(false || true && true || true);
console.log(true || false && true || true);
console.log(true || true && true || false);
console.log(true || false && false || true);
console.log(true || false && false || false);
console.log(false || false && false || false);
console.log(true || false && false || true);
console.log(true || true && false || false);
console.log(false || false && true || true);
console.log(false || false && false || true);
console.log(false || true && false || true);
console.log(false || true && true || false);
console.log(true || false && true || false);
console.log(false || true && false || false);
console.log(true || false && false || false);
console.log('------4---------');
console.log(true && true && true || true);
console.log(false && true && true || true);
console.log(false && false && true || true);
console.log(false && false && false || true);
console.log(false && false && false || false);
console.log(true && false && true || true);
console.log(true && true && false || true);
console.log(true && true && true || false);
console.log(true && false && false || true);
console.log(true && false && false || false);
console.log(false && true && false || true);
console.log(false && true && true || false);
console.log(false && false && true || false);
console.log(false && true && false || true);
console.log(false && true && false || false);
console.log(true && true && false || false);
console.log('------5---------');
console.log(true || true && true && true);
console.log(false || true && true && true);
console.log(false || false && true && true);
console.log(false || false && false && true);
console.log(false || false && false && false);
console.log(true || false && false && true);
console.log(false || true && true && false);
console.log(true || true && false && false);
console.log(false || true && false && false);
console.log(false || true && false && true);
console.log(false || true && true && false);
console.log(false || false && true && false);
console.log(false || true && false && true);
console.log(true || true && true && false);
console.log(true || false && false && false);
console.log(true || false && true && true);
console.log('------6---------');
console.log(true || true || true && true);
console.log(false || true || true && true);
console.log(false || false || true && true);
console.log(false || false || false && true);
console.log(false || false || false && false);
console.log(false || true || false && true);
console.log(true || false || true && true);
console.log(true || true || false && true);
console.log(true || true || true && false);
console.log(false || true || true && false);
console.log(true || true || false && false);
console.log(false || false || true && false);
console.log(true || false || false && false);
console.log(false || true || false && false);
console.log(true || false || false && true);
console.log(true || false || true && false);
console.log('------7---------');
console.log(true && true || true || true);
console.log(false && true || true || true);
console.log(false && false || true || true);
console.log(false && false || false || true);
console.log(false && false || false || false);
console.log(false && true || false || true);
console.log(true && false || true || true);
console.log(true && true || false || true);
console.log(true && true || true || false);
console.log(false && true || true || false);
console.log(true && true || false || false);
console.log(false && false || true || false);
console.log(true && false || false || false);
console.log(true && false || false || true);
console.log(false && true || false || false);
console.log(true && false || true || false);
console.log('------8---------');
console.log(true && true || true && true);
console.log(false && true || true && true);
console.log(false && false || true && true);
console.log(false && false || false && true);
console.log(false && false || false && false);
console.log(false && true || false && true);
console.log(true && false || true && true);
console.log(true && true || false && true);
console.log(true && true || true && false);
console.log(false && true || true && false);
console.log(true && true || false && false);
console.log(false && false || true && false);
console.log(true && false || false && false);
console.log(false && true || false && false);
console.log(true && false || false && true);
console.log(true && false || true && false);
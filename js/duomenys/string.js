/*

STRING - tekstas, tekstiniu simboliu grandinele

iniciavimas: ' (vienguba), " (dviguba)



*/


const name = 'Jonas';
console.log(name);

const name2 = "Maryte";
console.log(name2);

const sakinys = 'Labas rytas, Lietuva!';
console.log(sakinys);


const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

const kabutes2 = 'Dvyguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);


// escaping

const kabutes12 = "Vienguba (') ir " +  'dvyguba (") kabutes.'
console.log(kabutes12);

const kabutes12_1 = 'Vienguba (\') ir dvyguba (") kabutes.'
console.log(kabutes12_1);

const kabutes12_2 = "Vienguba (') ir dvyguba (\") kabutes."
console.log(kabutes12_2);

const kabutes12_3 = 'Vienguba (\') ir dvyguba (\") kabutes.'
console.log(kabutes12_3);

const kabutes12_4 = "Vienguba (\') ir dvyguba (\") kabutes."
console.log(kabutes12_4);

console.clear();




/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigine turinys: 100;
*/

const pinTurinys = 'Pinigines turinys:';
const pinPapildyta = 'Pinigine papildyta:';
const papildymas1 = 10;
const papildymas2 = 90;

let pinigai = 0;

console.log(pinTurinys, pinigai);
pinigai = pinigai + papildymas1;
console.log(pinPapildyta, papildymas1);
console.log(pinTurinys, pinigai);
pinigai = pinigai + papildymas2;
console.log(pinPapildyta, papildymas2);
console.log(pinTurinys, pinigai);



// Spread operatorius
// Destrukturizavimas

// value by reference
const a = [1, 2, 3];
const b = a;

console.log(a);
console.log(b);

a[0] = 44;
console.log(a);
console.log(b);


b[2] = 777;
console.log(a);
console.log(b);

console.log('--------')

// ...Spread array
const e = [1, 2, 3];
const f = [...e];
console.log(e, f);

e[0] = 111;
console.log(e, f);

f[0] = 999;
console.log(e, f);



const g = [0, ...e, 4];
console.log(g);

const h = [...e, ...e, 888]
console.log(h);


console.log('--------')


// ...Spread object

const obj1 = {name: 'Jonas', age: 99};
const obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj1.name = 'Maryte';
console.log(obj1);
console.log(obj2);

obj2.age = 88;
console.log(obj1);
console.log(obj2);


const obj3 = {brand: 'audi', model: '80'};
const obj4 = {...obj3};
console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';
console.log(obj3);
console.log(obj4);

obj4.model = 's40';
console.log(obj3);
console.log(obj4);


console.log('--------')


const person = {
    name: 'Petras',
    age: 77,
}

const address = {
    city: 'Miestas',
    street: 'Gatve',
    number: 45,
}


const fullDetails = {
    ...person, 
    ...address,
    id: 111,
    phone: 86432,
    name: 'Ona',
    number: 123,

};
console.log(fullDetails);
console.log(fullDetails.name);



console.log('--------')


const str = 'abc';
const arr = ['a', 'b', 'c'];
const objek = {0: 'a', 1: 'b', 2: 'c'};

console.log(str[0], arr[0], objek[0]);


const k = [1, 2, 3];
const l = {name: 'Ona', age: 66};

// const o = [...k, ...l];  i masyva neleidzia isspredinti
const p = {...k, ...l};
console.log(p);
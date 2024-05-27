

// Destrukturizavimas
// gimininga "siela" - spread

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(first);
console.log(second);
console.log(rest);


const b = [10, 2];
const first2 = b[0];
const second2 = b[1];
const rest2 = b.slice(2);

console.log(first2);
console.log(second2);
console.log(rest2);


console.log('--------')

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
const [word1, word2, ...restDict] = dict;

console.log(word1);
console.log(word2);
console.log(restDict);


console.log('--------')

function giveMeTwo () {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);

    return [a, b];
}


const res1 = giveMeTwo();
// const n1 = res1[0];
// const n2 = res1[1];

const[n1, n2] = res1;
console.log(res1, n1 + n2);

const[n3, n4] = giveMeTwo();
console.log(n3 + n4);


console.log('--------')

const person = {
    name: 'Jonas', 
    age: 99, 
    isMarried: true,
    color: 'red',
};

const userName = person.name;

console.log(userName);


const {name, age, ...restDetails} = person;
console.log(name);
console.log(age);
console.log(restDetails);


console.log('--------')

function food() {
    const list = [
        {title: 'cepelinai', count: 2},
        {title: 'kotletai', count: 1},
        {title: 'salotos', count: 5},
    ];
    return list[Math.floor(Math.random() * list.length)];
}
console.log(food());


// const randomFood1 = food();
// const title = randomFood1.name;
// const count = randomFood1.count;

const {title, count} = food();
const sentence1 = `Valgysi: ${title}; Kiekis: ${count}`;
console.log(sentence1);


const f2 = food();
const title2 = f2.title;
const count2 = f2.count;
const sentence2 = `Valgysi: ${title2}; Kiekis: ${count2}`;
console.log(sentence2);


const {title: pavadinimas3, count: kiekis3} = food();
const sentence3 = `Valgysi: ${pavadinimas3}; Kiekis: ${kiekis3}`;
console.log(sentence3);


console.clear();

function drinks(...list) {
    return `Gerimu kiekis: ${list.length}.`

}
console.log(drinks('a', 'b', 'c'));


function iLike(name, ...list) {
    return `${name} megsta ${list.length} spalvas.`;

}
console.log(iLike('Jonas', 'red', 'blue'));


const marks = [10, 2, 8, 4, 6];
console.log(Math.max(...marks));
console.log(Math.min(...marks));
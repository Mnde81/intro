

//   [0..1)

function moneta() {
    if (Math.random() < 0.5) {
        return 'Skaicius';
    } else {
        return 'Herbas';

    }
        
    
}
const metimuKiekis = 100;
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++
    }
    console.log(iskrito);
}

console.log('HERBU KIEKIS:', herbai);
console.log('SKAICIU KIEKIS:', metimuKiekis - herbai);



const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm'];
const step = 1 / 7;

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);
console.log(week[index]);
}

// Man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai.

for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);

}

// ND
// Man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai.

for (let i = 0; i < 594; i++) {
    console.log(Math.floor(Math.random() * 594) + 1);
}
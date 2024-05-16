

/*
As noriu, pamatyti visas galima laiko/laikrodzio kombinacijas
valandos tikslumu.
Intervalas yra nuo 1 iki 12.
Pateikimo formatas: 1:00, 2:00
1:00
1:15
1:30
1:45
2:00
2:15
2:30
2:45
...
4:45
*/

// for (let val = 1; val <= 4; val++) {
//     console.log('--------');
//     let min = 0;

//     console.log(val + ':' + min);
//     min += 15;

//     console.log(val + ':' + min);
//     min += 15;

//     console.log(val + ':' + min);
//     min += 15;

//     console.log(val + ':' + min);
//     min += 15;
// }

// for (let val = 15; val <= 17; val++) {
//     console.log('--------');
//     let min = 0;

//     for (let i = 0; i < 6; i++) {
//         if (min < 10) {
//             console.log(val + ':0' + min);
//         } else {
//             console.log(val + ':' + min);
//         }
//         min += 10;
//     }
// }

for (let val = 0; val < 24; val++) {
    for (let min = 0; min < 60; min++) {
        for (let sek = 0; sek < 60; sek++) {
            console.log(val + ':' + min + ':' + sek);
        }
    }
}
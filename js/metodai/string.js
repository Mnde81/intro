

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/

const word = 'Labas rytas, Lietuva!';

console.log(word);
console.log('Labas rytas, Lietuva!');

console.log(word[0]);
console.log('Labas rytas, Lietuva!'[0]);

console.log(word.charAt(0));
console.log('Labas rytas, Lietuva!'.charAt(0));

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));
console.log(word.charCodeAt(4));

console.log('Labas'.concat('rytas'));
console.log('Labas'.concat('rytas', 'Lietuva'));
console.log('Labas'.concat('rytas').concat('Lietuva'));

console.log('-------------------');
console.log('endsWith()');
console.log('Labas'.endsWith('x'));
console.log('Labas'.endsWith('gg'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith('as'));
console.log('Labas'.endsWith('bas'));
console.log('Labas'.endsWith('abas'));
console.log('Labas'.endsWith('Labas'));
console.log('Labas'.endsWith('labas'));

console.log('-------------------');
console.log('startsWith()');
console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('gg'));
console.log('Labas'.startsWith('ggaafsghdn'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));
console.log('Labas'.startsWith('Laba'));
console.log('Labas'.startsWith('Labas'));

console.log('-------------------');
console.log('includes()');
console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('gg'));
console.log('Pomidoras'.includes('doras'));
console.log('Pomidoras'.includes('Pomi'));
console.log('Pomidoras'.includes('ido'));
console.log('Pomidoras'.includes('Pomidoras'));
console.log('Pomidoras'.includes('oda'));
console.log('Pomidoras'.includes('as'));
console.log('Pomidoras'.includes('sa'));

console.log('-------------------');
console.log('indexOf()');
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('gg'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('i'));
console.log('Pomidoras'.indexOf('Pom'));
console.log('Pomidoras'.indexOf('omi'));
console.log('Pomidoras'.indexOf('mido'));
console.log('Pomidoras'.indexOf('P', 1));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 2));

console.log('-------------------');
console.log('repeat()');
console.log('A'.repeat(10));
console.log('Ū'.repeat(20));
console.log('Labas'.repeat(5));
console.log('Labas'.repeat(1));
console.log('Labas'.repeat(NaN));
console.log('Labas'.repeat(0));
console.log('Labas'.repeat(3.14));
console.log('Labas'.repeat(3.99999));

console.log('-------------------');
console.log('replace()');
console.log('Pomidoras'.replace('P', 'B'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '-x-'));
console.log('Pomidoras'.replace('o', '_').replace('o', '_'));
console.log('Pomidoras'.replace('mido', 'ukuo'));
console.log('Pomidoras'.replace('AAAAA', 'BBBBBB'));

console.log('-------------------');
console.log('replaceAll()');
console.log('Pomidoras'.replaceAll('o', '_'));
console.log('Aaaaaaaaa'.replaceAll('a', 'c'));

console.log('-------------------');
console.log('slice()');
console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
console.log('Pyragelis'.slice(2));

const p = 'Vasara';

console.log(p.slice(-3));
console.log(p.slice(p.length - 3));

//           012345678
console.log('Pyragelis'.slice(-100));
console.log('Pyragelis'.slice(2, 4));
console.log('Pyragelis'.slice(2, 5));
console.log('Pyragelis'.slice(2, 6));

const dalis = 'Pyragelis'.slice(2, 100);
console.log(dalis, dalis.length);

console.log('25462548624862'.slice(2, 6));

// console.log('fsg'.split());
// console.log('fsg'.toLowerCase());
// console.log('fsg'.toUpperCase());
// console.log('fsg'.trim());
// console.log('fsg'.trimEnd());
// console.log('fsg'.trimStart());

// console.clear();
console.log('-------------------');
console.log('split()');

const sakinys = 'Labas rytas, Lietuva!';
const zodziai = sakinys.split(' ');
console.log(zodziai);
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);

const dalys = 'asd'.split('asdd');
console.log(dalys);

// sakinys => tuscias / ne tuscias
// split => tuscias / ne tuscias
// split => (ne)buvo kur kirpti

console.log('-------------------');
console.log('toLowerCase() toUpperCase()');
console.log('Pomidoras'.toLowerCase());
console.log('Pomidoras'.toUpperCase());

console.log('-------------------');
console.log('trim()');
console.log('"' + 'Pomidoras'.trim() + '"');
console.log('"' + 'Labas rytas'.trim() + '"');
console.log('"' + 'Labas rytas    '.trim() + '"');
console.log('"' + '    Labas rytas'.trim() + '"');
console.log('"' + '    Labas rytas    '.trim() + '"');
console.log('"' + '    Labas     rytas    '.trim() + '"');

const username = ' vardenis        '.trim();

// console.log('fsg'.trimEnd());
// console.log('fsg'.trimStart());

// console.clear();

const text = 'Labas rytas, Lietuva! Kaip tu, mieloji, ten laikais?';

// const dictionary = ['Labas', 'rytas', 'Lietuva'];

const dictionary = text
    .replaceAll(',', '')
    .replaceAll('!', '')
    .replaceAll('?', '')
    .split(' ');
console.log(dictionary);
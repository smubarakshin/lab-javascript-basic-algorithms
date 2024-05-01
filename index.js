// Iteration 1: Names and Input
const hacker1 = 'shamil';
const hacker2 = 'Jamal'; 

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length} characters`) : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
if(hacker1.length == hacker2.length) {console.log(`ow, you both have equally long names, ${hacker1.length} characters!`)}

// Iteration 3: Loops
let array = [];

for (i=0; i < hacker2.length; i++) {
    array.push(hacker2[i])
}

const newName = array;
const isCapital = newName.join(' ').toUpperCase();

const reverse = (newName.reverse()).join('')


console.log(isCapital);
console.log(reverse)

const sorted = [hacker1.toLocaleLowerCase(),hacker2.toLocaleLowerCase()].sort()

console.log(sorted)

if (sorted[0] == sorted[1]) console.log(`What?! You both have the same name?`)
if (sorted[0] == hacker2 && hacker1 !== hacker2) console.log(`Yo, the navigator goes first, definitely.`)
if (sorted[0] == hacker1 && hacker1 !== hacker2) console.log(`The driver's name goes first.`)



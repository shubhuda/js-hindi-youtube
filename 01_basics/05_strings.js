/******** Strings are primitive data types stored in stack memory */

const name = 'shubham'; // string literal method
const repo = 10;
console.log(name+repo); // old and bad syntax
console.log(`my name is ${name} and my repo is ${repo}`) // string interpolation use this only for conactatenation // backtick method good for interpolating expressions

const id = 'Shubham';
const gameId = new String('monopoly'); // string constructor method to create string
console.log(id); // 'Shubham' : typeof gives string
console.log(gameId); // String {'monopoly'} : typeof gives object

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

// ++++++++++++++++     charAt() method
const checkCharAt = 'Shubham'; // length:7
//returns a new string at the given index.
console.log(checkCharAt.charAt(2)); // 'u'
console.log(checkCharAt.charAt(7)); // '' (empty string)

// ++++++++++++++++     includes() method
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.includes('fox')) // true
console.log(sentence.includes('FOX')) // false
console.log(sentence.includes('')) // true

// ++++++++++++++++     indexOf() method
const marvel_heroes = ['thor', 'ironman', 'spiderman'];
const dc_heroes = ['superman', 'flash', 'batman'];
/* marvel_heroes.push(dc_heroes) //returns the new length of an array
console.log(marvel_heroes.push(dc_heroes)); // 4
console.log('marvel_heroes', marvel_heroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] */

/* marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes.concat(dc_heroes));  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] returns the new array witout modifying existing array 
console.log('marvel_heroes', marvel_heroes); // [ 'thor', 'ironman', 'spiderman' ] */

/* const all_new_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman' ] */

const another_array = [1,2,3,[4,5],[5,6,[1,2,3]]];
// const usable_array = another_array.flat(2);// [1, 2, 3, 4, 5, 5, 6, 1, 2, 3]
const usable_array = another_array.flat(Infinity); // [1, 2, 3, 4, 5, 5, 6, 1, 2, 3]
console.log(usable_array);

console.log(Array.isArray('Hitesh')) //false
console.log(Array.from('Hitesh')); // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Hitesh"})) // [] interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300; 
console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]
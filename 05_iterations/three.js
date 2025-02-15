/** for..of loop */

/** 
 * The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
 * Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections)
 */
const fruits = ['orange','apple','guava','litchi']; //Array
for (const fruit of fruits) {
    console.log(`I got this ${fruit}`);
}

const greeting = 'Hello! world'; //string
for (const greet of greeting) {
    console.log(greet);
}

/*************************** Map *******************************************************/

/** 
 * The Map object holds key-value pairs and remembers the original insertion order of the keys. 
 * Any value (both objects and primitive values) may be used as either a key or a value. 
 **/
const map = new Map()
map.set('IN','India');
map.set('USA','United states of america');
map.set('FRA','France');
console.log('map1---->', map);
map.set('IN','India'); // A key in the Map may only occur once; it is unique in the Map's collection. thats why even if we add 'IN'again it ignores that in that order
console.log('map2---->', map);

for (const mapItem of map) {
    console.log(mapItem); // [ 'IN', 'India' ]  [ 'USA', 'United states of america' ]  [ 'FRA', 'France' ]
}
for (const [key, value] of map) {
    console.log(`${key}:- ${value}`);
}


/** Now can we  run for...of loop on object */
const myObject = {
    'name': 'shubham',
    age: 32,
}
/* for (const element of myObject) {
    console.log('forof for object', element); // TypeError: myObject is not iterable
} */
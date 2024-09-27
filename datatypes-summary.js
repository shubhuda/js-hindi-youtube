// IS javascript dynamically typed language or statically typed language

// data ko do tarike se categorise kiya gya hai ki data kaise memory mai store hota hai and hum kaise access karte hain use

/********************* Primitive data types *********************/ 
// 7types: String, Number, Boolean, null, undefined, Symbol, BigInt
//  they are call by value: matlab jab hum inko kahin se kahin copy karte hain to inki 
// original memory ka reference nahi diya jata balki value ko copy karke diya jata hai and jo bhi changes hote hain uski copy mai hote hain

let outsideTemp = null; // Null datatype  // typeof: object
const isLoggedIn = true; // Boolean // typeof: boolean
const score = 100;  //Number // typeof: number
let name; // typeof: undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId)

const bigNumber = 868685781532786755755757456776474646464n;

/********************* Non Primitive OR Reference data types *********************/ 
// Array, Objects, Functions
const heroes = ['shaktiman', 'nagraaj','doga'];
let myObj = {
    name: 'shubham',
    age: 31,
}
const myFunc = function(){
    console.log('hello world')
}
console.log(typeof heroes); // object
console.log(typeof myObj); // object
console.log(typeof myFunc) // function

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

//++++++++++++++++++++++++++++ MEMORY
// Stack memory: primitive data types
// Heap mempry: non-primitive data types or reference data types
let userName = 'shubham';
let anotherName = 'Rishab';
console.log(userName); // 'shubham'
console.log(anotherName);// 'Rishab'

anotherName = userName;
console.log(userName); // 'shubham'
console.log(anotherName);// 'shubham'

userName = 'prateek';
console.log(userName); // 'prateek'
console.log(anotherName);// 'shubham'


let myFirstObj = {
    id: 1,
    name: 'shubham'
}
let mySecondObj = myFirstObj;
console.log(myFirstObj); // {id: 1, name: 'shubham'}
console.log(mySecondObj); // {id: 1, name: 'shubham'}

mySecondObj.name = 'Hitesh'; 
console.log(myFirstObj); // {id: 1, name: 'Hitesh'}
console.log(mySecondObj); // {id: 1, name: 'Hitesh'}

/**
 * stack memory mai variable, location ka name hua and jab primitive data types define kiya to repsective location mai uski value store hui
 * and jab copy kiya usko dusre variable mai to wo new variable ki location mai value copy hogyi
 * whereas jab non-primitive data types define to stack memory mai value ki jagah heapy memory ki location reference save hua jahan uski value hai
 * to jab non primitive data type ko copy kiya to actually location refrence copy hua na ki value to dono at end same location ko point kar rahe
 * islye agar ek jagah change karengey to dono jagah change hoga
 */
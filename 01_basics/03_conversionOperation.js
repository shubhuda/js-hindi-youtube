let score = 33;

// console.log(typeof score); // number
// console.log(typeof(score)); // number

let newscore =  "33";
let valueInNumber = Number(newscore);
// console.log(typeof newscore); // string
// console.log(typeof valueInNumber); // number

let newScoreOne =  "33abc";
let valueInNumberOne = Number(newScoreOne);
//console.log( typeof valueInNumberOne) //number
//console.log(valueInNumberOne); // NaN

let loggedIn = "";
console.log(Boolean(loggedIn));
/** Conversion methods */
// String()
// Number()
// Boolean()

// ******************* OPERATIONS ******************* //

console.log("1"+2); // first is string so gives string
console.log(1+"2"); //?????
console.log("1"+2+2);//first is string so gives string
console.log(1+2+"2"); 

//prefix and postfix operator study from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let gameCounter = 100;
//gameCounter++
++gameCounter;
console.log(gameCounter);


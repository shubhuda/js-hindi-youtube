const user = {
    username: 'Shubham',
    price: '$99',

    welcomeMessage : function(){
        // console.log(`${username}, welcome to website`); // ReferenceError: username is not defined
        console.log(`${this.username}, welcome to website`);
        // console.log('inner this', this);
    }
}

user.welcomeMessage(); // Shubham, welcome to website
// console.log('outer this', this);   // {}
// but the same this in browser console gives window object, in node env its giving empty object

/* user.username = 'Sam';
user.welcomeMessage() //Sam, welcome to website */

function chai(){
    let username = 'hitesh'
    console.log(this.username); // undefined -> we are not able to use this keyword inside function here
    console.log(this);
}
chai() // above this console gives below object in node env
/* {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    crypto: [Getter]
  } */

 const chaiTwo = function(){
    let username = 'hitesh'
    console.log(this.username); // undefined -> we are not able to use this keyword inside function here
    console.log(this);
}
chaiTwo();

const chaiThree = () => {
    let username = 'hitesh'
    console.log('in third fn',this.username); // undefined -> we are not able to use this keyword inside function here
    console.log(this);
}
chaiThree();

/** Way of writing arrow functions */

const addNumOne = (num1, num2) => {
    return num1 + num2;
}
const addNumTwo= (num1, num2) => num1 + num2;

const addNumThree= (num1, num2) => (num1 + num2);

const returnObjectImplicit = () => ({name: 'shubham', price: '$55'})
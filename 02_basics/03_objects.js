// Objects do tarike se banaye jaate hain --> literal se , constructor se
// constructor se jab banate hain to wo singleton object banta hai i.e. waise bs ek hi object ho sakta hai

// Singleton
// Object.create();

// Object literals

const mySym = Symbol('Key1');
const jsUser = {
    name: 'Shubham', // isko jo key name hai wo as a string hi manta hai browser "name" but hume explicitly likhne ki zaroorat nahi
    'fullName': 'Shubham Saxena',
    [mySym]: 'myKey1',
    age: 18,
    location: 'jaipur',
    isloggedIn : false,
    lastLoggedInDays: ['Mon','sun'],
};

console.log(jsUser.location);
//console.log(jsUser[location]); //ReferenceError: location is not defined
 console.log(jsUser['location']);
 console.log(jsUser['fullName']) // we can only access fullName by square brackets not by dot
 console.log(jsUser[mySym]);

 jsUser.age = 19;
 console.log(jsUser.age);

 // to lock an object so that no one change it
 // Object.freeze(jsUser)
 jsUser.age = 120;
 console.log(jsUser.age);
 console.log(jsUser);

 jsUser.greeting = function(){
    console.log('Hello JS user');
 }
 jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // same object ko reference karne ke liye 'this' ka use kiya hai
 }
 console.log(jsUser.greeting); // [Function (anonymous)] // function ka return nahi aya hai bs refernce aya hai
 console.log(jsUser.greetingTwo()); // Hello JS user, Shubham


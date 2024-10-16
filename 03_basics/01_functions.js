/* console.log('H');
console.log('I')
console.log('T')
console.log('E')
console.log('S')
console.log('H') */

// To do the above work we can create function
function sayMyName(){
    console.log('H');
    console.log('I');
    console.log('T');
    console.log('E');
    console.log('S');
    console.log('H');
}

// If we just write sayMyName it will be called as Reference
sayMyName; // reference 
sayMyName(); // Execution

// SCENARIO1
function addTwoNumbers(num1,num2){ // num1 and num2 are parameteres
    console.log(num1+num2);
}
const result = addTwoNumbers(3,4);  //3 and 4 are arguments
console.log(result); // giving  undefined because our function is not returning anything

// SCENARIO2
function addNumbers(num1,num2){ // num1 and num2 are parameteres
    return num1+num2
}
const result1 = addNumbers(3,5); 
console.log(result1);

// SCENARIO3
function loggedInMessage(username){
    return `${username} just logged in`;
}
console.log(loggedInMessage('shubham')); // shubham just logged in
console.log(loggedInMessage()); // undefined just logged in

const calculateCartPrice = (...num) => { //rest operator
    return num;
}
console.log(calculateCartPrice(200,400,500)); // [200,400,500]

const handleObject = (anyobject) => { // How to pass object as an argument
    return `My user name is ${anyobject.username} and price is ${anyobject.price}`;
}
console.log(handleObject({
    username: 'shubham',
    price: '$99'
}))
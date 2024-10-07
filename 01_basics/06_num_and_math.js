const score = 400;
console.log(typeof score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ MATHS +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.random()) // gives between 0 and 1 it can be 0.004
console.log(Math.random()*10) // gives a whole number between 0 and 10  // W = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10……}  for 0.004 it will give 0.04 
console.log(Math.floor(Math.random()*10)) //  for 0.004 it will give 0
console.log(Math.floor(Math.random()*10) +1 )  //  for 0.004 it will give 1 so basically adding 1 gives numbers between 1 and 10
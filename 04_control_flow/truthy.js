const userEmail = 'xyz@gmail.com'; // truthy value 
// const userEmail = ''; // falsy value 
// const userEmail = ' '; // truthy value 
// const userEmail = []; // truthy value 
if (userEmail) {
    console.log('user got an email')
}else {
    console.log('user dont have an email');
}

// Falsy values: false, 0, -0 BigInt 0n, '',null, undefined
// other than false values all are truthy values like => '0', 'false',  [], {}. function(){}

/** null coalescing operator (??) null, undefined */
/**
 * The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
 * and otherwise returns its left-hand side operand.
 */
let val1 ;
// val1 = 5 ?? 10;
// val1 = null ?? 20;
val1 = undefined ?? 15;
console.log('val1 in null coalesing operator ---->', val1);

/** Ternary operator  short syntax for if else */

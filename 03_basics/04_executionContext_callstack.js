
// Everything executes in thread way and Jaavscript is single threaded

/**
 *  1. In JS we have two things a.) execution context b.) call stack
 *  2. Execution contexts ---> a.) Global execution context b.) function execution context
 *  3. When JS files comes two things happen
 *      a. Memory creation phase OR creation phase: Isme sirf variables wagera jo declare hue hain unko memory allocate hoti
 *      b. Execution phase: baki sab execution and value assignment iss phase mai hota
 *  4.
 */

let val1 = 5;
let val2 = 10;
function addNum(num1, num2){ // iska alag execution context banega jisme fr se memory phase and execution phase hogya
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10,2)

// Call stack

/**
 * stack mai sabse pehle global execution context hai phir jo bhi functions execute hote hain wo usme jate hain then delete ho jate hai
 * Agar ef unc
 * 
 */

function one(){
    console.log('one')
    two()
    three()
}
function two(){
    console.log('two')
}
function three(){
    console.log('three')
}
one();
// call stack mai se pehle three bahar jayega fr two fr one LIFO (last in first out wala concept)
// https://excalidraw.com/#json=e88flbZre1NP6TInFP4Oo,_h9Yz92A8abumEm5-S03QA
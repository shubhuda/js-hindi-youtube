// +++++++++++++++  Understanding var, let and const behaviour in scope level context
var c = 300;

if (true) { // local scope started
    let a = 10;
    const b = 20;
    var c = 30;
    console.log('a inside : ',a ); // 10
    console.log('b inside : ',b ); //20
    console.log('c inside : ',c ); //30
} // local scope ended
// console.log('a outside : ',a );  //ReferenceError: a is not defined
// console.log('b outside : ',b ); // ReferenceError: b is not defined
// console.log('c outside : ',c ); //30 ----> Big mistake as inside local scope c overided global scope c because we have declared it by var
// var ---> global scope , let const --> block scope


// +++++++++++++++  Understanding function in scope level context

function one(){ // function one scope started
    const username = ' shubham';
    function two(){ // function two scope started
        const website = 'youtube';
        console.log(username); 
    } // function two scope ended

    /* console.log(website); // ReferenceError: website is not defined
    two() // so it will not execute */

    two()
} // function one scope ended
one(); // shubham

// +++++++ Interesting behaviour of javascript : hoisting

addone(5) // we can call here also
function addone(num){
    return num + 1;
}
// addone(5)
// console.log(addone(5)); 6

// addtwo(5) cannot access addtwo before declaration
const addtwo = function(num){
    return num + 2;
}
addtwo(5)
// console.log(addtwo(5)); 7



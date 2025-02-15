// for loop
/**
 * In for loop till (let index = 0; index < array.length;) its just like if(){} with ek variable defined and it will go check condition and execute piece of code
 * but it will do only once to make it do multiple time we are writing loop with `index++` to change the condition
 */

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // STEP1: variable declare and define
    // STEP2: check condition go inside if true
    // STEP3: execute code
    // STEP4: just before coming out of the loop run index++ to change the condition
    // STEP5: come out of the loop and again repeat from step1
} */

/** Print Table from 1 to 10 */
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);    
    }
}

/**  break and continue in loops    */
// The break statement is used to jump out of a loop. It can be used to “jump out” of a switch() statement. It breaks the loop and continues executing the code after the loop.
// The continue statement “jumps over” one iteration in the loop. It breaks iteration in the loop and continues executing the next iteration in the loop.

// stop the loop when score matches 5
for (let score = 0; score < 6; score++) {
    if (score == 5) {
        console.log('score reached 5 so loop  discontinued');
        break;
    }
    console.log(`Score is ${score}`);
}

// whenever point is even print it is even point
for (let point = 1; point <= 10; point++) {
    if( point%2 == 0 ){
        console.log('your point is even');
        continue;
    }
    console.log(`Your point is ${point}`) // This code will execute in iteration of loop but when we write continue it does not execute this code and jumps to next iteration
}
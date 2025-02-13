const temperature = 52;
/* 
if(temperature==41){
    console.log('Temperature is less than 50')
} else {
    console.log('Temperature is greater than 50')
} */
// <, >, <=, >=, ==, !=, ===, !==

const score = 200;
if (score >100) {
    const power = 'fly';
    console.log(`User power is ${power}`);
}
//console.log(`User power is ${power}`); 
// This will give ReferenceError: power is not defined because power is defined and declared inside local scope by const keyword but if we have used var keyword it will not give error but thats bad method

/** Shorthand way of writing if */
const balance = 1000;
if (balance >500) console.log('balance is greater than 500'); // no curly braces but here its called as an implicit scope
// if (balance >500) console.log('Test1'), console.log('test2');  Bad way of writing never use

const money = 900;
if (money<500) {
    console.log('Money is less than 500')
}else if (money <750) {
    console.log('Money is less than 750')
}else if (money <1000) {
    console.log('Money is less than 1000')
}else{
    console.log('Money is equal or greater than 1000')
}
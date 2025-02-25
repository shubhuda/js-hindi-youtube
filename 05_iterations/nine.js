/*************************** reduce() ******************************/

/**
 * The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, 
 * passing in the return value from the calculation on the preceding element. 
 * The final result of running the reducer across all elements of the array is a single value.
 */

/**
 * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. 
 * Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
 */

const myNums = [1,2,3,4];
const sumOfNums = myNums.reduce(function (acc,currValue) {
    console.log(`acc: ${acc} and currValue: ${currValue}`);
    return acc + currValue;
}) // run with and without initial value
console.log(sumOfNums);

const cart = [
    {
        course: 'js course',
        price: 999,
    },
    {
        course: 'ruby course',
        price: 1999,
    },
    {
        course: 'python course',
        price: 3999,
    },
    {
        course: 'mobile dev course',
        price: 12999,
    },
]
// find out how much price user has to pay acc to the items available in his cart???

const totalPricetoPay = cart.reduce((acc,currCourse) => acc + currCourse.price, 0);
console.log(`totalPricetoPay: ${totalPricetoPay}`);

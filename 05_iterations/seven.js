/*************************************** map() ****************************/

const myNums = [1,2,3,4,5,6,7,8,9,10];
//const newNums = myNums.map(num => num+10) // It returns value unlike forEach() 
console.log('myNums', myNums)
// console.log('newNums',newNums);
// chaining can be applied on map not on forEach
const newNums = myNums.map(num => num*10).map(newNum => newNum+1).filter(x => x>40);
console.log('newNums',newNums);


// We have studied forEach() loop for an array in last five.js but does it returns anything??????

let coding =[1, 2, 3, 4, 5, 6];
// A  callback function inside forEach() is to execute for each element in the array. Its return value is discarded. 
const values = coding.forEach(item => {
   // console.log(item);
   return item+1; // this does not return even though if we explicitly write return
})

console.log('return value for forEach loop--->', values);
console.log('original array in forEach loop--->',coding);

// Imppp =>   forEach() always returns undefined see above values console is giving undefined also otiginal arry is not changing by just doing something on item we need to use arr argument  of forEach

/*************************************  filter() on array **********************************/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* const newNums = myNums.filter(num => num>4);  // It return new array
console.log(newNums); */

// how to achieve smae thing by forEach()
const newNums = []
myNums.forEach((num)=> {
   if(num>4){
      newNums.push(num);
   }
});
console.log(newNums);



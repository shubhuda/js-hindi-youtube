
const myArr = ['1','2',3,4,true, {name:'shubham'}];
const myHeroes = ['shaktiman','naagraj'];
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2);


// Array are reference data types and basically objects in JS
// Arrays are resizable matlab ek baar declare kar diya to aisa nahi ki aur elements add nahi kar saktey
// array elements ko koi bhi random ya arbitrary string se acces nahi kar skte hum usko  nonnegative integers (or their respective string form) as indexes se hi access kar skte like myHeroes[2] is same as myHeroes['2']
// JavaScript array-copy operations create shallow copies not deep copies

// +++++ Array methods
const myArr3 = ['1','2',3,4,true, {name:'shubham'}];
myArr3.push(6); // adds the element at the end of an array
myArr3.pop(); // removes the element from an end
myArr3.unshift(9); // adds the element at the start of an array // [9, '1', '2', 3, 4, true, {name:'shubham'}];
// people say unshift is bad as it altered every element position so if we have 10000 elements it will take a load on computer
// but its ok if we relaly need we can use it and optimize it later
myArr3.shift();
console.log(myArr3);
console.log(myArr3.includes(3)); //true
console.log(myArr3.indexOf(0)); // -1
console.log(myArr3.indexOf(3)); // 2
console.log('join--->', myArr3.join()) // 1,2,3,4,true,[object Object]
console.log('typeof after joining--->', typeof  myArr3.join() ); // string

// +++++++++++++++ Slice and Splice +++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* const fruits = ['Apple','mango','orange','pineapple','guava','banana'];
console.log('A--->', fruits);
const slicedFruits  = fruits.slice(1,3);
console.log('sliced Array', slicedFruits);
console.log('B--->', fruits); */

const fruits = ['Apple','mango','orange','pineapple','guava','banana'];
console.log('A--->', fruits);
const splicedFruits  = fruits.splice(1,3);
console.log('spliced Array', splicedFruits);
console.log('B--->', fruits);

// So main difference between slice and splice is that,  splice altered the original array and includes the second argument index



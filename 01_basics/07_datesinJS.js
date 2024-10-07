let myDate = new Date();
console.log(myDate); // 2024-10-06T08:52:22.690Z
console.log(typeof myDate); // object
console.log(myDate.toString()); // Sun Oct 06 2024 08:51:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sun Oct 06 2024
console.log(myDate.toISOString()); // 2024-10-06T08:53:24.476Z
console.log(myDate.toJSON()); //2024-10-06T08:54:17.289Z
console.log(myDate.toLocaleDateString('en-IN')); //  6/10/2024
console.log(myDate.toLocaleString('en-IN'));  // 6/10/2024, 8:56:50 am

let myTimestamp = Date.now()
console.log('myTimestamp--->', myTimestamp); // 1728205271711  This is in milliseconds
// To convert milliseconds into seconds divide by 1000
console.log('myTimestamp in secs--->', myTimestamp/1000); // 1728205408.748
// Convert into an integer by doing Math.floor()
console.log('myTimestamp in integer--->', Math.floor(myTimestamp/1000));1728205437

console.log('get month --->', myDate.getMonth()); // 9 , since Month index is count from 0 i.e january is 0 then feb is 1
// so to show user proper month add 1
console.log('get real month --->', myDate.getMonth() +1 ); // 10 which is october
console.log('get day --->', myDate.getDay());

console.log(myDate.toLocaleString('default', {
   weekday: 'long'
}));

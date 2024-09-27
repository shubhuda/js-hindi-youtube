const accountId = '12346';
let accountEmail = 'shubh@gmail.com';
var accountPassword = '12345';
accountCity = 'Jaipur';
let accountState; // just declared not defined

/* accountId = '22222'; */ // cannot redeclare constants
accountEmail = 'prt@gmail.com';
accountPassword = '7890';
accountCity = 'bengaluru'; // by default JS will consider it as variable

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
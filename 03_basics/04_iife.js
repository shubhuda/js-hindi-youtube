// Immediately invoked function  expression (IIFE)

// IIFE ki zaroorat kyun hai -> kaibar hum jaise hi site run karte hum chahte hai ek file mai database connection hai bs jo turant hi cnnect hojaye

// ----> this will give error
/* function chai () {
    console.log('DB CONNECTED')
}() */ 

// --->
(function chai () { // Named IIFE
    console.log('DB CONNECTED')
})(); // VERY IMPORTANT TO PUT SEMICOLON so that next iife can execute as javascript doesnt know when iife context will end
//DB CONNECTED

(() => {
    console.log('DB CONNECTED two')
})();
// DB CONNECTED two

((name) => {
    console.log(`DB CONNECTED two with ${name}`)
})('shubham');
// DB CONNECTED two with shubham
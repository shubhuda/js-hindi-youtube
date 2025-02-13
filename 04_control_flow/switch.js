const month = 3;
// shift + alt + down arrow duplicates the codeline
switch (month) {
    case 1:
        console.log('month is jan')
        break;
    case 2:
        console.log('month is feb')
        break;
    case 3:
        console.log('month is march')
        break;
    case 2:
        console.log('month is april')
        break;
    default:
        console.log('default case')
        break;
}
console.log('this code will get exceuted as break will make jump out of the loop and after code will get executed')

// The break statement is used to jump out of a loop. It can be used to “jump out” of a switch() statement. It breaks the loop and continues executing the code after the loop.
// The continue statement “jumps over” one iteration in the loop. It breaks iteration in the loop and continues executing the next iteration in the loop.